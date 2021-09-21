import React, { useEffect, useState } from 'react';
import axios from 'axios';
import APIUrl from "../Api"
import { Helmet } from "react-helmet";
import Checkoutbg from "../assets/images/Checkoutbg.png";
import { ItemImage } from 'semantic-ui-react';

const OrderReceived = () => {
    const orderId = localStorage.getItem('order_id')
    //console.log(orderId)
    const siteURL = (APIUrl.defaults.baseURL)

    const [data, setData] = useState();
    useEffect(async () => {
        const url = "/getorder/" + `${orderId}`
        const result = await APIUrl.get(`${url}`)
        setData(result.data);
        console.log(result.data)
    }, []);


    const [todo, setTodo] = useState(null);
    const [id, setId] = useState(orderId);
    useEffect(() => {
        if (id == null || id === '') {
            return;
        }

        fetch(`${siteURL}getorder/${id}`)
            .then(results => results.json())
            .then(data => {
                setTodo(data);
            });
    }, [id]);
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            <div className="home_page">
                <section className="top-image">
                    <img src={Checkoutbg} alt="Checkoutbg" />
                </section>
                <div className="container">
                    <div className="checkout_ttl">
                        <h1>Checkout</h1>
                    </div>
                    <div className="order-received woocommerce">
                        {data &&
                            <div className="woocommerce-order">
                                <p>Thank you. Your order has been received.</p>
                                <ul className="order_details">
                                    <li className="woocommerce-order-overview__order order">Order number:<strong>{data.id}</strong></li>
                                    <li className="woocommerce-order-overview__date date">Date:<strong>{data.order_date}</strong></li>
                                    <li className="woocommerce-order-overview__total total">Total:<strong>${data.total}</strong></li>
                                    <li className="woocommerce-order-overview__payment-method method">Payment Method<strong>{data.pay_method}</strong></li>
                                </ul>
                                <p>Pay with Card.</p>
                                <div className="woocommerce-order-details">
                                    <h2 className="woocommerce-order-details__title">Order details</h2>
                                    <div className="order_review">
                                        <table className="shop_table woocommerce-checkout-review-order-table">
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.productitems.map((item) => {
                                                        const proy = `${item.productinfo.yearly_price}`;
                                                        const prom = `${item.productinfo.monthly_price}`;
                                                        let proyearly = parseFloat(proy).toFixed(2)
                                                        let promonthly = parseFloat(prom).toFixed(2)
                                                        let quapricey = proyearly * item.quantity
                                                        let quapricem = promonthly * item.quantity
                                                        let qpy = parseFloat(quapricey).toFixed(2)
                                                        let qpm = parseFloat(quapricem).toFixed(2)
                                                        return <tr className="cart_item" key={item.id}>
                                                            <td className="product-name">{item.product_name}
                                                                <strong className="product-quantity"> x {item.quantity}</strong>
                                                            </td>
                                                            <td className="product-total">
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <bdi>
                                                                        <ul>
                                                                            {(item.quantity > 0 && item.quantity == 1) ? <li>{item.pay_interval_type == 'yearly' ? <span>${proyearly}</span> : <span>${promonthly}</span>}</li> : ""}
                                                                            {(item.quantity > 1) ? <li>{item.pay_interval_type == 'yearly' ? <span>${qpy}</span> : <span>${qpm}</span>}</li> : ""}
                                                                        </ul>
                                                                    </bdi>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    })}
                                            </tbody>
                                            <tfoot>
                                                <tr className="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td>
                                                        <strong>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>

                                                                    <span className="woocommerce-Price-currencySymbol">$</span>{data.subtotal}
                                                                </bdi>
                                                            </span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Payment method:</th>
                                                    <td>
                                                        <strong>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">{data.pay_method}</span>
                                                                </bdi>
                                                            </span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                {data.discount ?
                                                    <tr className="order-total">
                                                        <th>Discount</th>
                                                        <td>
                                                            <strong>
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <bdi>
                                                                        <span className="woocommerce-Price-currencySymbol">-$</span>{data.discount}
                                                                    </bdi>
                                                                </span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                    : null}
                                                <tr className="order-total">
                                                    <th>Total</th>
                                                    <td>
                                                        <strong>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>{data.total}
                                                                </bdi>
                                                            </span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Note:</th>
                                                    <td>
                                                        <strong>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">{data.order_notes}</span>
                                                                </bdi>
                                                            </span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default OrderReceived;