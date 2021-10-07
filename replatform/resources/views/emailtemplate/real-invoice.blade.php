<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor="#eee" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;" class="responsive-tble">

 

<p style="margin:0 0 16px">There is a new home warranty order for
:</p>

<p style="margin:0 0 16px">
    {{ $prop_street1.' '.$prop_street2}} 
    @if($unit!='')
    {{', #'.$unit}} 
    @endif
    @if($prop_city!='')
    {{', '.$prop_city}} 
    @endif
    @if($prop_state!='')
    {{', '.$prop_state}} 
    @endif
    @if($prop_zipcode!='')
    {{', '.$prop_zipcode}} 
    @endif
</p>

<table style="margin: 20px auto; display:inline-block; border: 1px solid #ccc; border-collapse: collapse; table-layout: fixed;">
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
<!-- /Buyer -->
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

<!-- Escrow Officer Details -->

<!-- Buyer -->
<tr>
  <td style="padding: 5px; border: 1px solid #ccc; vertical-align: top;" rowspan="10">Title/Escrow Information</td>
  <td style="padding: 5px; padding-bottom:0; border-top: 1px solid #ccc">{{ $escrow_title }}</td></tr>
<tr>
  <td style="padding-left: 5px;">{{ trim($escrow_street1.' '.$escrow_street2) }}<br/>
    {{ $escrow_city }}<br/>
    {{ $escrow_state }}<br/>
    {{ $escrow_zipcode }}</td>
</tr>
<tr>
  <td style="padding-left: 5px; padding-top: 10px;">Closing Officer:</td>
</tr>
<tr>
  <td style="padding-left: 5px;">{{ $closing_officername }}</td>
</tr>
<tr>
  <td style="padding: 5px;">{{ $closing_officeremail }}</td>
</tr>
<tr>
  <td style="padding: 5px;">{{ $closing_officerphone }}</td>
</tr>
<tr>
  <td style="padding-left: 5px; padding-top: 10px;">Escrow Assistant:</td>
</tr>
<tr>
  <td style="padding-left: 5px;">{{ $escrow_assistantname }}</td>
</tr>
<tr>
  <td style="padding: 5px;">{{ $escrow_assistantemail }}</td>
</tr>
<tr>
  <td style="padding: 5px; border-bottom: 1px solid #ccc;"></td>
</tr>
<tr>
  <td style="padding: 5px; border: 1px solid #ccc;">Estimated Close Date:</td>
  <td style="padding: 5px; border: 1px solid #ccc;">{{ $closing_date }}</td>
</tr>
<!-- /Buyer -->
<!-- Escrow Officer End -->

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

<p style="margin:0 0 16px">Attached is the Invoice for the property at:</p>

<P style="margin:0 0 16px;font-weight: bold;">We appreciate the opportunity to work with you.</P>
<p style="margin:0 0 16pxfont-weight: bold;">Thanks for using <a href="http://acclaimedhw.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://acclaimedhw.com/&amp;source=gmail&amp;ust=1619515408370000&amp;usg=AFQjCNFr1uX-UhEJIlqdvycI9xKPR9CVVA">acclaimedhw.com</a></p>
<P style="margin:0 0 16px;font-weight: bold;">Acclaimed Home Warranty</P>
</body>