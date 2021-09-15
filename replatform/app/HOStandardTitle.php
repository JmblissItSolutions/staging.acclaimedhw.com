<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HOStandardTitle extends Model
{
    protected $table = 'h_o_standard_titles';
    protected $fillable = ['location_id','standard_titles'];

}
