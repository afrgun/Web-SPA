<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
	//
	protected $fillable = ['title', 'price_normal', 'price_discount'];
}
