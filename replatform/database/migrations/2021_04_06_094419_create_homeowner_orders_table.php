<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeownerOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ho_orders', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('company')->nullable();
            $table->string('country');
            $table->string('street1');
            $table->string('street2')->nullable();
            $table->string('city');
            $table->string('state');
            $table->string('pincode');
            $table->string('phone');
            $table->string('email');
            $table->string('prop_street1');
            $table->string('prop_street2')->nullable();
            $table->string('prop_city');
            $table->string('prop_state');
            $table->string('prop_zipcode');
            $table->text('order_notes')->nullable();
            $table->string('subtotal');
            $table->string('total');
            $table->string('pay_method');
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ho_orders');
    }
}
