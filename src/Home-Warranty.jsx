import React from "react";
import { useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet";
import homewarranty from "./assets/images/homewarranty.png";
import bluephone from "./assets/images/blue-phone.jpg";
import bluepiggy from "./assets/images/blue-piggy.jpg";
import bluecall from "./assets/images/blue-call.jpg";
const AboutUs = () => {
    const history = useHistory();
    const ContactClick = () => {
        history.push("/contact-us");
    }
    return (
        <>
            <Helmet>
                <title>The Best Home Warranty Companyin Arizona, Utah, Nevada, Texas, and Idaho : Acclaimed Home Warranty</title>
                <meta name="description" content="Acclaimed Home Warranty " />
            </Helmet>
            <div className="home_page home-warranty">
                <div className="top_img">
                    <img src={homewarranty} alt="homewarranty" />
                </div>
                <div className="container">
                    <div className="first_sec">
                        <h1>Only Trust the Best Home Warranty Company </h1>
                        <h2>Acclaimed Home Warranty Provides the Protection You Need</h2>
                        <p>As the owner of a home, you know the worry that can come with it. While it’s nice to have a place to call all your own, there’s always the concern that something will break or need repair unexpectedly, leaving you to foot the bill. However, a home warranty plan can eliminate this worry, giving you the peace of mind of knowing your appliances and systems are covered. As one of the best home warranty companies in Arizona, Utah, Nevada, Texas, and Idaho, Acclaimed Home Warranty can help you ensure you have the protection your home needs. Please reach out to us today to learn more about our coverage options.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What Is a Home Warranty?</h3>
                                    <p>A home warranty is a type of added protection plan you can purchase to cover the replacement or repair of important household appliances and home system components. It is a yearly service contract that ensures the company you purchase from will send a partner contractor to complete the work and pay for the repairs. A home warranty provides added peace of mind, especially if the items covered in your warranty are older and no longer have valid manufacturers’ warranties. Though the coverage may sound similar to insurance, a home warranty is actually a separate product. </p>
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
                                    <h3>How Does a Home Warranty Save Me Money?</h3>
                                    <p>Owning a home comes with a lot of expenses. You’re responsible for your mortgage, property taxes, insurance, and more. On top of that, you have to pay to maintain its condition and you may even want to upgrade some items. With all these expenses, how are you supposed to also find money to repair or replace household items if they break? A home warranty can help reduce or eliminate the rising costs of these repairs and replacements. In exchange for an annual fee, your home warranty coverage will cover the cost of replacements or repairs to your most important appliances and systems. In the long run, paying for a home warranty is much more cost effective than paying out of pocket for repairs or replacements, as those can quickly tally hundreds or thousands of dollars.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>Choosing a Home Warranty</h3>
                                    <p>There are home warranty options to suit every need, even the needs of homeowners currently looking to sell their property. We offer a range of home warranty options for sellers, current homeowners, landlords with rental properties, or real estate orders. As the seller of a home or a real estate agent representing a seller,investing in a home warranty that the new buyer can use is an excellent way to make your listing stand out. It gives potential buyers added peace of mind that they won’t be stuck with a bunch of repair bills if things start to break after taking ownership. Our team can help you choose the right home warranty to cover your needs. We allow you to pick which items your home warranty plan covers, so you only pay to for the exact coverage you need.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="acclaimed_apart">
                    <div className="container">
                        <h1>What Makes Acclaimed Home Warranty Stand Apart?</h1>
                        <p>When searching for home warranty plans, you want to be sure you find a reputable company. Acclaimed Home Warranty is one of the best options to choosedue to the high level of service we provide. We offer our clients the best experience possible, and you’ll have access to many member advantages when you purchase a plan through our company. We’re the right team to choose for the following reasons:</p>
                        <div className="acclaimed_inner_reason">
                            <div className="acclaimed_reason">
                                <i className="achis blue-phone">
                                    <img src={bluephone} alt="Blue phone" /></i>
                                <h4>Superior Customer Service</h4>
                                <p>Our team is very responsive to all your calls and will help you whenever you need it. We put your needs first in all matters.</p>
                            </div>
                            <div className="acclaimed_reason">
                                <i className="achis blue-phone">
                                    <img src={bluepiggy} alt="Blue phone" /></i>
                                <h4>Locally Owned & Managed</h4>
                                <p>Our company is locally owned and managed, so you don’t have to deal with the faceless big corporations.</p>
                            </div>
                            <div className="acclaimed_reason">
                                <i className="achis blue-phone">
                                    <img src={bluecall} alt="Blue call" /></i>
                                <h4>Hassle-Free Claims</h4>
                                <p>We can connect you with quality contractors 24 hours a day, allowing you to get the service you need when you need it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_us">
                    <h3>Contact Us Today</h3>
                    <p>At Acclaimed Home Warranty, we have plans that will help protect the home you’ve owned for years, one you’ve just purchased, or real estate properties getting ready to hit the market.If you’re interested in learning more about our warranty plans, we encourage you to reach out to our team today. We can go over your options and help you find the right plan to meet your needs.</p>
                    <button className="con_btn" onClick={ContactClick}>Contact Us</button>
                </div>
            </div>
        </>
    )
};
export default AboutUs;