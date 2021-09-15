<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor="#eee" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;" class="responsive-tble">

 

<p style="margin:0 0 16px">Attached is the Invoice for the property at:</p>

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


<P style="margin:0 0 16px;font-weight: bold;">We appreciate the opportunity to work with you.</P>
<P style="margin:0 0 16px;font-weight: bold;">Thank you!</P>
<P style="margin:0 0 16px;font-weight: bold;">Acclaimed Home Warranty</P>
</body>