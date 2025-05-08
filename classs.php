<?php
class animal
{
    public function __construct(){
        echo 'The class "' . __CLASS__ . '" was initiated!';
    }
}

$obj = new animal;

?>
