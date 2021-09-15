<?php
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use App\RealStateOrders;
use App\RealOrderItems;
use App\Realstate_products;
use App\Realstate_coverage;
use App\Realstate_relationship;
use App\Realstate_question_relationships;
use PDF;
  
class PDFController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatePDF()
    {
        $data = $this->get_pdf_data(1);
        $pdf = PDF::loadView('myPDF', $data);
  
        return $pdf->download('itsolutionstuff.pdf');
    }
    public function get_pdf_data($order_id){
        $orderinfo =  RealStateOrders::leftJoin('real_applied_coupons', 'realstate_orders.id', '=', 'real_applied_coupons.order_id')->where('realstate_orders.id', $order_id)->select('realstate_orders.*' ,'real_applied_coupons.discount')->first();
        $orderinfo['order_date'] = $orderinfo->created_at->format('F d,Y');
        $orderitems = RealStateOrders::leftJoin('real_order_items', 'realstate_orders.id', '=', 'real_order_items.order_id')
        ->where('realstate_orders.id', $order_id)
        ->select('real_order_items.*' ,'real_order_items.id as itemid')
        ->get();

        switch($orderinfo->order_biller){
            case "The Seller":
            $payer_email = $orderinfo->seller_email;
            $name=explode(' ',$orderinfo->seller_name);
            $orderinfo['firstname']= $name[0];
            $orderinfo['lastname']= $name[1];
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
            $orderinfo['firstname']= $name[0];
            $orderinfo['lastname']= $name[1];
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
            $orderinfo['firstname']= $name[0];
            $orderinfo['lastname']= $name[1];
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
            $orderinfo['firstname']= $name[0];
            $orderinfo['lastname']= $name[1];
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
        $data=array(
            'order_id' => $order_id,
            'pay_method' => 'Cash On Delivery',
            'order_date' => $orderinfo['order_date'],
            'productitems' => $orderitems,
            'subtotal' => $orderinfo['total_amount'],
            'total' => $orderinfo['net_amount'],
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
        );
        return $data;
    }
}