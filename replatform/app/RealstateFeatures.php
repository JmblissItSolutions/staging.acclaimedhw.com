<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RealstateFeatures extends Model
{
	protected $table = 'realstate_features';
    protected $fillable = ['feature_name', 'sf_title_id', 'location_id'];
}