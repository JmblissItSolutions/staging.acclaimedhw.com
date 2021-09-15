<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Mail;
use DB;
use Carbon\Carbon;
use App\RealStateOrders;

class DailyQuote extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'quote:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Respectively send an exclusive quote to everyone daily via email.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {   
        // Fetching Daily Realestate Orders
       // $where='realstate_orders.created_at LIKE("'.date('Y-m-d').'%")';
        $where = RealStateOrders::whereDate('created_at', Carbon::today())->count();
           if(!$where){
            echo 'No';
           } else {
        DB::enableQueryLog();

        //$orders= DB::select('select * from realstate_orders where '.$where);
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
            'Property Street','Property City','Property State','Property Zip Code',
            'Buyer Name','Buyer Phone','Buyer Email','Buyer AgentName','Buyer AgentPhone',
            'Buyer AgentEmail','Buyer RealStateCompany','Buyer CoordinatorName',
            'Buyer CoordinatorPhone','Buyer CoordinatorEmail','Seller Name',
            'Seller Phone','Seller Email','Seller AgentName','Seller AgentPhone',
            'Seller AgentEmail','Seller RealStateCompany','Seller CoordinatorName',
            'Seller CoordinatorPhone','Seller CoordinatorEmail','Escrow Title',
            'Escrow Street','Escrow City','Escrow State','Escrow Zipcode','Closing OfficerName',
            'Closing OfficerEmail','Closing OfficerPhone','Closing Date','Escrow AssistantName',
            'Escrow AssistantEmail','Order Biller','Order Notes','Sales Person','Coupon Code',
            'Total Amount','Net Amount','Credit Balance','Order Status'
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
        $this->info('Successfully sent daily order report to Admin.');
        }
    }
}
