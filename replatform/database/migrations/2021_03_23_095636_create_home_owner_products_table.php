<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeOwnerProductsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ho_products', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('location_id')->unsigned();
			$table->integer('property_type_id')->unsigned();
			$table->string('name');
			$table->string('monthly_price');
			$table->string('yearly_price');
			$table->text('unique_features')->nullable();
			$table->timestamps();

			$table->foreign('location_id')
			->references('id')
			->on('ho_product_locations');

			$table->foreign('property_type_id')
			->references('id')
			->on('ho_property_type');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('ho_products');
	}
}
