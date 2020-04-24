<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Price;

class PriceController extends Controller
{
	//
	public function index()
	{
		return Price::all();
	}
}
