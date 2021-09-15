<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RealStateOrders;
use App\RealOrderItems;
use App\Realstate_products;
use App\Realstate_coverage;
use App\Realstate_relationship;
use App\Realstate_question_relationships;
use App\RealCoupons;
use App\RealAppliedCoupons;
use App\Realstate_locations;
use App;
use Validator;
use DB;
use Mail;
use PDF;
use URL;
class RealStateOrderController extends Controller
{
    public function storerealorders(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'p_location_id' => 'required',
            'p_coverage_type_id' => 'required',
            'p_property_type_id' => 'required',
            'prop_street1' => 'required',
            'prop_city' => 'required',
            'prop_state' => 'required',
            'prop_zipcode' => 'required|numeric',
            //'buyer_name' => 'required',
            //'buyer_phone' => 'required|numeric',
            //'no_buyer_agent' => 'required',
            //'seller_agentname' => 'required',
            'no_buyer_agent'=> 'required',
            'no_seller_agent'=> 'required',
            'escrow_title' => 'required',
            'escrow_state' => 'required',
            'closing_officername' => 'required',
            'closing_officeremail' => 'required|email',     
            'order_biller' => 'required',
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails()){            
            return response()->json([
                "result" => false,
                "message" => $validator->errors()->first(),
                ], 422); 
        } else {
            if($request->p_coverage_type_id==1){
                if($request->buyer_name ==''){
                    return response()->json([
                    "result" => false,
                    "message" => 'No buyer name provided',
                    ], 422); 
                }
                if($request->buyer_phone ==''){
                    return response()->json([
                    "result" => false,
                    "message" => 'No buyer phone provided',
                    ], 422); 
                }

            }
            if($request->no_buyer_agent==false  && $request->p_coverage_type_id==1){
                if($request->buyer_agentname ==''){
                    return response()->json([
                    "result" => false,
                    "message" => 'No buyer agent name provided',
                    ], 422); 
                }
                if($request->buyer_agentemail ==''){
                    return response()->json([
                    "result" => false,
                    "message" => 'No buyer agent email provided',
                    ], 422); 
                }
            }
            else{
                $request->buyer_agentname="No Buyer Agent Name";
            }
            if($request->no_seller_agent==false){
                if($request->seller_agentname ==''){
                    return response()->json([
                    "result" => false,
                    "message" => 'No Seller agent name provided',
                    ], 422); 
                }
                if($request->seller_agentemail ==''){
                    return response()->json([
                    "result" => false,
                    "message" => 'No Seller agent email provided',
                    ], 422); 
                }
            }
            else{
                $request->seller_agentname="No Seller Agent Name";
            }
            // if(isset($request->coupon_code) && !empty($request->coupon_code)){
                
            //     $valid_coupon= $this->check_coupon_valid($request->coupon_code);
            //      if($valid_coupon ==0){
            //         return response()->json([
            //         "result" => false,
            //         "message" => 'Coupon Code is invalid or Expired.',
            //         ], 422); 
            //     }
            // }
            // echo 'tst';
            // die;
            $realorders = new RealStateOrders;
            $realorders->p_location_id = $request->p_location_id;
            $realorders->p_coverage_type_id = $request->p_coverage_type_id;
            $realorders->p_property_type_id = $request->p_property_type_id;
            $realorders->prop_street1 = $request->prop_street1;
            $realorders->prop_street2 = $request->prop_street2;
            $realorders->prop_city = $request->prop_city;
            $realorders->prop_state = $request->prop_state;
            $realorders->prop_zipcode = $request->prop_zipcode;
            $realorders->buyer_name = $request->buyer_name;
            $realorders->buyer_phone= $request->buyer_phone;
            $realorders->buyer_email = $request->buyer_email;
            $realorders->buyer_agentname = $request->buyer_agentname;
            $realorders->buyer_agentphone = $request->buyer_agentphone;
            $realorders->buyer_agentemail = $request->buyer_agentemail;
            $realorders->buyer_realstate_company = $request->buyer_realstate_company;
            $realorders->buyer_coordinatorname = $request->buyer_coordinatorname;
            $realorders->buyer_coordinatorphone = $request->buyer_coordinatorphone;
            $realorders->buyer_coordinatoremail = $request->buyer_coordinatoremail;
            $realorders->seller_name = $request->seller_name;
            $realorders->seller_phone = $request->seller_phone;
            $realorders->seller_email = $request->seller_email;
            $realorders->seller_agentname = $request->seller_agentname;
            $realorders->seller_agentphone = $request->seller_agentphone;
            $realorders->seller_agentemail = $request->seller_agentemail;
            $realorders->seller_realstate_company = $request->seller_realstate_company;
            $realorders->seller_coordinatorname = $request->seller_coordinatorname;
            $realorders->seller_coordinatorphone = $request->seller_coordinatorphone;
            $realorders->seller_coordinatoremail = $request->seller_coordinatoremail;
            $realorders->escrow_title = $request->escrow_title;
            $realorders->escrow_street1 = $request->escrow_street1;
            $realorders->escrow_street2 = $request->escrow_street2;
            $realorders->escrow_city = $request->escrow_city;
            $realorders->escrow_state = $request->escrow_state;
            $realorders->escrow_zipcode = $request->escrow_zipcode;
            $realorders->closing_officername = $request->closing_officername;
            $realorders->closing_officeremail = $request->closing_officeremail;
            $realorders->closing_officerphone = $request->closing_officerphone;
            if(isset($request->closing_date) && !empty($request->closing_date)){
                $realorders->closing_date = date('Y-m-d',strtotime($request->closing_date));
            }
            else{
                $realorders->closing_date = "";
            }
            $realorders->escrow_assistantname = $request->escrow_assistantname;
            $realorders->escrow_assistantemail = $request->escrow_assistantemail;
            $realorders->order_biller = $request->order_biller;
            $realorders->order_notes = $request->order_notes;
            $realorders->sales_person = $request->sales_person;
            $realorders->coupon_code = $request->coupon_code;
            $realorders->total_amount = $request->total_price;
            $realorders->net_amount = $request->total_price;
            $realorders->credit_balance = $request->credit_balance;
            $realorders->i_am_the = $request->i_am_the;
            $realorders->order_status = 1;
            $net_amount=$request->total_price;
            $discount=0;
            if($request->coupon_code!=''){
                  $coupon_where='real_coupons.coupon_code="'.$request->coupon_code.'" and real_coupons.expiry_date>="'.date('Y-m-d').'"';
                  DB::enableQueryLog();
    
                  $couponinfo= DB::select('select * from real_coupons where '.$coupon_where);
                    
                  $query = DB::getQueryLog();
                  $lastQuery = end($query);
                  //echo $lastQuery['query'];
                  //die;
                   if( !empty($couponinfo ) ){
                        if($couponinfo[0]->discount_type=='percent'){
                            $discount=($request->total_price * $couponinfo[0]->coupon_amount) /100;
                            $net_amount=$request->total_price-$discount;
                            $realorders->net_amount = $net_amount;
                        }
                        else{

                            $discount=$couponinfo[0]->coupon_amount;
                            $net_amount=$request->total_price-$discount;
                            $realorders->net_amount = $net_amount;          
                        }
                    }    
            }

            
           

            $saved = $realorders->save();
                  
                if ($saved) { 

                      $order_id=DB::getPdo()->lastInsertId();
                        if($request->coupon_code!=''){
                             // Saving Applied Coupon
                            $realOrder = new RealAppliedCoupons;
                            $realOrder->order_id = $order_id;
                            $realOrder->coupon_code = $request->coupon_code;
                            $realOrder->discount = $discount;
                            $saved = $realOrder->save();
                        }
                       
                      return response()->json([
                          "result" => true,
                          'message' => 'Your order is registered successfully.',
                          'order_id' =>$order_id
                      ], 200);
                          
                }
                else{ 
                    return response()->json([
                        "result" => false,
                        'message' => 'Failed to register Order.'], 400); 
                }    
        }
    }
    public function storerealorderitems(Request $request)
    {
        $requestdata = (object)$request->json()->all();
       
        if(!empty($requestdata)){
            $order_id=0;
            foreach ($requestdata as $innrdata) {
                $realorders = new RealOrderItems;
                $order_id=$innrdata['order_id'];
                $realorders->order_id = $innrdata['order_id'];
                $realorders->product_id = $innrdata['product_id'];
                $realorders->product_name = $innrdata['product_name'];
                $realorders->prod_type = $innrdata['prod_type'];
                $realorders->quantity = $innrdata['quantity'];
                $realorders->rate = $innrdata['price'];
                $realorders->line_total = $innrdata['price']*$innrdata['quantity'];
                $saved = $realorders->save();
            }
            if($saved){
                
                return response()->json([
                "result" => true,
                "message" => "Products added in the Order"
                ], 201);
            }
            else{
                return response()->json([
                "result" => false,
                "message" => "failed record created"
                ], 422);
            }
        }
        else{
            return response()->json([
            "result" => false,
            "message" => "No Order Item provided"
            ], 400);
        }
           
    }
    public function SendInvoiceEmail(Request $request)
    {
        $requestdata = (object)$request->json()->all();
       
        $rules = array(
            'order_id' => 'required',
            'receivers' => 'required',
            
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails()){            
            return response()->json([
                "result" => false,
                "message" => $validator->errors()->first(),
                ], 422); 
        } 
        else {
            $mail_status=$this->send_email($request->order_id,$request->receivers);
            if($mail_status){
                RealStateOrders::where( 'id', $request->order_id )->update(array('order_status' => 2));
                return response()->json([
                    "result" => true,
                    "message" => 'Invoice sent successfully to the selected users.',
                    "invoice_pdf"=> "<a href='".URL::to('api/downloadInvoicePdf/'.$request->order_id)."' target='_blank'>Download Invoice</a>"
                    ], 424);
            }
            else{
                return response()->json([
                "result" => false,
                "message" => 'Unable to send Invoice email',
                "invoice_pdf"=>""
                ], 423);
            }
            
        }
    }        
    public function send_email($order_id,$receivers){
        if($receivers!=""){
            $receivers=explode(',',$receivers);
            

            $orderinfo =  RealStateOrders::leftJoin('real_applied_coupons', 'realstate_orders.id', '=', 'real_applied_coupons.order_id')->where('realstate_orders.id', $order_id)->select('realstate_orders.*' ,'real_applied_coupons.discount')->first();
            $orderinfo['order_date'] = $orderinfo->created_at->format('F d,Y');
            $orderitems = RealStateOrders::leftJoin('real_order_items', 'realstate_orders.id', '=', 'real_order_items.order_id')
            ->where('realstate_orders.id', $order_id)
            ->select('real_order_items.*' ,'real_order_items.id as itemid')
            ->get();
            $receivers=array_map('trim', $receivers);
            //print_r($receivers);
            $receiver_emails=[];
            // Getting email of the selectd user types to send email.
            $payer_email="";
            if(in_array('The Buyer', $receivers)){
                if($orderinfo->buyer_email!=''){
                    array_push($receiver_emails, $orderinfo->buyer_email);
                }
            }
            if(in_array("The Buyer's Agent", $receivers)){
                if($orderinfo->buyer_agentemail!=''){
                    array_push($receiver_emails, $orderinfo->buyer_agentemail);
                }
            }
            if(in_array("The Buyer's Coordinator", $receivers)){
                if($orderinfo->buyer_coordinatoremail!=''){
                    array_push($receiver_emails, $orderinfo->buyer_coordinatoremail);
                }
            }
            if(in_array('The Seller', $receivers)){
                if($orderinfo->seller_email!=''){
                    array_push($receiver_emails, $orderinfo->seller_email);
                }
            }
            if(in_array("The Seller's Agent", $receivers)){
                if($orderinfo->seller_agentemail!=''){
                    array_push($receiver_emails, $orderinfo->seller_agentemail);
                }
            }
            if(in_array("The Seller's Coordinator", $receivers)){
                if($orderinfo->seller_coordinatoremail!=''){
                    array_push($receiver_emails, $orderinfo->seller_coordinatoremail);
                }
            }
            if(in_array("The Closing Officer", $receivers)){
                if($orderinfo->seller_agentemail!=''){
                    array_push($receiver_emails, $orderinfo->closing_officeremail);
                }
            }
            if(in_array("The Escrow Assistant", $receivers)){
                if($orderinfo->escrow_assistantemail!=''){
                    array_push($receiver_emails, $orderinfo->escrow_assistantemail);
                }
            }
            //print_r($receiver_emails);
            //die;
            
            foreach($receiver_emails as $e){
                $receiver_emails=$e;
           
                // Send mail to User
                $pdf_stream=$this->create_invoice_pdf($order_id);
                $inv_no = str_pad($order_id, 8, "0", STR_PAD_LEFT);
                $mail_status=Mail::send('emailtemplate/real-invoice', array(
                    'order_id' => $order_id,
                    'prop_street1' => $orderinfo['prop_street1'],
                    'prop_street2' => $orderinfo['prop_street2'],
                    'prop_city' => $orderinfo['prop_city'],
                    'unit'=> $orderinfo['unit'],
                    'prop_state'=> $orderinfo['prop_state'],
                    'prop_zipcode'=> $orderinfo['prop_zipcode']
                    
                 ), function($message) use ($receiver_emails,$order_id,$pdf_stream,$inv_no){
                    
                    $message->attachData($pdf_stream,'AHW'.$inv_no.'.pdf');
                   
                    $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                    $message->to($receiver_emails)->subject('Your Real Estate Warranty order has been received!');
                }); 
            }
            return 1;
        }
        else{
            return 0;
        }

    }
    public function getRealStateOrders(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        
        $ordersinfo = RealStateOrders::get();
        return response()->json($ordersinfo,200);
        $orderitems = RealOrderItems::leftJoin('realstate_orders', 'realstate_orders.id', '=', 'real_order_items.order_id')
            // ->leftJoin('ho_products', 'ho_order_items.product_id', '=', 'ho_products.id')
            ->where('realstate_orders.id', $order_id)
            ->select('real_order_items.*' ,'real_order_items.id')
            ->get();

        foreach ($orderitems as $orderitem) {
            if( $orderitem->prod_type == 'plan'){
                $productinfo = RealProducts::where('id', $orderitem->product_id)->first();
                $orderitem['productinfo'] = $productinfo;
            }
            else{
                $productinfo = RealCoverageUpgrades::where('id', $orderitem->product_id)->first();
                $orderitem['productinfo'] = $productinfo;
            }
        } 
        $ordersinfo['productitems'] = $orderitems; 
        return response()->json($ordersinfo,200);
    }
    public function getrealorderinfo($order_id)
    {
        $ordersinfo = RealStateOrders::Join('realstate_coverage_types','realstate_coverage_types.id',
'=','realstate_orders.p_coverage_type_id')->Join('realstate_locations','realstate_locations.id',
'=','realstate_orders.p_location_id')->Join('realstate_property_type','realstate_property_type.id',
'=','realstate_orders.p_property_type_id')->where('realstate_orders.id', $order_id)->select('realstate_orders.*','realstate_locations.location_name','realstate_coverage_types.co_type_name','realstate_property_type.name as property_type_name')->first();

        $orderitems = RealOrderItems::Join('realstate_orders', 'realstate_orders.id', '=', 'real_order_items.order_id')
            // ->leftJoin('ho_products', 'ho_order_items.product_id', '=', 'ho_products.id')
            ->where('realstate_orders.id', $order_id)
            ->select('real_order_items.id','real_order_items.order_id' ,'real_order_items.product_id','real_order_items.prod_type','real_order_items.product_name','real_order_items.prod_type','real_order_items.quantity','real_order_items.rate','real_order_items.line_total')
            ->get();
        
        foreach ($orderitems as $orderitem) {
           // print_r($orderitem);
            //echo($orderitem['prodd_type']);
            if( $orderitem->prod_type == 'plan'){
                $productinfo = Realstate_products::where('id', $orderitem->product_id)->first();
                $orderitem['productinfo'] = $productinfo;
            }
            else{
                $productinfo = Realstate_coverage::where('id',$orderitem->product_id)->first();
                $orderitem['productinfo'] = $productinfo;
            }
        } 
        $invoice_receivers= [];
        if($ordersinfo->buyer_email!=''){
            $arr=array();
            $arr['name']="The Buyer";
            $arr['isAdded']=false;
            array_push($invoice_receivers,$arr);
        }
        if($ordersinfo->buyer_agentemail!=''){
            $arr=array();
            $arr['name']="The Buyer's Agent";
            $arr['isAdded']=false;
            array_push($invoice_receivers,$arr);
        }
        if($ordersinfo->buyer_coordinatoremail!=''){
            $arr=array();
            $arr['name']="The Buyer's Coordinator";
            $arr['isAdded']=false;
            array_push($invoice_receivers,$arr);
        }
        if($ordersinfo->seller_email!=''){
            $arr=array();
            $arr['name']="The Seller";
            $arr['isAdded']=false;
            array_push($invoice_receivers,$arr);
        }
        if($ordersinfo->seller_agentemail!=''){
            $arr=array();
            $arr['name']="The Seller's Agent";
            $arr['isAdded']=false;
            array_push($invoice_receivers,$arr);
        } 
        if($ordersinfo->seller_coordinatoremail!=''){
            $arr=array();
            $arr['name']="The Seller's Coordinator";
            $arr['isAdded']=false;
            array_push($invoice_receivers,$arr);
        }
        if($ordersinfo->closing_officeremail!=''){
            $arr=array();
            $arr['name']="The Closing Officer";
            $arr['isAdded']=false;
            array_push($invoice_receivers,$arr);
        }
        if($ordersinfo->escrow_assistantemail!=''){
            $arr=array();
            $arr['name']="The Escrow Assistant";
            $arr['isAdded']=false;
            array_push($invoice_receivers,$arr);
        }
        $ordersinfo['invoice_receivers'] = $invoice_receivers;
        $ordersinfo['productitems'] = $orderitems;
        return response()->json($ordersinfo,200);//,$invoice_receivers,JSON_FORCE_OBJECT
    }
    public function storerealrelationship(Request $request)
    {
        $rules = array(
            'location_id' => 'required|numeric',
            'coverage_type_id' => 'required|numeric',
            'question_type_id' => 'required|numeric',
            'product_ids' => 'required',
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails()){            
            return response()->json([
                "result" => false,
                "message" => $validator->errors()->first(),
                ], 422); 
        } else {

        $realrelation = new RealRelationship;
        $realrelation->location_id = $request->location_id;
        $realrelation->coverage_type_id = $request->coverage_type_id;
        $realrelation->question_type_id = $request->question_type_id;
        $realrelation->product_ids = $request->product_ids;
        $saved = $realrelation->save();
        if($saved){
            return response()->json([
                "result" => true,
                "message" => "Data added in the relationship"],201);
        } else {
            return response()->json([
                "result" => false,
                "message" => "records fails in relationship"
            ],422);
        }
       }
    }

    public function storequestion_relation(Request $request)
    {
        $rules = array(
        'location_id' => 'required|numeric',
        'coverage_type_id' => 'required|numeric',
        'property_type_id' => 'required|numeric',
        'question_id' => 'required|numeric',
        'question_value' => 'required',
        'products' => 'required'
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails()){
            return response()->json([
            "result" => false,
            "message" => $validator->errors()->first(),
            ],422);
        } else {
            $que_relation = new RealQuestionRelationship;
            $que_relation->location_id = $request->location_id;
            $que_relation->coverage_type_id = $request->coverage_type_id;
            $que_relation->property_type_id = $request->property_type_id;
            $que_relation->question_id = $request->question_id;
            $que_relation->question_value = $request->question_value;
            $que_relation->products = $request->products;
            $saved = $que_relation->save();
            if($saved){
                return response()->json([
                    "result" => true,
                    "message" => "Question Relationship Data is added"],201);
            } else {
                return response()->json([
                    "result" => false,
                    "message" => "Records Fails to Added"],422);
            }
        }
    }
    public function create_invoice_pdf($order_id){
        $data = $this->get_pdf_data($order_id);
        $pdf = PDF::loadView('RealInvoice', $data);
        $inv_no = str_pad($order_id, 8, "0", STR_PAD_LEFT);
        return $pdf->stream('AHW'.$inv_no.'.pdf');
    }
    public function downloadInvoicePdf($order_id)
    {
       // $pdf = App::make('dompdf.wrapper');
       // $pdf->loadHTML('<h1>Invoice Order ID :'.$order_id.'</h1>');
        $inv_no = str_pad($order_id, 8, "0", STR_PAD_LEFT);
        $data = $this->get_pdf_data($order_id);
        $pdf = PDF::loadView('RealInvoice', $data);
        return $pdf->stream('AHW'.$inv_no.'.pdf');
        //return ($order_id);
    }
    public function get_pdf_data($order_id){
        
        $orderinfo =  RealStateOrders::leftJoin('real_applied_coupons', 'realstate_orders.id', '=', 'real_applied_coupons.order_id')->leftJoin('realstate_locations', 'realstate_orders.p_location_id', '=', 'realstate_locations.id')->leftJoin('realstate_coverage_types', 'realstate_orders.p_coverage_type_id', '=', 'realstate_coverage_types.id')->leftJoin('realstate_property_type', 'realstate_orders.p_property_type_id', '=', 'realstate_property_type.id')->where('realstate_orders.id', $order_id)->select('realstate_locations.location_name','realstate_coverage_types.co_type_name','realstate_property_type.question_name','realstate_orders.*' ,'real_applied_coupons.discount')->first();
        $orderinfo['order_date'] = $orderinfo->created_at->format('F d,Y');
        
        $orderitems = RealStateOrders::leftJoin('real_order_items', 'realstate_orders.id', '=', 'real_order_items.order_id')
        ->where('realstate_orders.id', $order_id)
        ->select('real_order_items.*' ,'real_order_items.id as itemid')->orderBy('real_order_items.id', 'DESC')
        ->get();
        //print_r($orderitems); die;
          

        

        $invoice_number = str_pad($order_id, 8, "0", STR_PAD_LEFT);

        switch($orderinfo->order_biller){
            case "The Seller":
            $payer_email = $orderinfo->seller_email;
            $name=explode(' ',$orderinfo->seller_name);
            if(isset($name[0])){
                $orderinfo['firstname']= $name[0];
            }
            else{
                $orderinfo['firstname']= '';
            }
            if(isset($name[1])){
               $orderinfo['lastname']= $name[1];
            }
            else{
                $orderinfo['lastname']= '';
            }
            $orderinfo['company']=$orderinfo->seller_realstate_company;
            $orderinfo['street1']='';
            $orderinfo['street2']='';
            $orderinfo['city']='';
            $orderinfo['state']='';
            $orderinfo['pincode']='';
            $orderinfo['phone']=$orderinfo->seller_phone;
            $orderinfo['email']=$payer_email;
            break;
            case "The Seller's Agent":
            $payer_email = $orderinfo->seller_agentemail;
            $name=explode(' ',$orderinfo->seller_agentname);
            if(isset($name[0])){
                $orderinfo['firstname']= $name[0];
            }
            else{
                $orderinfo['firstname']= '';
            }
            if(isset($name[1])){
               $orderinfo['lastname']= $name[1];
            }
            else{
                $orderinfo['lastname']= '';
            }
            $orderinfo['company']=$orderinfo->seller_realstate_company;
            $orderinfo['street1']='';
            $orderinfo['street2']='';
            $orderinfo['city']='';
            $orderinfo['state']='';
            $orderinfo['pincode']='';
            $orderinfo['phone']=$orderinfo->seller_agentphone;
            $orderinfo['email']=$payer_email;
            break;
            case "The Buyer":
            $payer_email = $orderinfo->buyer_email;
            $name=explode(' ',$orderinfo->buyer_name);
            if(isset($name[0])){
                $orderinfo['firstname']= $name[0];
            }
            else{
                $orderinfo['firstname']= '';
            }
            if(isset($name[1])){
               $orderinfo['lastname']= $name[1];
            }
            else{
                $orderinfo['lastname']= '';
            }
            $orderinfo['company']=$orderinfo->buyer_realstate_company;
            $orderinfo['street1']='';
            $orderinfo['street2']='';
            $orderinfo['city']='';
            $orderinfo['state']='';
            $orderinfo['pincode']='';
            $orderinfo['phone']=$orderinfo->buyer_phone;
            $orderinfo['email']=$payer_email;
            break;
            case "The Buyer's Agent":
            $payer_email = $orderinfo->buyer_agentemail;
            $name=explode(' ',$orderinfo->buyer_agentemail);
            if(isset($name[0])){
                $orderinfo['firstname']= $name[0];
            }
            else{
                $orderinfo['firstname']= '';
            }
            if(isset($name[1])){
               $orderinfo['lastname']= $name[1];
            }
            else{
                $orderinfo['lastname']= '';
            }
            $orderinfo['company']=$orderinfo->buyer_realstate_company;
            $orderinfo['street1']='';
            $orderinfo['street2']='';
            $orderinfo['city']='';
            $orderinfo['state']='';
            $orderinfo['pincode']='';
            $orderinfo['phone']=$orderinfo->buyer_agentphone;
            $orderinfo['email']=$payer_email;
            break;
        }
        
        foreach ($orderitems as $orderitem) {
            if( $orderitem->prod_type == 'plan'){
                $productinfo = Realstate_products::where('id', $orderitem->product_id)->first();
                $orderitem['productinfo'] = $productinfo;
            }
            else{
                $productinfo = Realstate_coverage::where('id', $orderitem->product_id)->first();
                $orderitem['productinfo'] = $productinfo;
            }
        }

       
        $orderinfo['productitems'] = $orderitems;
        if($orderinfo['prop_street2']!=''){
            if(is_numeric($orderinfo['prop_street2'])){
                $orderinfo['prop_street2']='#'.$orderinfo['prop_street2'];
            }
        }
        $data=array(
            'invoice_number'=>$invoice_number,
            'order_id' => $order_id,
            'pay_method' => 'Cash On Delivery',
            'order_date' => $orderinfo['order_date'],
            'productitems' => $orderitems,
            'total_amount' => $orderinfo['total_amount'],
            'net_amount' => $orderinfo['net_amount'],
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
            
            //New added
            'i_am_the' => $orderinfo['i_am_the'],
            
            'buyer_name' => $orderinfo['buyer_name'],
            'buyer_email' => $orderinfo['buyer_email'],
            'buyer_phone' => $orderinfo['buyer_phone'],
            'buyer_agentname' => $orderinfo['buyer_agentname'],
            'buyer_agentphone' => $orderinfo['buyer_agentphone'],
            'buyer_agentemail' => $orderinfo['buyer_agentemail'],

            'seller_name' => $orderinfo['seller_name'],
            'seller_email' => $orderinfo['seller_email'],
            'seller_phone' => $orderinfo['seller_phone'],
            'seller_agentname' => $orderinfo['seller_agentname'],
            'seller_agentphone' => $orderinfo['seller_agentphone'],
            'seller_agentemail' => $orderinfo['seller_agentemail'],

            'order_biller' => $orderinfo['order_biller'],
            'order_notes' => $orderinfo['order_notes'],
            'sales_person' => $orderinfo['sales_person'],
            'coupon_code' => $orderinfo['coupon_code'],
            'closing_date' => $orderinfo['closing_date'],
            'updated_at' => $orderinfo['updated_at'],
            'location_name' => $orderinfo['location_name'],
            'co_type_name' => $orderinfo['co_type_name'],
            'question_name' => $orderinfo['question_name'],
            'credit_balance' => $orderinfo['credit_balance'],
            
           

        );
        return $data;
    }
    public function check_coupon_valid($coupon){
        $where='real_coupons.coupon_code='.$coupon.' and real_coupons.expiry_date>="'.date('Y-m-d').'"';
        DB::enableQueryLog();

        $couponinfo= DB::select('select * from real_coupons where '.$where);
                
        $query = DB::getQueryLog();
        $lastQuery = end($query);
        //echo $lastQuery['query'];
        //die;
        if( !empty($couponinfo ) ){
         return 1;
        }
        else{
            return 0;
        }
        //die;

    }
    public function CheckRealCouponExist(Request $request){
        $coupon=$request->coupon_code;
        if($coupon==""){
             return response()->json([
                    "result" => true,
                    "message" => "No Coupon Code entered."],201);
        }
        else{
            $where='real_coupons.coupon_code="'.$coupon.'" and real_coupons.expiry_date>="'.date('Y-m-d').'"';
            DB::enableQueryLog();
    
            $couponinfo= DB::select('select * from real_coupons where '.$where);
                    
            $query = DB::getQueryLog();
            $lastQuery = end($query);
            //echo $lastQuery['query'];
            //die;
            if( !empty($couponinfo ) ){
              return response()->json([
                    "result" => true,
                    "message" => "Coupon Code applied successfully."],201);
            }
            else{
                return response()->json([
                    "result" => false,
                    "message" => "Coupon Code is invalid or Expired. "],422);
            }
        }
        
        //die;

    }
    public function SendDailyOrderReport(){
        // Fetching Daily Realestate Orders
        //$where='realstate_orders.created_at LIKE("'.date('Y-m-d').'%")';
        DB::enableQueryLog();

        
        $orders= DB::select('SELECT rl.location_name,rct.co_type_name,rpt.name,ro.* FROM realstate_orders ro INNER JOIN realstate_locations rl ON rl.id=ro.p_location_id INNER JOIN realstate_coverage_types rct on rct.id=ro.p_coverage_type_id INNER JOIN realstate_property_type rpt ON rpt.id=ro.p_property_type_id WHERE ( ro.created_at LIKE("'.date('Y-m-d').'%"))');
                
        $query = DB::getQueryLog();
        $lastQuery = end($query);
        $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
        //$receiver_emails=implode(';',$receiver_emails);
        // Creating CSV file for Order Report
        $fileName = 'real_order_report_'.date('Y-m-d').'.csv';
        $columnNames = [
            'Order ID',
            'Location Name','Coverage Type','Property Type','Order Person',
            'Property Street',
            'Property City',
            'Property State',
            'Property Zip Code',
            'Buyer Name','Buyer Phone','Buyer Email','Buyer AgentName','Buyer AgentPhone','Buyer AgentEmail','Buyer RealStateCompany','Buyer CoordinatorName','Buyer CoordinatorPhone','Buyer CoordinatorEmail','Seller Name','Seller Phone','Seller Email','Seller AgentName','Seller AgentPhone','Seller AgentEmail','Seller RealStateCompany','Seller CoordinatorName','Seller CoordinatorPhone','Seller CoordinatorEmail','Escrow Title','Escrow Street','Escrow City','Escrow State','Escrow Zipcode','Closing OfficerName','Closing OfficerEmail','Closing OfficerPhone','Closing Date','Escrow AssistantName','Escrow AssistantEmail','Order Biller','Order Notes','Sales Person','Coupon Code','Total Amount','Net Amount','Credit Balance','Order Status'
        ];
        
        $file = fopen('public/export/' . $fileName, 'w');
        fputcsv($file, $columnNames);
        
        foreach ($orders as $report) {
            fputcsv($file, [
                 $report->id,
                     $report->location_name,
                     $report->co_type_name,
                     $report->name,
                     $report->i_am_the,
                     $report->prop_street1.' '.$report->prop_street2,
                     $report->prop_city,
                     $report->prop_state,
                     $report->prop_zipcode,
                     $report->buyer_name,
                     $report->buyer_phone,
                     $report->buyer_email,
                     $report->buyer_agentname,
                     $report->buyer_agentphone,
                     $report->buyer_agentemail,
                     $report->buyer_realstate_company,
                     $report->buyer_coordinatorname,
                     $report->buyer_coordinatorphone,
                     $report->buyer_coordinatoremail,
                     $report->seller_name,
                     $report->seller_phone,
                     $report->seller_email,
                     $report->seller_agentname,
                     $report->seller_agentphone,
                     $report->seller_agentemail,
                     $report->seller_realstate_company,
                     $report->seller_coordinatorname,
                     $report->seller_coordinatorphone,
                     $report->seller_coordinatoremail,
                     $report->escrow_title,
                     $report->escrow_street1.' '.$report->escrow_street2,
                     $report->escrow_city,
                     $report->escrow_state,
                     $report->escrow_zipcode,
                     $report->closing_officername,
                     $report->closing_officeremail,
                     $report->closing_officerphone,
                     $report->closing_date,
                     $report->escrow_assistantname,
                     $report->escrow_assistantemail,
                     $report->order_biller,
                     $report->order_notes,
                     $report->sales_person,
                     $report->coupon_code,
                     $report->total_amount,
                     $report->net_amount,
                     $report->credit_balance,
                     $report->order_status
            ]);
        }
        fclose($file);
        $mail_status=Mail::send('emailtemplate/real-daily_order_report',array(
                'Order_Date'=>date('Y-m-d'),
                'file_name'=>$fileName
              ),  function($message) use ($receiver_emails,$fileName){
                
                $message->attach(public_path('export/'.$fileName), [
                          'as' =>$fileName,
                          'mime' => 'text/csv',
                ]);
           
            $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
            $message->to($receiver_emails)->subject('Real Estate Warranty Daily Order Report');
        }); 
        // Clearing the server space by deleting daily report.
        unlink(public_path('export/'.$fileName)); 
        return response()->json([
        "result" => true,
        "message" => "Daily Order Report sent successfully."],201);
    }
}
