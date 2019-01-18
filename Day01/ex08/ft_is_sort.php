<?php
	function ft_is_sort($array)
	{
		$ar_buf0 = $array;
		sort($ar_buf0);

		if ($ar_buf0 === $array)
			return true;
		else
			return false;
	}
?>