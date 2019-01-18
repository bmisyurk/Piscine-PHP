<?php
function ft_split($str)
{
	$mas = explode(" ", $str);
	$filter = array_filter($mas, "strlen");
	sort($filter);
	return ($filter);
}

?>