<?php
$dataInput = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

$result = 0;

foreach(str_split($dataInput) as $value) {
	switch ($value) {
	    case '#':
	        $result ++;
	        break;
	    case '@':
	        $result --;
	        break;
	    case '*':
	        $result = $result * $result;
	        break;
	    case '&':
	        echo $result;
	        break;
	}
}