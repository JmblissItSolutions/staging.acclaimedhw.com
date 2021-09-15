<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MakeClaim;
use App\ContactUs;
use App\Contractors;
use App\MemberAdvantageEnquiry;
use App\MemberAdvantagesReviews;
use App\Renewals;
use App\AppliancesTypes;
use App\States;
use App\Employees;
use Validator;
use Mail;
use App\Brochures;
use DB;
class MakeAClaimController extends Controller
{
    public function storeClaim(Request $request)
    {
        $rules = array(
			'name' => 'required',
			'phone' => 'required|numeric',
			'email' => 'required|email',
			'street_address' => 'required',
			'city' => 'required',
			'state' => 'required',
			'zip_code' => 'required|numeric',
			'emergency' => 'required',
			'contact_method' => 'required',
			'technicians' => 'required',		
		);
		$validator = Validator::make($request->all(),$rules);
		if($validator->fails()){			
			return response()->json([
				"result" => false,
				"message" => $validator->errors()->first(),
				], 422); 
		} else {
            $makeclaim = new MakeClaim;
            $makeclaim->name = $request->name;
            $makeclaim->phone = $request->phone;
            $makeclaim->email = $request->email;
            $makeclaim->street_address = $request->street_address;
            $makeclaim->city = $request->city;
            $makeclaim->state = $request->state;
            $makeclaim->zip_code = $request->zip_code;
            $makeclaim->claim_details = $request->claim_details;
            $makeclaim->emergency = $request->emergency;
            $makeclaim->contact_method = $request->contact_method;
            $makeclaim->technicians = $request->technicians;
            $makeclaim->appliances = $request->appliances;
            $makeclaim->other = $request->other;
            $makeclaim->other_appliances = $request->other_appliances;
            $saved = $makeclaim->save();
             
             $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");      
            //  Send mail to admin   
                    $name = $makeclaim['name'];
                    $email = $makeclaim['email'];
                    $phone = $makeclaim['phone'];
                    $street_address = $makeclaim['street_address'];
                    $city = $makeclaim['city'];
                    $state = $makeclaim['state'];
                    $zip_code = $makeclaim['zip_code'];
                    $claim_details = $makeclaim['claim_details'];
                    $emergency = $makeclaim['emergency'];
                    $contact_method = $makeclaim['contact_method'];
                    $technicians = $makeclaim['technicians'];
                    $appliances=$makeclaim['appliances'];
                    $other= $makeclaim['other'];
                    $other_appliances=$makeclaim['other_appliances'];
                   // $appliance_type = $this->get_field_value('appliances_types','type_name',$appliances);
                    $mail_status=Mail::send('emailtemplate/make_claim',
                        array(
                            'claim_date'=>date('d-M-Y'),
                            'name'=>$name, 
                            'email'=>$email,
                            'phone'=>$phone,
                            'street_address'=> $street_address, 
                            'city'=>$city, 
                            'state'=>$state,
                            'zip_code'=> $zip_code, 
                            'claim_details'=>$claim_details, 
                            'emergency'=>$emergency, 
                            'technicians'=> $technicians,
                            'appliances'=>$appliances, 
                            'other'=> $other,
                            'other_appliances'=>$other_appliances
                         ),function($message) use ($receiver_emails){
                    $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                    $message->to($receiver_emails)->subject('Your Make a Claim request has been received!');
                  }); 
                  if (empty($mail_status)) { 
                      return response()->json([
                          "result" => true,
                          'message' => 'Thank you for submitting your claim. You will be contacted the next business day. If this is an emergency one of our team members will be in touch shortly.'], 200); 
                    }
                  else{ 
                    return response()->json([
                        "result" => false,
                        'message' => 'Contact is not Established.'], 400); 
                }   
        }
    }
    public function contactus(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'contact_name' => 'required',
            'contact_phone' => 'required|numeric',
            'contact_email' => 'required|email',
            'contact_message' => 'required',
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return response()->json([
                'result' => false,
                'message' => $validator->errors()->first(),
            ]);
        }
        else 
        {
            $contacts = new ContactUs;
            $contacts->contact_name = $request->contact_name;
            $contacts->contact_phone = $request->contact_phone;
            $contacts->contact_email = $request->contact_email;
            $contacts->contact_message = $request->contact_message;
            $saved = $contacts->save();
            $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
              //For send Mail to Admin
                    $contact_name = $contacts['contact_name'];
                    $contact_email = $contacts['contact_email'];
                    $contact_phone = $contacts['contact_phone'];
                    $contact_message = $contacts['contact_message'];
            
            if($saved)
            {
                $mail_status=Mail::send('emailtemplate/contact_us',
                    array(
                        
                        'contact_name'=>$contact_name,
                        'contact_email'=>$contact_email,
                        'contact_phone'=>$contact_phone,
                        'contact_message'=>$contact_message,
                        
                     ),function($message) use ($receiver_emails){
                    
                    $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                    $message->to($receiver_emails)->subject('Thank You!');
                }); 
                return response()->json([
                    'result' => true,
                    'message' => 'Thanks for contacting us! We will be in touch with you shortly.'], 200);
            }
            else
            {
             return response()->json([
                    'result' => false,
                    'message' => 'Contact is not Established.'], 400);   
            }
        }
    }
    public function save_contractor(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'company_name' => 'required',
            'contact_name' => 'required',
            'contact_number' => 'required|numeric',
            'contact_email' => 'required|email',
            'trade_services' => 'required',
            'service_areas' => 'required',
            'hourly_rate' => 'required'
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return response()->json([
                'result' => false,
                'message' => $validator->errors()->first()
            ]);
        }
        else
        {
            $contractors = new Contractors;
            $contractors->company_name = $request->company_name;
            $contractors->contact_name = $request->contact_name;
            $contractors->contact_number = $request->contact_number;
            $contractors->contact_email = $request->contact_email;
          //  $email=$contractors->contact_email;
            // $contractors->trade_services = implode(',',(array)$request->trade_services);
            // $contractors->service_areas = implode(',',(array)$request->service_areas);
            $contractors->trade_services = $request->trade_services;
            $contractors->service_areas = $request->service_areas;
            $contractors->other =  $request->other;
            $contractors->hourly_rate = $request->hourly_rate;
            $saved = $contractors->save();

            $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
            //For send Mail to Admin
                    $company_name = $contractors['company_name'];
                    $contact_name = $contractors['contact_name'];
                    $contact_number = $contractors['contact_number'];
                    $contact_email = $contractors['contact_email'];
                    $trade_services = $contractors['trade_services'];
                    $service_areas = $contractors['service_areas'];
                    $other = $contractors['other'];
                    $hourly_rate = $contractors['hourly_rate'];
            if($saved)
            {
                $mail_status=Mail::send('emailtemplate/contractor',
                    array(
                        'company_name'=>$company_name,
                        'contact_name'=>$contact_name,
                        'contact_number'=>$contact_number,
                        'contact_email'=>$contact_email,
                        'trade_services'=>$trade_services,
                        'service_areas'=>$service_areas,
                        'other'=>$other,
                        'hourly_rate'=>$hourly_rate, 
                        
                     ),function($message) use ($receiver_emails){
                   
                    $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                    $message->to($receiver_emails)->subject('Thank You!');
                });
                return response()->json([
                    'result' => true,
                    'message' => 'Thanks for contacting us! We will be in touch with you shortly.'],200);
            } else {
                return response()->json([
                    'result' => false,
                    'message' => 'Contact is not happen.'],400);
            }
        }
    }
    //Starting of Member Advantages Form
    public function SaveAdvantagesEnquiry_utah(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'first_name_1' => 'required',
            'last_name_1' => 'required',
            'state_1' => 'required',
            'email_1' => 'required|email',
            'phone_number_1' => 'required',
            'information_1' => 'required',
            'location_name_1' => 'required'
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return response()->json([
                'result' => false,
                'message' => $validator->errors()->first()
            ]);
        }
        else {
            $mforms_1 = new MemberAdvantageEnquiry;
            $mforms_1->location_name = $request->location_name_1;
            $mforms_1->first_name = $request->first_name_1;
            $mforms_1->last_name = $request->last_name_1;
            $mforms_1->state = $request->state_1;
            $mforms_1->email = $request->email_1;
            $mforms_1->phone_number = $request->phone_number_1;
            $mforms_1->information = $request->information_1;
            $saved = $mforms_1->save();

            $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
              //For send Mail to Admin
                    $location_name = $mforms_1['location_name'];
                    $first_name = $mforms_1['first_name'];
                    $last_name = $mforms_1['last_name'];
                    $state = $mforms_1['state'];
                    $email = $mforms_1['email'];
                    $phone_number = $mforms_1['phone_number'];
                    $information = $mforms_1['information'];
            if($saved)
            {
                $mail_status=Mail::send('emailtemplate/member_enquiry_utah',
                array(
                    'location_name_1'=>$location_name,
                    'first_name_1'=>$first_name,
                    'last_name_1'=>$last_name,
                    'state_1'=>$state,
                    'email_1'=>$email,
                    'phone_number_1'=>$phone_number,
                    'information_1'=>$information, 
                    
                 ),function($message) use ($receiver_emails){
               
                $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                $message->to($receiver_emails)->subject('Thank You!');
            });
                return response()->json([
                    'result' => true,
                    'message' => 'Thanks for contacting us! We will be in touch with you shortly.'
                ],200);
            }
            else {
                return response()->json([
                    'result' => false,
                    'message' => 'Contact is not established with us.'
                ],400);
            }
        }
    }
    public function SaveAdvantagesEnquiry_idaho(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'first_name_2' => 'required',
            'last_name_2' => 'required',
            'state_2' => 'required',
            'email_2' => 'required|email',
            'phone_number_2' => 'required',
            'information_2' => 'required',
            'location_name_2' => 'required'
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return response()->json([
                'result' => false,
                'message' => $validator->errors()->first()
            ]);
        }
        else {
            $mforms_2 = new MemberAdvantageEnquiry;
            $mforms_2->location_name = $request->location_name_2;
            $mforms_2->first_name = $request->first_name_2;
            $mforms_2->last_name = $request->last_name_2;
            $mforms_2->state = $request->state_2;
            $mforms_2->email = $request->email_2;
            $mforms_2->phone_number = $request->phone_number_2;
            $mforms_2->information = $request->information_2;
            $saved = $mforms_2->save();
            $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
              //For send Mail to Admin
                $location_name = $mforms_2['location_name'];
                $first_name = $mforms_2['first_name'];
                $last_name = $mforms_2['last_name'];
                $state = $mforms_2['state'];
                $email = $mforms_2['email'];
                $phone_number = $mforms_2['phone_number'];
                $information = $mforms_2['information'];
            if($saved)
            {
                $mail_status=Mail::send('emailtemplate/member_enquiry_idaho',
                array(
                    'location_name_2'=>$location_name,
                    'first_name_2'=>$first_name,
                    'last_name_2'=>$last_name,
                    'state_2'=>$state,
                    'email_2'=>$email,
                    'phone_number_2'=>$phone_number,
                    'information_2'=>$information, 
                    
                 ),function($message) use ($receiver_emails){
               
                $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                $message->to($receiver_emails)->subject('Thank You!');
            });
                return response()->json([
                    'result' => true,
                    'message' => 'Thanks for contacting us! We will be in touch with you shortly.'
                ],200);
            }
            else {
                return response()->json([
                    'result' => false,
                    'message' => 'Contact is not established with us.'
                ],400);
            }
        }
    }
    public function SaveAdvantagesEnquiry_nevada(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'first_name_3' => 'required',
            'last_name_3' => 'required',
            'state_3' => 'required',
            'email_3' => 'required|email',
            'phone_number_3' => 'required',
            'information_3' => 'required',
            'location_name_3' => 'required'
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return response()->json([
                'result' => false,
                'message' => $validator->errors()->first()
            ]);
        }
        else {
            $mforms_3 = new MemberAdvantageEnquiry;
            $mforms_3->location_name = $request->location_name_3;
            $mforms_3->first_name = $request->first_name_3;
            $mforms_3->last_name = $request->last_name_3;
            $mforms_3->state = $request->state_3;
            $mforms_3->email = $request->email_3;
            $mforms_3->phone_number = $request->phone_number_3;
            $mforms_3->information = $request->information_3;
            $saved = $mforms_3->save();
            $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
              //For send Mail to Admin
                $location_name = $mforms_3['location_name'];
                $first_name = $mforms_3['first_name'];
                $last_name = $mforms_3['last_name'];
                $state = $mforms_3['state'];
                $email = $mforms_3['email'];
                $phone_number = $mforms_3['phone_number'];
                $information = $mforms_3['information'];
            if($saved)
            {
                $mail_status=Mail::send('emailtemplate/member_enquiry_nevada',
                array(
                    'location_name_3'=>$location_name,
                    'first_name_3'=>$first_name,
                    'last_name_3'=>$last_name,
                    'state_3'=>$state,
                    'email_3'=>$email,
                    'phone_number_3'=>$phone_number,
                    'information_3'=>$information, 
                    
                 ),function($message) use ($receiver_emails){
               
                $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                $message->to($receiver_emails)->subject('Thank You!');
            });
                return response()->json([
                    'result' => true,
                    'message' => 'Thanks for contacting us! We will be in touch with you shortly.'
                ],200);
            }
            else {
                return response()->json([
                    'result' => false,
                    'message' => 'Contact is not established with us.'
                ],400);
            }
        }
    }
    public function SaveAdvantagesEnquiry_texas(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'first_name_4' => 'required',
            'last_name_4' => 'required',
            'state_4' => 'required',
            'email_4' => 'required|email',
            'phone_number_4' => 'required',
            'information_4' => 'required',
            'location_name_4' => 'required'
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return response()->json([
                'result' => false,
                'message' => $validator->errors()->first()
            ]);
        }
        else {
            $mforms_4 = new MemberAdvantageEnquiry;
            $mforms_4->location_name = $request->location_name_4;
            $mforms_4->first_name = $request->first_name_4;
            $mforms_4->last_name = $request->last_name_4;
            $mforms_4->state = $request->state_4;
            $mforms_4->email = $request->email_4;
            $mforms_4->phone_number = $request->phone_number_4;
            $mforms_4->information = $request->information_4;
            $saved = $mforms_4->save();
            $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
              //For send Mail to Admin
                $location_name = $mforms_4['location_name'];
                $first_name = $mforms_4['first_name'];
                $last_name = $mforms_4['last_name'];
                $state = $mforms_4['state'];
                $email = $mforms_4['email'];
                $phone_number = $mforms_4['phone_number'];
                $information = $mforms_4['information'];
            if($saved)
            {
                $mail_status=Mail::send('emailtemplate/member_enquiry_texas',
                array(
                    'location_name_4'=>$location_name,
                    'first_name_4'=>$first_name,
                    'last_name_4'=>$last_name,
                    'state_4'=>$state,
                    'email_4'=>$email,
                    'phone_number_4'=>$phone_number,
                    'information_4'=>$information, 
                    
                 ),function($message) use ($receiver_emails){
               
                $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                $message->to($receiver_emails)->subject('Thank You!');
            });
                return response()->json([
                    'result' => true,
                    'message' => 'Thanks for contacting us! We will be in touch with you shortly.'
                ],200);
            }
            else {
                return response()->json([
                    'result' => false,
                    'message' => 'Contact is not established with us.'
                ],400);
            }
        }
    }
    public function SaveAdvantagesEnquiry_arizona(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'first_name_5' => 'required',
            'last_name_5' => 'required',
            'state_5' => 'required',
            'email_5' => 'required|email',
            'phone_number_5' => 'required',
            'information_5' => 'required',
            'location_name_5' => 'required'
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return response()->json([
                'result' => false,
                'message' => $validator->errors()->first()
            ]);
        }
        else {
            $mforms_5 = new MemberAdvantageEnquiry;
            $mforms_5->location_name = $request->location_name_5;
            $mforms_5->first_name = $request->first_name_5;
            $mforms_5->last_name = $request->last_name_5;
            $mforms_5->state = $request->state_5;
            $mforms_5->email = $request->email_5;
            $mforms_5->phone_number = $request->phone_number_5;
            $mforms_5->information = $request->information_5;
            $saved = $mforms_5->save();
            $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
              //For send Mail to Admin
                $location_name = $mforms_5['location_name'];
                $first_name = $mforms_5['first_name'];
                $last_name = $mforms_5['last_name'];
                $state = $mforms_5['state'];
                $email = $mforms_5['email'];
                $phone_number = $mforms_5['phone_number'];
                $information = $mforms_5['information'];
            if($saved)
            {
                $mail_status=Mail::send('emailtemplate/member_enquiry_arizona',
                array(
                    'location_name_5'=>$location_name,
                    'first_name_5'=>$first_name,
                    'last_name_5'=>$last_name,
                    'state_5'=>$state,
                    'email_5'=>$email,
                    'phone_number_5'=>$phone_number,
                    'information_5'=>$information,
                    
                 ),function($message) use ($receiver_emails){
               
                $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                $message->to($receiver_emails)->subject('Thank You!');
            });
                return response()->json([
                    'result' => true,
                    'message' => 'Thanks for contacting us! We will be in touch with you shortly.'
                ],200);
            }
            else {
                return response()->json([
                    'result' => false,
                    'message' => 'Contact is not established with us.'
                ],400);
            }
        }
    }
    // End of Member Advantages Forms
    public function member_advantages_reviews(Request $request)
    {
        $requestdata = (object)$request->json()->all();
        $rules = array(
            'user_name' => 'required',
            'ratings' => 'required');
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return response()->json([
                'result' => false,
                'message' => $validator->errors()->first()
            ]);
        }
        else {
        $reviews = new MemberAdvantagesReviews;
        $reviews->user_name = $request->user_name;
        $reviews->user_email = $request->user_email;
        $reviews->ratings = $request->ratings;
        $reviews->comments = $request->comments;
        $reviews->save();
        }
    }
    public function get_reviews($location)
    {
        
        $reviews = MemberAdvantagesReviews::select('member_advantages_reviews.*','state_name')->leftJoin('all_states', 'all_states.id', '=', 'member_advantages_reviews.state')->where('all_states.state_name',$location)->get();
        foreach($reviews as $r){
            $r->image=url("public/reviews").'/'.$r->image;
            $r->date='2 years ago';
        }   
        return response()->json($reviews,200);
    }
    public function get_brochures($location_id)
    {
       
        if($location_id==''|| !is_numeric($location_id)){            
            return response()->json([
                "result" => false,
                "message" => 'Invalid Location Provided',
                ], 422); 
        } else {
            $brochures = Brochures::leftJoin('ho_product_locations','ho_product_locations.id', '=','brochures.location_id')
            ->where(array('brochures.location_id'=>$location_id,'brochures.file_type'=>'pdf'))
            ->select('brochures.*','ho_product_locations.location_name')
            ->get();
            foreach($brochures as $b){
                $b->file_name=url("public/brochures").'/'.$b->file_name;
            }
            $data['brochures']=$brochures;
            $videos = Brochures::leftJoin('ho_product_locations','ho_product_locations.id', '=','brochures.location_id')
            ->where(array('brochures.location_id'=>$location_id,'brochures.file_type'=>'video'))
            ->select('brochures.*','ho_product_locations.location_name')
            ->get();
            foreach($videos as $v){
                $v->thumb_nail=url("public/video_image").'/'.$v->thumb_nail;
            }
            $data['videos']=$videos;
            return response()->json($data,200);
         }   

    } 
    public function store_renewal(Request $request)
    {
        
        $rules=array(
            'first_name' => 'required',
            //'last_name' => 'required',
            'address_or_policy_number' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'renewal_type' => 'required|integer',   // 1 For same 2 for other
            
        );
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails()){            
            return response()->json([
                "result" => false,
                "message" => $validator->errors()->first(),
                ], 422); 
        } else {
            $renewals = new Renewals;
            $renewals->first_name = $request->first_name;
            $renewals->last_name = $request->last_name;
            $renewals->address_or_policy_number = $request->address_or_policy_number;
            $renewals->email = $request->email;
            $renewals->phone = $request->phone;
            $renewals->renewal_type = $request->renewal_type;
            $renewals->additional_details = $request->additional_details;
            $saved = $renewals->save();
          //for mail sending
            $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
           
           $first_name = $renewals['first_name'];
           $last_name  = $renewals['last_name'];
           $address_or_policy_number = $renewals['address_or_policy_number'];
           $email = $renewals['email'];
           $phone = $renewals['phone'];
           $renewal_type = $renewals['renewal_type'];
           $additional_details = $renewals['additional_details'];
           if ($saved) {
                $mail_status = Mail::send('emailtemplate/renewals',
                    array(
                        
                        'first_name'=>$first_name,
                        'last_name'=>$last_name,
                        'address_or_policy_number'=>$address_or_policy_number,
                        'email'=>$email,
                        'phone'=>$phone,
                        'renewal_type'=>$renewal_type,
                        'additional_details'=>$additional_details,
                        
                     ),function($message) use ($receiver_emails){
                   
                    $message->from('web@acclaimedhw.com','Acclaimed Home Warranty');
                    $message->to($receiver_emails)->subject('Thank You!');
                }); 
                
            return response()->json([
                "success" => true,
                "message" => "Renewal Request saved successfully"
            ], 200);
          } else {
           
                return response()->json([
                    'result' => false,
                    'message' => 'Contact is not happen.'],400);
            }
        }    
    }  
    public function getAppliancesTypes()
    {
        $types = AppliancesTypes::get();
        return response()->json($types,200);
    }

    public function get_field_value($table,$field,$id){
        $sql='select '.$field.' from '.$table.' where id="'.$id.'"';
        DB::enableQueryLog();

        $result= DB::select($sql);
                
        $query = DB::getQueryLog();
        $lastQuery = end($query);
        //echo $lastQuery['query'];
        //die;
        if( !empty($result ) ){
            return $result[0]->$field;
           
        }
        else{
            return '';
        }
    }
    public function get_all_locations()
    {
        $locations = States::get();
        return response()->json($locations,200);
    }
    public function get_all_employees()
    {
        $employees = Employees::get();
        foreach($employees as $p){
            $p->profile_pic=url("public/employees").'/'.$p->profile_pic;
        }
        return response()->json($employees,200);
    }
}
