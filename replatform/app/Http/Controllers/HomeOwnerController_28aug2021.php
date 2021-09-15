<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product_locations;
use App\Property_type;
use App\HomeOwner_products;
use App\HomeownerOrders;
use App\Location_features;
use App\Product_coverage_upgrades;
use App\Orderitems;
use App\Coupons;
use App\Cardpayment;
use App\HoAppliedCoupons;
use App\HomeOwner_Standard_Features;
use App\HOStandardTitle;
use Omnipay\Omnipay;
use DB;
use Validator;
use Mail;


class HomeOwnerController extends Controller
{
	public $gateway;

	public function __construct()
	{
		$this->gateway = Omnipay::create('AuthorizeNetApi_Api');
		$this->gateway->setAuthName(env('ANET_API_LOGIN_ID'));
		$this->gateway->setTransactionKey(env('ANET_TRANSACTION_KEY'));
		$this->gateway->setTestMode(true); //comment this line when move to 'live'
	}

	public function getAll() {
		$locations = Product_locations::get();
		return response()->json($locations,200);
	}

	public function getProducts($loc_id) {
		$products = DB::table('ho_products')
			->join('ho_property_type', 'ho_property_type.id', '=', 'ho_products.property_type_id')
			->join('ho_product_locations', 'ho_product_locations.id', '=', 'ho_products.location_id')
			->select('ho_products.*', 'ho_product_locations.location_name', 'ho_property_type.name as unit_type')
			->where('ho_products.location_id', $loc_id)
			->get();
	    if($products){
	    	foreach($products as $p){
	    		if($p->unique_features!=''){
	    			$unique_features=[];
	    			$product_features=json_decode($p->unique_features);
		    		foreach($product_features as $key=>$pf){
		    			$arr['key']=(int)($key);
		    			if($pf=='0'){
		    				$arr['value']='No';
		    			}
		    			else{
		    				$arr['value']='Yes';
		    			}
		    			array_push($unique_features, $arr);
		    		}
		    		$p->unique_features=$unique_features;
	    		}
	    	}	
	    }		
		
		return response()->json($products,200);
	}


	public function getLocationUniqFea($loc_id) {
		$features = Location_features::where('location_id', $loc_id)->get();
		return response()->json($features,200);
	}

	public function getProductCovUpgrade($prod_id) {
		$upgrades = Product_coverage_upgrades::where('product_id', $prod_id)->get();
		// echo "**************";
		//print_r($upgrades);
		$newupgrades = array();
		foreach ($upgrades as $upgrade) {
			$upgrade['quantity'] = 0;
			$newupgrades[] = $upgrade;
			if($upgrade['content']!=''){
				$upgrade['content']=json_decode($upgrade['content']);
			}
		}
		return response()->json($newupgrades,200);
	}


	public function createCheckoutOrder(Request $request) {
		$requestdata = (object)$request->json()->all();
		$rules = array(
			'firstname' => 'required',
			'lastname' => 'required',
			'country' => 'required',
			'street1' => 'required',
			'city' => 'required',
			'state' => 'required',
			'pincode' => 'required',
			'phone' => 'required|numeric',
			'email' => 'required|email',
			'prop_street1' => 'required',
			'prop_city' => 'required',
			'prop_state' => 'required',
			'prop_zipcode' => 'required',
			'subtotal' => 'required',
			'total' => 'required',
			'pay_method' => 'required',
			'status' => 'required',
		);
		$validator = Validator::make($request->all(),$rules);
		if($validator->fails()){
			return response()->json([
				"result" => false,
				"message" => $validator->errors()->first(),
			], 422);
		} else {
			$hoOrder = new HomeownerOrders;
			$hoOrder->firstname = $requestdata->firstname;
			$hoOrder->lastname = $requestdata->lastname;
			$hoOrder->company = $requestdata->company;
			$hoOrder->country = $requestdata->country;
			$hoOrder->street1 = $requestdata->street1;
			$hoOrder->street2 = $requestdata->street2;
			$hoOrder->city = $requestdata->city;
			$hoOrder->state = $requestdata->state;
			$hoOrder->pincode = $requestdata->pincode;
			$hoOrder->phone = $requestdata->phone;
			$hoOrder->email = $requestdata->email;
			$hoOrder->prop_street1 = $requestdata->prop_street1;
			$hoOrder->prop_street2 = $requestdata->prop_street2;
			$hoOrder->prop_city = $requestdata->prop_city;
			$hoOrder->prop_state = $requestdata->prop_state;
			$hoOrder->prop_zipcode = $requestdata->prop_zipcode;
			$hoOrder->order_notes = $requestdata->order_notes;
			$hoOrder->subtotal = $requestdata->subtotal;
			$hoOrder->total = $requestdata->total;
			$hoOrder->pay_method = $requestdata->pay_method;
			$hoOrder->status = $requestdata->status;
			$saved = $hoOrder->save();

			if($saved){
				return response()->json([
				"result" => true,
				"order_id" => $hoOrder->id,
				"message" => "hoOrder record created"
				], 201);
			}
			else{
				// App::abort(500, 'Error');
				return response()->json([
				"result" => false,
				"message" => "faillled record created"
				], 422);
			}
		}
	}


	public function addItemsinOrder(Request $request) {
		$requestdata = (object)$request->json()->all();
		// print_r($requestdata);
		foreach ($requestdata as $innrdata) {
			// print_r($data);
			$hoOrder = new Orderitems;
			$hoOrder->order_id = $innrdata['order_id'];
			$hoOrder->product_id = $innrdata['product_id'];
			$hoOrder->product_name = $innrdata['product_name'];
			$hoOrder->prod_type = $innrdata['prod_type'];
			$hoOrder->pay_interval_type = $innrdata['pay_interval_type'];
			$hoOrder->quantity = $innrdata['quantity'];
			$saved = $hoOrder->save();
		}

			if($saved){
				return response()->json([
				"result" => true,
				"message" => "Products added in the Order"
				], 201);
			}
			else{
				// App::abort(500, 'Error');
				return response()->json([
				"result" => false,
				"message" => "faillled record created"
				], 422);
			}
	}


	public function checkCoupon(Request $request) {
		$requestdata = (object)$request->json()->all();
		$rules = array(
			'coupon_code' => 'required',
		);
		$validator = Validator::make($request->all(),$rules);
		if($validator->fails()){
			return response()->json([
				"result" => false,
				"message" => $validator->errors()->first(),
			], 422);
		} else {
			$data = Coupons::where('coupon_code', $requestdata->coupon_code)->first(); 
			if($data){
				if( $data->expiry_date->isPast() ){
					return response()->json([
						"result" => false,
						"message" => "Coupon Code is Expired",
						], 422);
				}
				return response()->json([
					"result" => true,
					"message" => "Coupon Applied Successfully",
					"data" => $data
					], 201);
			}
			else{
				return response()->json([
				"result" => false,
				"message" => "Invalid Coupon Code",
				], 422);
			}
		}
	}


	public function chargePayment(Request $request)
	{
		$requestdata = (object)$request->json()->all();
		$rules = array(
			'cc_number' => 'required|numeric',
			'order_id' => 'required|numeric',
			'payer_email' => 'required',
			'expiry_month' => 'required|numeric',
			'expiry_year' => 'required|numeric',
			'cvv' => 'required|numeric',
			'amount' => 'required|numeric',
		);
		try {
			$orderinfo =  HomeownerOrders::leftJoin('ho_applied_coupons', 'ho_orders.id', '=', 'ho_applied_coupons.order_id')->where('ho_orders.id', $requestdata->order_id)->select('ho_orders.*' ,'ho_applied_coupons.discount')->first();
			if( !empty($orderinfo) ){
				$creditCard = new \Omnipay\Common\CreditCard([
					'number' => $requestdata->cc_number,
					'expiryMonth' => $requestdata->expiry_month,
					'expiryYear' => $requestdata->expiry_year,
					'cvv' => $requestdata->cvv,
					'firstName' => $orderinfo->firstname,
					'lastName' => $orderinfo->lastname,
					'Company' => $orderinfo->company,
					'billingAddress1' => $orderinfo->street1,
					'billingAddress2' => $orderinfo->street2,
					'City' => $orderinfo->city,
					'State' => $orderinfo->state,
					'Postcode' => $orderinfo->pincode,
					'Country' => $orderinfo->country,
					'Phone' => $orderinfo->phone,
					'email' => $orderinfo->email,
				]);
			}
			// Generate a unique merchant site transaction ID.
			$transactionId = rand(100000000, 999999999);

			$response = $this->gateway->authorize([
				'amount' => $requestdata->amount,
				'currency' => 'USD',
				'transactionId' => $transactionId,
				'card' => $creditCard,
			])->send();

			if($response->isSuccessful()) {

				// Captured from the authorization response.
				$transactionReference = $response->getTransactionReference();

				$response = $this->gateway->capture([
					'amount' => $requestdata->amount,
					'currency' => 'USD',
					'transactionReference' => $transactionReference,
					])->send();

				$transaction_id = $response->getTransactionReference();
				$amount = $requestdata->amount;

				// Insert transaction data into the database
				$isPaymentExist = Cardpayment::where('transaction_id', $transaction_id)->first();

				if(!$isPaymentExist)
				{
					$payer_email = $requestdata->payer_email;
					$payment = new Cardpayment;
					$payment->transaction_id = $transaction_id;
					$payment->order_id = $requestdata->order_id;
					$payment->payer_email = $payer_email;
					$payment->amount = $requestdata->amount;
					$payment->currency = 'USD';
					$payment->payment_status = 'Captured';
					$saved = $payment->save();

					if($saved){
						$orderinfo['order_date'] = $orderinfo->created_at->format('F d,Y');
						$orderitems = Orderitems::leftJoin('ho_orders', 'ho_orders.id', '=', 'ho_order_items.order_id')
						->where('ho_orders.id', $requestdata->order_id)
						->select('ho_order_items.*' ,'ho_order_items.id as itemid')
						->get();

					foreach ($orderitems as $orderitem) {
						if( $orderitem->prod_type == 'simple'){
							$productinfo = HomeOwner_products::where('id', $orderitem->product_id)->first();
							$orderitem['productinfo'] = $productinfo;
						}
						else{
							$productinfo = Product_coverage_upgrades::where('id', $orderitem->product_id)->first();
							$orderitem['productinfo'] = $productinfo;
						}
					}
					$orderinfo['productitems'] = $orderitems;
					// Send mail to admin
					\Mail::send('emailtemplate/homeowner-invoice', array(
						'order_id' => $requestdata->order_id,
						'pay_method' => $orderinfo['pay_method'],
						'order_date' => $orderinfo['order_date'],
						'productitems' => $orderitems,
						'subtotal' => $orderinfo['subtotal'],
						'total' => $orderinfo['total'],
						'prop_street1' => $orderinfo['prop_street1'],
						'prop_street2' => $orderinfo['prop_street2'],
						'prop_city' => $orderinfo['prop_city'],
						'prop_state' => $orderinfo['prop_state'],
						'prop_zipcode' => $orderinfo['prop_zipcode'],
						'order_notes' => $orderinfo['order_notes'],
						'firstname' => $orderinfo['firstname'],
						'lastname' => $orderinfo['lastname'],
						'company' => $orderinfo['company'],
						'street1' => $orderinfo['street1'],
						'street2' => $orderinfo['street2'],
						'city' => $orderinfo['city'],
						'state' => $orderinfo['state'],
						'pincode' => $orderinfo['pincode'],
						'phone' => $orderinfo['phone'],
						'email' => $orderinfo['email'],
						'discount' => $orderinfo['discount'],
					), function($message) use ($payer_email){
						$message->from('jmbliss92@gmail.com');
						$message->to($payer_email)->subject('Your Acclaimed Home Warranty order has been received!');
					}); 
					
					HomeownerOrders::where( 'id', $requestdata->order_id )->update(array('status' => 'completed'));
					
						return response()->json([
						"result" => true,
						"message" => "Payment Successfully",
						"data" => $transaction_id
						], 201);
					}
				}
				// return "Payment is successful. Your transaction id is: ". $transaction_id;
			} else {
				// not successful
				HomeownerOrders::where( 'id', $requestdata->order_id )->update(array('status' => 'failed'));
				return response()->json([
				"result" => false,
				"message" => $response->getMessage(),
				], 422);
			}
		} catch(Exception $e) {
			return $e->getMessage();
		}
	}

	public function getOrderinfo($order_id){
		$orderinfo =  HomeownerOrders::leftJoin('ho_applied_coupons', 'ho_orders.id', '=', 'ho_applied_coupons.order_id')->where('ho_orders.id', $order_id)->select('ho_orders.*' ,'ho_applied_coupons.discount')->first();
		$orderinfo['order_date'] = $orderinfo->created_at->format('F d,Y');

		$orderitems = Orderitems::leftJoin('ho_orders', 'ho_orders.id', '=', 'ho_order_items.order_id')
			// ->leftJoin('ho_products', 'ho_order_items.product_id', '=', 'ho_products.id')
			->where('ho_orders.id', $order_id)
			->select('ho_order_items.*' ,'ho_order_items.id as itemid')
			->get();

		foreach ($orderitems as $orderitem) {
			if( $orderitem->prod_type == 'simple'){
				$productinfo = HomeOwner_products::where('id', $orderitem->product_id)->first();
				$orderitem['productinfo'] = $productinfo;
			}
			else{
				$productinfo = Product_coverage_upgrades::where('id', $orderitem->product_id)->first();
				$orderitem['productinfo'] = $productinfo;
			}
		}
		$orderinfo['productitems'] = $orderitems;
		return response()->json($orderinfo,200);
	}
	
	public function applyCoupon( Request $request ){
		$requestdata = (object)$request->json()->all();
		$rules = array(
			'order_id' => 'required|numeric',
			'coupon_code' => 'required',
			'discount' => 'required|numeric',
		);
		$validator = Validator::make($request->all(),$rules);
		if($validator->fails()){
			return response()->json([
				"result" => false,
				"message" => $validator->errors()->first(),
			], 422);
		} else {
			$hoOrder = new HoAppliedCoupons;
			$hoOrder->order_id = $requestdata->order_id;
			$hoOrder->coupon_code = $requestdata->coupon_code;
			$hoOrder->discount = $requestdata->discount;
			$saved = $hoOrder->save();

			if($saved){
				return response()->json([
				"result" => true,
				"message" => "Coupon record saved"
				], 201);
			}
			else{
				return response()->json([
				"result" => false,
				"message" => "failed in create record"
				], 422);
			}
		}
	}
	public static function get_standard_fetures($location_id)
    {
        $standard = HOStandardTitle::leftJoin('ho_product_locations','ho_product_locations.id', '=','h_o_standard_titles.location_id')
        ->where('ho_product_locations.id' ,$location_id)
        ->select('ho_product_locations.location_name','h_o_standard_titles.*')
        ->get();
       foreach($standard as $std)
        {
          $productinfo = HomeOwner_Standard_Features::where('sf_title_id', $std->id)
          ->select('standard_features')
          ->get();
          $std['productinfo'] = $productinfo;
        }    
        return response()->json($standard,200);
    }

}