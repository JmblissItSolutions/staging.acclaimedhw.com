<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\RealStateOrders;
class DailyUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'daily:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        Mail:row("This is automatically generated Daily Order Update.",function($message){
            $message->from('info@acclaimedhw.com');
            $message->to('jmbliss84@gmail.com')->subject('Real Estate Warranty Daily Order Report');
        });
        $this->info("Daily Order Report update has been send successfully.");
    }
}
