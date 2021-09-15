<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RealstateFeaturesTitle extends Model
{
    protected $table = 'realstate_features_title';
    protected $fillable = ['sf_title', 'location_id'];
}
