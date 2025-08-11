# genesis_block_demo.py
from dataclasses import dataclass
import time, json, hashlib

@dataclass
class Block:
    index: int
    timestamp: float
    transactions: list
    previous_hash: str
    nonce: int = 0
    hash: str = ""

    def compute_hash(self):
        # Deterministic JSON -> stable hashing
        block_string = json.dumps({
            "index": self.index,
            "timestamp": self.timestamp,
            "transactions": self.transactions,
            "previous_hash": self.previous_hash,
            "nonce": self.nonce
        }, sort_keys=True, separators=(',', ':'))
        return hashlib.sha256(block_string.encode()).hexdigest()

def proof_of_work(block, difficulty=3, max_tries=10_000_00):
    """
    Find a nonce such that the block's hash starts with `difficulty` zeros.
    difficulty=3 is small for demo purposes. Increase difficulty to make
    mining slower/harder.
    """
    prefix = '0' * difficulty
    for n in range(max_tries):
        block.nonce = n
        h = block.compute_hash()
        if h.startswith(prefix):
            block.hash = h
            return block
    raise RuntimeError("Proof-of-work not found within max_tries")

def create_genesis_block(difficulty=3):
    genesis = Block(
        index=0,
        timestamp=time.time(),
        transactions=[{
            "sender": "network",
            "recipient": "genesis",
            "amount": 0,
            "note": "genesis block"
        }],
        previous_hash='0' * 64
    )
    mined = proof_of_work(genesis, difficulty=difficulty)
    return mined

if __name__ == "__main__":
    genesis = create_genesis_block(difficulty=3)
    print("Genesis block mined:")
    print(json.dumps({
        "index": genesis.index,
        "timestamp": genesis.timestamp,
        "transactions": genesis.transactions,
        "previous_hash": genesis.previous_hash,
        "nonce": genesis.nonce,
        "hash": genesis.hash
    }, indent=2))
