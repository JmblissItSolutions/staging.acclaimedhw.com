<?php 
namespace App\Helpers;


class ApiHelpers
{
	public static function jsonToArray($json)
	{
		$json = str_replace(array('{', '}'), array('[',']'), $json);
		return (json_decode($json));
	}
}


