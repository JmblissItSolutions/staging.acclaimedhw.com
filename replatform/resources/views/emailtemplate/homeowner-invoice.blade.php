<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor="#eee" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;" class="responsive-tble">

  <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="responsive-box">
		<tbody><tr>
		  <td align="center" valign="top">
			<div id="m_-6916412439722624173m_1426310028606719840template_header_image" style="padding: 20px 0 15px;">
			  <p style="margin-top:0"><img src="http://replatform.acclaimedhw.com/static/media/logo.91a579d8.jpg" alt="Acclaimed Home Warranty" style="border:none;display:inline-block;font-size:14px;font-weight:bold;height:50px;outline:none;text-decoration:none;text-transform:capitalize;vertical-align:middle;max-width:100%;margin-left:0;margin-right:0" class="CToWUd"></p>           </div>
			<table border="0" cellpadding="0" cellspacing="0" width="600" id="wrapper_container" style="background-color:#ffffff;border:1px solid #dedede;border-radius:3px">
			  <tbody><tr>
				<td align="center" valign="top">
				  
				  <table border="0" cellpadding="0" cellspacing="0" width="100%" id="template_header" style="background-color:#00a1b8;color:#ffffff;border-bottom:0;font-weight:bold;line-height:100%;vertical-align:middle;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;border-radius:3px 3px 0 0">
					<tbody><tr>
					  <td id="header_wrapper" style="padding:36px 48px;display:block">
						<h1 style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:30px;font-weight:300;line-height:150%;margin:0;text-align:left;color:#ffffff;background-color:inherit">Thank you for your order</h1>
					  </td>
					</tr>
				  </tbody></table>
				  
				</td>
			  </tr>
			  <tr>
				<td align="center" valign="top">
				  
				  <table border="0" cellpadding="0" cellspacing="0" width="600" id="template_body">
					<tbody><tr>
					  <td valign="top" id="body_content" style="background-color:#ffffff">
						
						<table border="0" cellpadding="20" cellspacing="0" width="100%">
						  <tbody><tr>
							<td valign="top" style="padding:48px 48px 32px">
							  <div id="body_content_inner" style="color:#636363;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:14px;line-height:150%;text-align:left">

<p style="margin:0 0 16px">Hi {{ $firstname }},</p>
<p style="margin:0 0 16px">Just to let you know — we've received your order #{{ $order_id }}, and it is now being processed:</p>

<p style="margin:0 0 16px">{{ $pay_method == 'cash' ? 'Pay with cash upon delivery' : '' }}</p>


<h2 style="color:#00a1b8;display:block;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:130%;margin:0 0 18px;text-align:left">
  [Order #{{ $order_id }}] ({{$order_date}})</h2>

<div style="margin-bottom:40px; overflow-x: auto; width: 100%;">
  <table cellspacing="0" cellpadding="6" border="1" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;width:100%;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif;min-width: 504px; ">
	<thead>
	  <tr>
		<th scope="col" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">Product</th>
		<th scope="col" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">Quantity</th>
		<th scope="col" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">Price</th>
	  </tr>
	</thead>
	<tbody>
		@foreach($productitems as $productitem)
		<tr>
			<td style="color:#636363;border:1px solid #e5e5e5;padding:12px;text-align:left;vertical-align:middle;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif;word-wrap:break-word">{{ $productitem['product_name'] }}</td>
			<td style="color:#636363;border:1px solid #e5e5e5;padding:12px;text-align:left;vertical-align:middle;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif">{{ $productitem['quantity'] }}</td>
			@if($productitem['pay_interval_type'] == 'yearly')
				<td style="color:#636363;border:1px solid #e5e5e5;padding:12px;text-align:left;vertical-align:middle;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif"> @format_price($productitem['productinfo']['yearly_price'] * $productitem['quantity'])</td>
			@else
				 <td style="color:#636363;border:1px solid #e5e5e5;padding:12px;text-align:left;vertical-align:middle;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif">@format_price($productitem['productinfo']['monthly_price'] * $productitem['quantity'])</td>
			@endif
		</tr>
	@endforeach

	</tbody>
	<tfoot>
			<tr>
				<th scope="row" colspan="2" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left;border-top-width:4px">Subtotal:</th>
				<td style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left;border-top-width:4px">@format_price($subtotal)</td>
			</tr>
			@if(!empty($discount) && $discount !== 'null')
			<tr>
				<th scope="row" colspan="2" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left;border-top-width:4px">Discount:</th>
				<td style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left;border-top-width:4px">@format_price($discount)</td>
			</tr>
			@endif
			<tr>
				<th scope="row" colspan="2" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">Payment method:</th>
				<td style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">{{ $pay_method == 'card' ? 'Credit Card' : 'Cash on delivery' }}</td>
			</tr>
			<tr>
			<th scope="row" colspan="2" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">Total:</th>
			<td style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">@format_price($total)</td>
			</tr>
			@if($order_notes !== '')
			<tr>
				<th scope="row" colspan="2" style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">Note:</th>
				<td style="color:#636363;border:1px solid #e5e5e5;vertical-align:middle;padding:12px;text-align:left">{{ $order_notes }}</td>
			</tr>
			@endif
		</tfoot>
  </table>
</div>


<p style="margin:0 0 16px"><strong>Property Address 1:</strong> {{ $prop_street1 }}</p>
<p style="margin:0 0 16px"><strong>Property Address 2:</strong> {{ $prop_street2 }}</p>
<p style="margin:0 0 16px"><strong>Property City:</strong>{{ $prop_city }}</p>
<p style="margin:0 0 16px"><strong>Property State:</strong> {{ $prop_state }}</p>
<p style="margin:0 0 16px"><strong>Property Zip:</strong> {{ $prop_zipcode }}</p>
<table id="addresses" cellspacing="0" cellpadding="0" border="0" style="width:100%;vertical-align:top;margin-bottom:40px;padding:0">
  <tbody><tr>
	<td valign="top" width="50%" style="text-align:left;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif;border:0;padding:0">
	  <h2 style="color:#00a1b8;display:block;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:130%;margin:0 0 18px;text-align:left">Billing address</h2>

	  <address style="padding:12px;color:#636363;border:1px solid #e5e5e5">
		{{ $firstname }} {{ $lastname }}<br>{{ $company }}<br>{{ $street1 }}<br>{{ $street2 }}<br>{{ $city }}, {{ $state }} {{ $pincode }}                  <br><a href="tel:{{ $phone }}" style="color:#00a1b8;font-weight:normal;text-decoration:underline" target="_blank">{{ $phone }}</a>                          <br><a href="mailto:{{ $email }}" target="_blank">{{ $email }}</a>              </address>
	</td>
	  </tr>
</tbody></table>
<p style="margin:0 0 16px">Thanks for using <a href="https://acclaimedhw.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://acclaimedhw.com&amp;source=gmail&amp;ust=1619515408370000&amp;usg=AFQjCNFr1uX-UhEJIlqdvycI9xKPR9CVVA">acclaimedhw.com</a>!</p>
							  </div>
							</td>
						  </tr>
						</tbody></table>
						
					  </td>
					</tr>
				  </tbody></table>
				  
				</td>
			  </tr>
			</tbody></table>
		  </td>
		</tr>
		<tr>
		  <td align="center" valign="top">            
			<table border="0" cellpadding="10" cellspacing="0" width="600" id="template_footer">
			  <tbody><tr>
				<td valign="top" style="padding:0;border-radius:6px">
				  <table border="0" cellpadding="10" cellspacing="0" width="100%">
					<tbody><tr>
					  <td colspan="2" valign="middle" id="credit" style="border-radius:6px;border:0;color:#8a8a8a;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:12px;line-height:150%;text-align:center;padding:24px 0">
						<p style="margin:0 0 16px">Acclaimed Home Warranty</p>
					  </td>
					</tr>
				  </tbody></table>
				</td>
			  </tr>
			</tbody></table>
			
		  </td>
		</tr>
	  </tbody></table> 

</body>