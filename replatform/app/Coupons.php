<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coupons extends Model
{
	protected $table = 'ho_coupons';
	protected $dates = ['expiry_date'];
}
