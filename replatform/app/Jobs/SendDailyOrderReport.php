<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Mail\Mailer;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendDailyOrderReport implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
       //$this->RealStateOrders = $RealStateOrders;
        echo 'test';
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(Mailer $mailer)
    {
       // $mailer->send('emails.reminder', ['user' => $this->user], function ($m) {
       //      //
       //  });
        $orderinfo =  RealStateOrders::leftJoin('real_applied_coupons', 'realstate_orders.id', '=', 'real_applied_coupons.order_id')->where('realstate_orders.id', 1)->select('realstate_orders.*' ,'real_applied_coupons.discount')->first();
        print_r($orderinfo);
    }
}
