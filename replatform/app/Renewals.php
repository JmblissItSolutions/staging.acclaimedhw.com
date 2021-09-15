<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Renewals extends Model
{
    protected $table = 'renewals';
   
   
    protected $fillable = [
        'first_name', 'last_name', 'address_or_policy_number', 'email', 'phone', 'renewal_type', 'additional_details'
    ]; 
}
