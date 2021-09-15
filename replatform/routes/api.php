<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});

//For get all HomeOwner locations ( states )
Route::get('get_holocations', 'HomeOwnerController@getAll');


//For get all slider Slides
Route::get('get_sliders', 'PagesController@getSlider');


//For get Products by Property Type/Unit size for homeowner locations
Route::get('get_hoproducts/{loc_id}', 'HomeOwnerController@getProducts');

//For get Location Unique Features by location ID 
Route::get('get_location_unique_features/{loc_id}', 'HomeOwnerController@getLocationUniqFea');

//For get Homeowner Product Coverage Upgrades by Product id 
Route::get('get_hoproducts_covup/{prod_id}', 'HomeOwnerController@getProductCovUpgrade');

//For Submit checkout and create order for homeowner plan
Route::post('create_checkout', 'HomeOwnerController@createCheckoutOrder');


//For Submit product items on checkout order 
Route::post('add_orderitems', 'HomeOwnerController@addItemsinOrder');


//For Check the Coupon code availability 
Route::post('check_coupon', 'HomeOwnerController@checkCoupon');


//Charge the Authorize payment on Homeowner checkout 
Route::post('chargepayment', 'HomeOwnerController@chargePayment');


//Get Homeowner order Information by order ID 
Route::get('getorder/{order_id}', 'HomeOwnerController@getOrderinfo');


//Save Homeowner Coupon record in the database 
Route::post('applycoupon', 'HomeOwnerController@applyCoupon');

//Homeowner standard features get
Route::get('homeowner_standard_features/{location_id}','HomeOwnerController@get_standard_fetures');


/*
** Realstate API's 
*/
//For get Realstate all states
Route::get('get_realstate_states', 'RealstateController@getStates');

//For get Realstate Coverage types
Route::get('get_realstate_covtype', 'RealstateController@getCovType');

//For get Realstate Property_types 
Route::get('get_realstate_property_types','RealstateController@getPropertyTypes');

//For get Realstate questions 
Route::post('get_realstate_questions', 'RealstateController@getQuestions');

//For get Realstate Property Type questions 
Route::post('get_realstate_property_type_questions', 'RealstateController@getPropertyTypeQuestions');

//For get Realstate Products 
Route::post('get_realstate_products', 'RealstateController@getProducts');

//To get Realstate Coverages by product id 
//Route::post('get_realstate_coverage', 'RealstateController@getProductCoverage');


//To get Realstate Features
Route::post('get_realstate_features', 'RealstateController@getLocationFeatures');

//get realstate standard features
Route::get('realstate_standard_features/{location_id}', 'RealstateController@getRealstateFeatures');

Route::get('get_realstate_coverage/{prod_id}', 'RealstateController@getProductCoverage');

// To get User types for order

Route::get('get_user_types', 'RealstateController@getUserTypes');


// To get Realstate Product Relations
Route::post('get_product_relations', 'RealstateController@getProductRelations');

//Realstate Orders

Route::post('makeclaim','MakeAClaimController@storeClaim');
Route::post('SaveRealestateOrder','RealStateOrderController@storerealorders');
Route::post('Saverealorderitems','RealStateOrderController@storerealorderitems');
Route::get('getRealOrder/{order_id}','RealStateOrderController@getrealorderinfo');
Route::post('getRealstateOrders','RealStateOrderController@getRealStateOrders');
Route::get('downloadInvoicePdf/{order_id}','RealStateOrderController@downloadInvoicePdf');

Route::post('SendInvoiceEmail','RealStateOrderController@SendInvoiceEmail');
Route::post('CheckRealCouponExist','RealStateOrderController@CheckRealCouponExist');
Route::get('SendDailyOrderReport','RealStateOrderController@SendDailyOrderReport');


//Make Claims
Route::post('MakeaClaim','MakeAClaimController@storeClaim');
// Brochures
Route::get('getLocationBrochures/{location_id}','MakeAClaimController@get_brochures');
//Order Renewal
Route::post('RenewOrder','MakeAClaimController@store_renewal');
//Contact Us
Route::post('ContactUs','MakeAClaimController@contactus');
//Contractor
Route::post('ContractorApplication','MakeAClaimController@save_contractor');

// Appliances Types
Route::get('getAppliancesTypes','MakeAClaimController@getAppliancesTypes');

// Member Advantage Reviews
Route::get('getReviews/{location}','MakeAClaimController@get_reviews');

// Member Advantage Locations
Route::get('getAllLocations','MakeAClaimController@get_all_locations');

//Advantage Enquiry
Route::post('Save_enquiry_utah','MakeAClaimController@SaveAdvantagesEnquiry_utah');
Route::post('Save_enquiry_idaho','MakeAClaimController@SaveAdvantagesEnquiry_idaho');
Route::post('Save_enquiry_arizona','MakeAClaimController@SaveAdvantagesEnquiry_arizona');
Route::post('Save_enquiry_texas','MakeAClaimController@SaveAdvantagesEnquiry_texas');
Route::post('Save_enquiry_nevada','MakeAClaimController@SaveAdvantagesEnquiry_nevada');


// Employees
Route::get('getAllEmployees','MakeAClaimController@get_all_employees');

//testing payment
Route::post('pay','HomeOwnerController@charge');