<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRealstateFeaturesTitleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relstate_features_titles', function (Blueprint $table) {
            $table->id();
            $table->string('sf_title');
            $table->integer('location_id')->unsigned();
            $table->timestamps();

            $table->foreign('location_id')
            ->references('id')
            ->on('realstate_locations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('realstate_features_title');
    }
}
