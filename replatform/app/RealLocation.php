<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RealLocation extends Model
{
    use HasFactory;
    protected $table = 'realstate_locations';
    protected $fillable = ['location_name'];
}
