<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Realstate_locations;
use App\Realstate_coverage_type;
use App\Realstate_realationship;
use App\Realstate_products;
use App\Helpers\ApiHelpers;




class RealstateController extends Controller
{
	public function getStates() {
		$states = Realstate_locations::get();
		return response()->json($states,200);
	}


	public function getCovType() {
		$covtype = Realstate_coverage_type::get();
		return response()->json([
				"result" => true,
				"questions" => $covtype,
		], 201);
	}


	public function getQuestions( Request $request ) {
		$requestdata = (object)$request->json()->all();
		$rules = array(
			'state_id' => 'required|numeric',
			'cov_type_id' => 'required|numeric',
		);

		$questions = Realstate_realationship::leftJoin('realstate_questions', 'realstate_relationships.question_type_id', '=', 'realstate_questions.id')
		->where('realstate_relationships.location_id', $requestdata->state_id)
		->where('realstate_relationships.coverage_type_id', $requestdata->cov_type_id)
		->select('realstate_questions.*')
		->get();
		return response()->json([
				"result" => true,
				"questions" => $questions,
		], 201);
	}

	public function getProducts( Request $request ) {
		$requestdata = (object)$request->json()->all();
		$rules = array(
			'state_id' => 'required|numeric',
			'cov_type_id' => 'required|numeric',
			'question_id' => 'required|numeric',
		);

		$products = Realstate_realationship::where('location_id', $requestdata->state_id)
		->where('coverage_type_id', $requestdata->cov_type_id)
		->where('question_type_id', $requestdata->question_id)
		->select('product_ids')
		->get();

		$prodarray = array();
		if( !empty( $products ) ){
			foreach ($products as $product) {
				$ids =  $product->product_ids;
				$idarray =  ApiHelpers::jsonToArray($ids);
				foreach ($idarray as $prodid) {
					$productinfo = Realstate_products::where('id', $prodid)->first();
					$prodarray[] = $productinfo;
				}
			}
		}
		if( !empty($prodarray) ){
			return response()->json([
					"result" => true,
					"products" => $prodarray,
			], 201);
		}
		else{
			return response()->json([
					"result" => false,
					"message" => "No Products Found",
			], 422);
		}
	}
}
