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
</table>
<table style="margin: 20px auto; width: 90%; border: none; border-collapse: collapse; table-layout: fixed;">
  <tr>
    <td style="font-weight:bold;">Property Address:</td>
    <td style="padding-right: 30px;">{{ trim($prop_street1.' '.$prop_street2) }}<br/>
    {{ $prop_city }} {{ $prop_state }} {{ $prop_zipcode }}</td>
    <td>
         @if($closing_date!='')
           Estimated Close Date / Settlement Date: {{ date('Y/m/d',strtotime($closing_date)) }}
         @endif
    </td>
  </tr>
  <tr>
  <td style="padding: 5px;"></td>
</tr>
  <tr>
    <td style="font-weight:bold;">Buyer</td>
    <td style="font-weight:bold;">Seller</td>
    <td style="font-weight:bold;">Escrow</td>
  </tr>
  <tr>
    <td>{{ $buyer_name }}<br/>{{ $buyer_email }}<br/>{{ $buyer_phone }}</td>
    <td>{{ $seller_name }}<br/>{{ $seller_email }}<br/>{{ $seller_phone }}</td>
    <td>{{ $escrow_title }}<br/>{{ trim($escrow_street1.' '.$escrow_street2) }}<br/>
    {{ $escrow_city }} {{ $escrow_state }} {{ $escrow_zipcode }}</td>
  </tr>
  <tr>
  <td style="padding: 5px;"></td>
</tr>
  <tr>
    <td style="font-weight:bold;">Buyer Agent:</td>
    <td style="font-weight:bold;">Seller Agent:</td>
    <td style="font-weight:bold;">Closing Officer:</td>
  </tr>
  <tr>
    <td>{{ $buyer_agentname }}<br/>{{ $buyer_agentemail }}<br/>{{ $buyer_agentphone }}</td>
    <td>{{ $seller_agentname }}<br/>{{ $seller_agentemail }}<br/>{{ $seller_agentphone }}</td>
    <td>{{ $closing_officername }}<br/>{{ $closing_officeremail }}<br/>{{ $closing_officerphone }}<br/>
    Escrow Assistant:<br/>{{ $escrow_assistantname }}<br/>{{  $escrow_assistantemail }}</td>
  </tr>
<!-- /Seller> -->  
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
