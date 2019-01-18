#!/usr/bin/php
<?php
    unset($argv[0]);
    foreach($argv as $v)
        $sub .= $v." ";
    $array = array_filter(explode(' ', $sub));
    sort($array);
    foreach ($array as $v)
        echo $v."\n";