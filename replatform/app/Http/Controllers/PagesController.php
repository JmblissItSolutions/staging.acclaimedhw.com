<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sliders;
class PagesController extends Controller
{
	public function getSlider() {
		$locations = Sliders::get();
		return response()->json($locations,200);
	}
}
