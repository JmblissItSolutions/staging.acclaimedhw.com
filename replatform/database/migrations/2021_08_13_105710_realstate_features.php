<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelastateFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('realstate_features', function (Blueprint $table) {
            $table->id();
            $table->string('feature_name');
            $table->integer('sf_title_id')->unsigned();
            $table->integer('location_id')->unsigned();
            $table->timestamps();

            
            $table->foreign('location_id')
            ->references('id')
            ->on('realstate_locations');

            $table->foreign('sf_title_id')
            ->references('id')
            ->on('realstate_features_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('realstate_features');
    }
}
