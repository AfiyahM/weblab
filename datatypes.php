<?php
$age = 25;
if (is_int($age)){
    echo "$age is Integer \n" ;
}


$pi = 3.14;

$greeting = "Hello, World!";
if (is_string($greeting)){
    echo "\n$greeting is String \n" ;
}

$isTrue = true;
$fruits = array("apple", "banana", "cherry");
if(is_array($fruits)){
    echo "\n Fruits is Array \n" ;
}

$person = array("name" => "Afiyah", "age" => 20, "city" => "Kolhapur");
$nullValue = null;

echo $age; 
 
echo $pi;

echo $greeting;

if ($isTrue){
    echo "\n true\n";


}

echo $fruits[0]; 
echo $person["name"];  

?>