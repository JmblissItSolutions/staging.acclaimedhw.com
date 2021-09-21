import React from 'react'
import { Helmet } from "react-helmet";
import { FaRegWindowMaximize } from 'react-icons/fa';
const MyAccount = () => {
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            <div className="home_page">
                <div className="cart_ttl">
                    <h1>cart</h1>
                </div>
                <section className="inner">
                    <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper"></div>
                        <p className="cart-empty woocommerce-info"><FaRegWindowMaximize className="windowmaximize" />Your cart is currently empty.</p>
                        <p className="return-to-shop">
                            <a className="button wc-backward" href="#">
                                Return to shop</a>
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
export default MyAccount;