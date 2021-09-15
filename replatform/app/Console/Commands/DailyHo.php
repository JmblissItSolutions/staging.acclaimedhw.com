<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use DB;
use Carbon\Carbon;
use App\HomeownerOrders;

class DailyHo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ho:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Respectively send an Homeowner Orders daily report to everyone daily via email.';

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
        // Fetching Daily Homeowner Orders
          $w = HomeownerOrders::whereDate('created_at', Carbon::today())->count();
          if(!$w) {
            echo 'No data';
          } else {  
            
           $where='ho_orders.created_at LIKE("'.date('Y-m-d').'%")';
            DB::enableQueryLog();
            $orders= DB::select('select * from ho_orders where '.$where);
                    
            $query = DB::getQueryLog();
            $lastQuery = end($query);
            //echo $lastQuery['query'];
            //die;

    $receiver_emails=array("jmbliss13@gmail.com","vinod.k.jmbliss@gmail.com","Kristin@acclaimedhw.com","web@acclaimedhw.com");
    //$receiver_emails=array("jmbliss13@gmail.com");
            // Creating CSV file for Order Report
            $fileName = 'homeowner_order_report_'.date('Y-m-d').'.csv';
            $columnNames = [
                'Order ID','Name','Company Name','Country','Street Address',
                'City','State','PinCode','Phone','Email','Property StreetAddress','Property City','Property State','Property ZipCode','Order Notes','SubTotal','Total Amount','Pay Method','Order Status'];
            
            $file = fopen('public/export/' . $fileName, 'w');
            fputcsv($file, $columnNames);
            
            foreach ($orders as $report) {
                fputcsv($file, [
                     $report->id,
                     $report->firstname.' '.$report->lastname,
                     $report->company,
                     $report->country,
                     $report->street1.' '.$report->street2,
                     $report->city,
                     $report->state,
                     $report->pincode,
                     $report->phone,
                     $report->email,
                     $report->prop_street1.' '.$report->prop_street2,
                     $report->prop_city,
                     $report->prop_state,
                     $report->prop_zipcode,
                     $report->order_notes,
                     $report->subtotal,
                     $report->total,
                     $report->pay_method,
                     $report->status
                ]);
            }
            fclose($file);

            // Sending CSV report via mail
            $mail_status=Mail::send('emailtemplate/homeowner_daily_order_report', array(
                'Order_Date'=>date('Y-m-d'),
                'file_name'=>$fileName
              ),  function($message) use ($receiver_emails,$fileName){
                
                $message->attach(public_path('export/'.$fileName), [
                          'as' =>$fileName,
                          'mime' => 'text/csv',
                     ]);
                 $message->from('web@acclaimedhw.com', 'Acclaimed Home Warranty');
                 $message->to($receiver_emails)->subject('HomeOwner Warranty Daily Order Report');
             }); 
            
            // Clearing the server space by deleting daily report.
            unlink(public_path('export/'.$fileName));
            $this->info('Successfully sent daily order report to Admin.');
        }
    }
}
