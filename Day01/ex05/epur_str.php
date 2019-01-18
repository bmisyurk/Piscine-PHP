#!/usr/bin/php
<?php
if ($argc == 2) {
		 $mas = array_filter(explode(" ", $argv[1]));
		foreach ($mas as $value)
			$sub .= $value." ";
		echo trim($sub)."\n";	
}