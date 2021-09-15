<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HomeownerOrders extends Model
{
	protected $table = 'ho_orders';
	protected $fillable = ['firstname', 'lastname', 'company', 'country', 'street1', 'street2', 'city', 'state', 'pincode', 'phone', 'email', 'prop_street1', 'prop_street2', 'prop_city', 'prop_state', 'prop_zipcode', 'order_notes', 'subtotal', 'total', 'pay_method', 'status'];
}
