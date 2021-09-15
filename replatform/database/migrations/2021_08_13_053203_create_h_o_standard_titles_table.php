<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHOStandardTitlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('h_o_standard_titles', function (Blueprint $table) {
            $table->id();
            $table->integer('location_id')->unsigned();
            $table->string('standard_titles');
            $table->timestamps();

            $table->foreign('location_id')
            ->references('id')
            ->on('ho_product_locations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('h_o_standard_titles');
    }
}
