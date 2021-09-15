<?php

namespace App;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RealStateOrders extends Model
{
    //use HasFactory;
    protected $table = 'realstate_orders';
    protected $fillable =['p_location_id','p_coverage_type_id','p_property_type_id','prop_street1','prop_street2','prop_city','prop_state','prop_zipcode',
    'buyer_name','buyer_phone','buyer_email','buyer_agentname','buyer_agentphone','buyer_agentemail',
    'buyer_realstate_company','buyer_coordinatorname','buyer_coordinatorphone','buyer_coordinatoremail',
    'seller_name','seller_phone','seller_email','seller_agentname','seller_agentphone','seller_agentemail',
    'seller_realstate_company','seller_coordinatorname','seller_coordinatorphone','seller_coordinatoremail',
    'escrow_title','escrow_street1','escrow_street2','escrow_city','escrow_state','escrow_zipcode',
    'closing_officername','closing_officeremail','closing_officerphone','closing_date',
    'escrow_assistantname','escrow_assistantemail','order_biller','order_notes','sales_person','coupon_code','total_amount','net_amount','order_status','credit_balance','i_am_the'
];
}
