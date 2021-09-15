<!DOCTYPE html>
<html>
<head>
  <style>
      /** Define the margins of your page **/
      body{
        font-family:Arial,serif;color:rgb(68,68,68);font-weight:normal;font-style:normal;text-decoration: none;
      }
      @page {
          margin: 35px 25px;
      }

      header {
          position: fixed;
          top: -60px;
          left: 0px;
          right: 0px;
          height: 50px;

          /** Extra personal styles **/
          background-color: #03a9f4;
          color: white;
          text-align: center;
          line-height: 15px;
      }

      footer {
          height: 100px; 
          position: fixed; 
          bottom: 0px;
          left: 0px; 
          right: 0px;

          /** Extra personal styles **/
          font-size: 15px;
          color: color:rgb(68,68,68);
          text-align: center;
          line-height: 25px;
      }
      main{margin-bottom:100px;}
  </style>
</head>
<body>
<footer>
    <table style="margin:0px auto; width:auto table-layout: fixed;text-align: center">
      <tfoot>
        <tr>
          <td>Acclaimed Home Warranty, LLC P.O Box 9720, Salt Lake City, UT 84109 Phone 801-610-1556 Fax 801-783-5333</td>
        </tr>
        <tr>
          <td>
            <a href="https://acclaimedhw.com/" target="_blank" style=" color: #000; text-decoration: none;">www.acclaimedhw.com</a>
          </td>
        </tr>
      </tfoot>
    </table>
</footer>
<!-- Wrap the content of your PDF inside a main tag -->
<main>
<table style="margin: 20px auto; max-width: 900px; width: 90%; table-layout: fixed;">
  <tr>
    <td rowspan="9"><img src="{{public_path('pdf_logo.jpg')}}"></td>
    <td style="text-align: right;">Date: {{ $order_date }}</td>
  </tr>
  <tr>
    <td style="text-align: right;">INVOICE / CONTRACT AHW{{ $invoice_number }}</td>
  </tr>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td style="text-align: right;">Property in {{ $location_name }}</td>
  </tr>
  <tr>
    <td style="text-align: right;">{{ $co_type_name }}</td>
  </tr>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td style="text-align: right;">Billed To: {{ $order_biller }}</td>
  </tr>
  <tr>
    <td style="text-align: right;">
         @if($sales_person!='')
           Sales Person: {{ $sales_person }}
         @endif

     </td>
  </tr>
  <tr>
    <td style="text-align: right;">
         @if($closing_date!='')
           Estimated Close Date / Settlement Date: {{ date('Y/m/d',strtotime($closing_date)) }}
         @endif
    </td>
  </tr>
</table>
<table style="margin: 20px auto; width: 90%; border: 1px solid #ccc; border-collapse: collapse; table-layout: fixed;">
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Location</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $location_name }}</td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Invoice ID</td>
  <td style="padding: 5px; border: 1px solid #ccc;"> {{ $order_id }}</td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Coverage Type</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $co_type_name }}</td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">I am the</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $i_am_the }}</td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Home Type</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $question_name }}</td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Property Address</td>
  <td style="padding: 5px; border: 1px solid #ccc;">
    {{ trim($prop_street1.' '.$prop_street2) }}<br/>
    {{ $prop_city }}<br/>
    {{ $prop_state }}<br/>
    {{ $prop_zipcode }}
  </td>
</tr>
<!-- Buyer -->
<tr>
  <td style="padding: 5px; border: 1px solid #ccc; vertical-align: top;" rowspan="10">Buyer</td>
  <td style="padding: 5px; padding-bottom:0; border-top: 1px solid #ccc">{{ $buyer_name }}</td></tr>
<tr>
  <td style="padding-left: 5px;">{{ $buyer_email }}</td>
</tr>
<tr>
  <td style="padding-left: 5px;">{{ $buyer_phone }}</td>
</tr>
<tr>
  <td style="padding: 5px;"></td>
</tr>
<tr>
  <td style="padding-left: 5px;">Agent:</td>
</tr>
<tr>
  <td style="padding-left: 5px;">{{ $buyer_agentname }}</td>
</tr>
<tr>
  <td style="padding: 5px;">{{ $buyer_agentemail }}</td>
</tr>
<tr>
  <td style="padding: 5px;">{{ $buyer_agentphone }}</td>
</tr>
<tr>
  <td style="padding: 5px;"></td>
</tr>
<tr>
  <td style="padding: 5px; border-bottom: 1px solid #ccc;"></td>
</tr>
<!-- /Buyer>
<!-- seller -->
<tr>
  <td style="padding: 5px; border: 1px solid #ccc; vertical-align: top;" rowspan="10">Seller</td>
  <td style="padding: 5px; padding-bottom:0; border-top: 1px solid #ccc">{{ $seller_name }}</td></tr>
<tr>
  <td style="padding-left: 5px;">{{ $seller_email }}</td>
</tr>
<tr>
  <td style="padding-left: 5px;">{{ $seller_phone }}</td>
</tr>
<tr>
  <td style="padding: 5px;"></td>
</tr>
<tr>
  <td style="padding-left: 5px;">Agent:</td>
</tr>
<tr>
  <td style="padding-left: 5px;">{{ $seller_agentname }}</td>
</tr>
<tr>
  <td style="padding: 5px;">{{ $seller_agentemail }}</td>
</tr>
<tr>
  <td style="padding: 5px;">{{ $seller_agentphone }}</td>
</tr>

<tr>
  <td style="padding: 5px;"></td>
</tr>
<tr>
  <td style="padding: 5px; border-bottom: 1px solid #ccc;"></td>
</tr>
<!-- /Seller> -->  
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Billed To</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $order_biller }}</td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Additional Instructions/Notes</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $order_notes }}</td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Sales Person</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $sales_person }}</td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Coupon Code</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $coupon_code }}</td>
</tr>
</table>
<table style="margin: 20px auto; max-width: 900px; width: 90%; border-collapse: collapse; table-layout: fixed;">
<tr>
  <td style="padding: 5px; border-bottom: 1px solid #ccc;">Date</td>
  <td style="padding: 5px; border-bottom: 1px solid #ccc;">Description</td>
  <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align: right;">Quantity</td>
  <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align: right;">Rate</td>
  <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align: right;">Line Total</td>
</tr>
@foreach($productitems as $productitem)
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $order_date  }}</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $productitem->product_name }}</td>
  <td style="padding: 5px; border: 1px solid #ccc; text-align: right;">{{ $productitem->quantity }}</td>
  <td style="padding: 5px; border: 1px solid #ccc; text-align: right;">{{ $productitem->rate }}</td>
  <td style="padding: 5px; border: 1px solid #ccc; text-align: right;">{{ $productitem->line_total }}</td>
</tr>
@endforeach

<tr>
  <td colspan="3"></td>
  <td style="padding: 5px;">Total Amount:</td>
  <td style="padding: 5px; border: 1px solid #ccc; text-align: right;">{{ $total_amount }}</td>
</tr>
@if($discount!='')
<tr>
  <td colspan="3"></td>
  <td style="padding: 5px;">Discount:</td>
  <td style="padding: 5px; border: 1px solid #ccc; text-align: right;">{{ $discount }}</td>
</tr>
@endif
@if($net_amount!='')
<tr>
  <td colspan="3"></td>
  <td style="padding: 5px;">Amount Payable:</td>
  <td style="padding: 5px; border: 1px solid #ccc; text-align: right;">{{ $net_amount }}</td>
</tr>
@endif
@if($credit_balance!='')
<tr>
  <td colspan="3"></td>
  <td style="padding: 5px;">Credit Balance:</td>
  <td style="padding: 5px; border: 1px solid #ccc; text-align: right;">{{ $credit_balance }}</td>
</tr>
@endif
</table>
<table style="margin: 20px auto; max-width: 900px; width: 90% table-layout: fixed;text-align:center">
  <tfoot>
    <tr>
      <td>Make all checks payable to Acclaimed Home Warranty, LLC</td>
    </tr>
    <tr>
      <td style="text-align:center;">
        <b>Thank you for your business!</b>
      </td>
    </tr>
  </tfoot>
</table>
</main>
</body>
</html>
