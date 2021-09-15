<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
class RealOrderItems extends Model
{
    protected $table = 'real_order_items';
    protected $fillable = ['order_id','product_id','product_name','prod_type','quantity','rate','line_total'];
}
