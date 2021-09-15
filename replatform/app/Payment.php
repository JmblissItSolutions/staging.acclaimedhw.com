<?php

//namespace App\Models;
namespace App;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //use HasFactory;
    protected $table = 'payments';
    protected $fillable = [
    	'transaction_id', 'name', 'amount', 'currency', 'payment_status'
    ];
}
