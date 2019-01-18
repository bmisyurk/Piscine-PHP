#!/usr/bin/php
<?php
    if ($argc > 1){
        $array = array_filter(explode(" ", $argv[1]));
		$cnt = 0;
        foreach ($array as $v)
        {
        	if ($cnt > 0)
           		$ret .= $v." ";
           	else
           		$first .= $v."\n";
        	$cnt++;
        }
        $ret .= $first;
        echo trim($ret);
    }