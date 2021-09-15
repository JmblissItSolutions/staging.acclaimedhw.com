<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HomeOwner_Standard_Features extends Model
{
    protected $table = 'home_owner__standard__features';
    protected $fillable = ['location_id','sf_title_id','standard_features'];


}
