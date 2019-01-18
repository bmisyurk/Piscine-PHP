<?php
	if ($_GET['action'] == 'set')
		setcookie($_GET['name'], $_GET['value']);
	else if ($_GET['action'] == 'get' && $_GET['name'])
		echo $_GET['name']."\n";
	else if ($_GET['action'] == 'del')
		setcookie($_GET['name'], "", time(0));		
?>