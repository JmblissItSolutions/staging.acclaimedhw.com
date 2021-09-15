<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeOwnerStandardFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_owner__standard__features', function (Blueprint $table) {
            $table->id();
            $table->integer('location_id')->unsigned();
            $table->integer('sf_title_id')->unsigned();
            $table->string('standard_features');
            $table->timestamps();

            
            $table->foreign('location_id')
            ->references('id')
            ->on('ho_product_locations');

            $table->foreign('sf_title_id')
            ->references('id')
            ->on('h_o_standard_titles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_owner__standard__features');
    }
}
