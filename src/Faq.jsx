import React from "react";
import { useHistory } from 'react-router-dom';
import MakeAClaim from "./assets/images/MakeAClaim.png";
import { Helmet } from "react-helmet";

const Faq = () => {
    const history = useHistory();
    const ContactClick = () => {
        history.push("/contact-us");
    }
    return (
        <>
            <Helmet>
                <title>What Is a Home Warranty? Pros, Cons, Costs, FAQ's to put your mind at ease</title>
                <meta name="description" content="What's covered under a home warranty, and how can you, as a homeowner, get the maximum benefit when purchased your customized plan." />
            </Helmet>
            <div className="home_page Faq-pg">
                <div className="top_img">
                    <img src={MakeAClaim} alt="MakeClaim"/>
                </div>
                <div className="container">
                    <div className="first_sec">
                        <h1>You Can Count Acclaimed Home Warranty</h1>
                        <h2>Acclaimed Home Warranty Answers Your Questions</h2>
                        <p>As a homeowner, you want to do everything you can to protect your home. An excellent way to do so is with the purchase of a home warranty plan for your home in Arizona, Utah, Nevada, Texas, and Idaho. Acclaimed Home Warranty offers a range ofwarranty options for current homeowners, new home purchasers, home sellers, and real estate agents. We’re here to help you find the right coverage for your needs. We fully understand that you may have questions about the coverage we offer and what’s included in the plans. To help you get the answers you need, we’ve compiled a list of our most frequently asked questions and their answers. Please feel free to contact us if you have any additional questions.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What Is a Home Warranty?</h3>
                                    <p>A home warranty is a service contract that covers breakdowns of important home systems and appliances. This coverage essentially pays for the repairs and replacements of the covered items when they break down due to normal wear and tear. The purchaser of the plan pays an annual fee for the warranty coverage and signs the service contract. Then, when you encounter a system breakdown, the warranty company pays for the repairs or replacement, provided the malfunctioning system is covered under your contract. Many warranty companies allow you to choose which appliances and systems are covered in your plan before agreeing to the contract.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                <h3>Why Purchase a Home Warranty?</h3>
                                    <p>A home warranty is an excellent way to ensure your home has maximum protection against unforeseen breakdowns and repairs. Unfortunately, appliances and home systems don’t break down on a schedule and can happen at any time. If you aren’t prepared, you’re left to cover the costs of repair or replacement on your own. However, with a home warranty plan, you won’t have to worry about these unexpected expenses, as our coverage will help reduce or eliminate the rising costs of home ownership. Our plans give you the option to choose what you include, but the most common household systems covered in home warranty plans include:</p>
                                    <li>Heating & A/C Systems</li>
                                    <li>Plumbing Systems</li>
                                    <li>Electrical Systems</li>
                                    <li>Built In Kitchen Appliances</li>
                                    <li>Garage Door Systems</li>
                                    <li>Kitchen Refrigerator</li>
                                    <li>Washer / Dryer</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>How Much Does a Home Warranty Cost?</h3>
                                    <p>The cost of a home warranty plan will vary depending on which option you choose. The more items your plan covers, the higher the cost will be. We offer three plan options for single-family homeowners, as well as additional coverage options for multi-family properties. Our team can tell you more about the specifics of each option and provide you with exact prices for each plan. We encourage you to reach out to us to discuss your needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What’s the Difference between a Home Warranty and Homeowner’s Insurance?</h3>
                                    <p>If you’re thinking that a home warranty sounds pretty similar to homeowner’s insurance, you aren’t alone. These two types of plans do work in a similar way to protect your home and the items within it, however there is a difference. Your home insurance policy covers unexpected damage to the structure and contents of your home due to unforeseen events like fires, storms, or natural disasters, and may also cover theft of your personal property. Unfortunately, homeowner’s insurance does not cover everyday breakdowns of your systems or appliances, and that’s where home warranty comes in handy. A home warranty plan will cover most breakdowns of primary mechanical systems and appliances at your home, making it an excellent counterpart to home insurance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What’s NOT Covered by a Home Warranty?</h3>
                                    <p>As previously mentioned, a home warranty covers the cost of repairs or replacements for items that have broken down due to normal wear and tear during the contract period. This means that any appliance or home system that breaks down because of improper use or inadequate care will not be covered by the warranty. The same goes for items that were malfunctioning prior to the effective state date of the contract. In addition, any non-mechanical parts of the system or appliance that don’t contribute to its primary function will not be covered by the plan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>How Long Does My Contract Last?</h3>
                                    <p>In most cases, a home warranty contract will last for one year. As the end of your contract approaches, you’ll have the opportunity to sign a new contract that will last for an additional year. If you choose not to sign a new agreement, your coverage will lapse on the specified date, which will terminate all member advantages and end the protection coverage on your home.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What Is A Service Fee?</h3>
                                    <p>A service fee is similar to a deductible. Each time a claim is called in one will be required. Service fees differ state to state but range between $60-$70. We charged “per trade” meaning if you have 2 claims for the same contractor (defined as tradesman) only one fee is required. If you have claims that require different contractors, then a fee per claim will be required before a diagnosis can be performed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>Can I Use My Own Contractor?</h3>
                                    <p>Acclaimed requires you to call in all claims in order for your claims to be covered. AHW  shall have the right and discretion to select its own service contractors. AHW will not reimburse any costs or fees incurred by your own contractor without express written prior authorization by AHW</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>How Do I Call In A Claim?</h3>
                                    <p><strong>We accept service/claims requests 24 hours a day, 365 days a year.</strong>
                                        In the event a covered item fails, place a service request by calling us at 888-494-9460 or place a service request online at <a href="http://localhost:3000/make-a-claim">www.acclaimedhw.com/makeaclaim</a><br/>
                                        A contractor will be assigned and will call you to schedule. The services will be initiated under normal circumstances within 48 hours of your service request to AHW. In cases of emergency, we will make reasonable efforts to expedite service calls within 24 hours.
                                        <strong>An emergency situation is defined as a failure of a covered item resulting in 1) a condition that immediately endangers health and safety; 2) a system failure that is causing ongoing damage to the home; 3) plumbing failure that causes interior leaking; and 4) a complete loss of heat or air conditioning in extreme temperatures.</strong><br/>
                                        AHW shall not be held liable for any damage or injury caused by any failure or delay in providing repair service. AHW will accept your request to expedite scheduling of a non-emergency service when a service contractor is available, however, you will be responsible for payment of additional fees, including overtime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_us">
                    <h3>Contact Us Today with Additional Questions</h3>
                    <p>If you have additional questions about our home warranty options for buyers, sellers, or real estate agents, please reach out to Acclaimed Home Warranty today. We can provide you with all the information you need and tell you about the specifics of each plan we offer. You’ll have the freedom to choose the type of coverage that works best for you, so you don’t have to pay extra for coverage you don’t need. Give us a call today to get the process started!</p>
                    <button className="con_btn" onClick={ContactClick}>Contact Us</button>
                </div>
            </div>
        </>
    )
};
export default Faq;