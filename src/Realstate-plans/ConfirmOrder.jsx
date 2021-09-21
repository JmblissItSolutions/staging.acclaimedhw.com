import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from "react-helmet";
import APIUrl from "../Api"
import homewarranty from "../assets/images/homewarranty.png";
import * as ReactBootStrap from "react-bootstrap";

const ConfirmOrder = ({ parentCallback, orderid }) => {
    const [isLoading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    const siteURL = (APIUrl.defaults.baseURL)

    let remaingAmount = localStorage.getItem('remainblnc');
    // console.log(remaingAmount, 'remaingAmount');
    function GoBack() {
        parentCallback();
    }

    const [data, setData] = useState();
    useEffect(async () => {
        const url = "/getRealOrder/" + `${orderid}`
        const result = await APIUrl.get(`${url}`)
        setData(result.data);
    }, []);

    const [todo, setTodo] = useState(null);
    const [id, setId] = useState(orderid);
    useEffect(() => {
        if (id == null || id === '') {
            return;
        }
        fetch(`${siteURL}getRealOrder/${id}`)
            .then(results => results.json())
            .then(data => {
                setTodo(data);
                // console.log(data)
            });
    }, [id]);

    function pad2(n) {
        return (n < 10 ? '0' : '') + n;
    }
    var date = new Date();
    var month = pad2(date.getMonth() + 1);
    var day = pad2(date.getDate());
    var year = date.getFullYear();
    var formattedDate = year + "-" + month + "-" + day;

    const [checked, setChecked] = useState([]); // categories
    const selectedreciever = checked.join(', ')

    function handleToggle(c, event) {
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];
        if (clickedCategory === -1) {
            all.push(c);
            event.isAdded = true;
        } else {
            all.splice(clickedCategory, 1);
            event.isAdded = false;
        }
        // console.log(all);
        setChecked(all);
    };

    const [invoice, setInvoice] = useState([]);
    const order_id = orderid
    const receivers = checked.toString();

    function InvoiceEmail() {
        setLoading(true)
        let data = { order_id, receivers }
        fetch(`${siteURL}SendInvoiceEmail`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((invoice) => {
                    setInvoice(invoice);
                    console.log(invoice);
                    if (invoice.result == false) {
                        window.scrollTo({
                            top: 80,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }
                    if (invoice.result == true) {
                        setValue('ThankYou');
                    }
                    setLoading(false)
                })
            })

    }
    let res = invoice.result
    let msg = invoice.message
    let pdflink = invoice.invoice_pdf
    const ThankYou = () => (
        <>
            <div className="home_page">
                <div className="top_img">
                    <img src={homewarranty} alt="homewarranty" />
                </div>
                <div className="container">
                    <div className="thankyou">
                        <h2>Thank You</h2>
                        <div className="cwell">
                            <h4>Your Order Has Been Received</h4>
                            <p>A PDF invoice has been delivered to the recipients selected. If you do not see the invoice in your Inbox shortly, please check your spam folder.</p>
                            <div dangerouslySetInnerHTML={{ __html: pdflink }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    const Confirm = () => (
        <>
            <div className="home_page">
                <div className="top_img">
                    <img src={homewarranty} alt="homewarranty" />
                </div>
                <div className="realstate">
                    <h1>Real Estate Orders</h1>
                </div>
                <div className="container">
                    {data &&
                        <div className="confirmBox">
                            <h2>CONFIRM YOUR ORDER</h2>
                            <button type="button" className="btn" onClick={GoBack}>GO BACK</button>
                            <div className="cwell">
                                <div className="crow n1">
                                    <p className="error-msg">{msg}</p>
                                    {res == false ? <p className="error-msg">{res}</p> : null}
                                    <h4>Order Number AHW00{data.id}</h4>
                                    <h4>{formattedDate}</h4>
                                </div>
                                <div className="crow">
                                    <div className="ccol n1">
                                        <h4>Coverage Type</h4>
                                        <p>{data.co_type_name}</p>
                                        <p>Propery located in <strong className="ng-binding">{data.location_name}</strong></p>
                                    </div>
                                </div>
                                <div className="crow n2">
                                    <h4>Home Warranty Plan</h4>
                                    <table id="orderList">
                                        <thead>
                                            <tr>
                                                <th>Description</th>
                                                <th className="text-right" width="50">QTY.</th>
                                                <th className="text-right" width="100">Rate</th>
                                                <th className="text-right" width="100">Line Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.productitems.map((item) => {
                                                    return <tr className="ng-scope">
                                                        <td className="ng-binding">{item.product_name}</td>
                                                        <td className="text-right">{item.quantity}</td>
                                                        <td className="text-right ng-binding">${item.rate}</td>
                                                        <td className="text-right ng-binding">${item.line_total}</td>
                                                    </tr>
                                                })}
                                        </tbody>
                                        <tfoot>
                                            {
                                                remaingAmount > 0 ?
                                                <tr className="ng-scope">
                                                <td><strong>Credit Amount</strong></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right">
                                                    <strong className="ng-binding">
                                                        ${remaingAmount}
                                                    </strong>
                                                </td>
                                            </tr> : null
                                            }
                                            <tr className="ng-scope">
                                                <td><strong>TOTAL DUE</strong></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right">
                                                    <strong className="ng-binding">${data.total_amount}</strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="crow n3">
                                    <div className="ccol n1">
                                        <h4>Property Address</h4>
                                        <p>
                                            <span className="ng-binding">{data.prop_street1}</span>
                                            <span className="ng-binding">{data.prop_street2}</span>
                                            <span className="ng-binding">{data.prop_zipcode}</span>
                                        </p>
                                    </div>
                                    <div className="ccol n2">
                                        <h4>Title/Escrow Company</h4>
                                        <p>
                                            <span className="ng-binding">{data.escrow_title}</span>
                                            <span className="ng-binding">{data.escrow_street1}</span>
                                            <span className="ng-binding">{data.escrow_street2}</span>
                                            <span className="ng-binding">{data.escrow_zipcode}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="crow n4">
                                    <div className="ccol n1">
                                        <h4>Buyer's Agent</h4>
                                        <p>
                                            <span className="ng-binding">{data.buyer_agentname}</span>
                                        </p>
                                    </div>
                                    <div className="ccol n2">
                                        <h4>Estimated Close Date</h4>
                                        <p>
                                            <span className="ng-binding">{data.closing_date}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="crow n5">
                                    <div className="ccol n1">
                                        <h4>This Order Will Be Billed To</h4>
                                        <p>
                                            <span>{data.order_biller}</span>
                                            <span>{data.seller_coordinatorphone}</span>
                                            <span>{data.seller_coordinatoremail}</span>
                                        </p>
                                    </div>
                                    <div className="ccol n2">
                                        <h4>Send Invoice and Notification To</h4>
                                        {data.invoice_receivers.map((c, i) => (
                                            <li key={i} className="list-unstyled">
                                                <input
                                                    onChange={event => handleToggle(c.name, c)}
                                                    type="checkbox"
                                                    value={c.name}
                                                    className="mr-2"
                                                    checked={c.isAdded}
                                                />
                                                <label className="form-check-label">{c.name}</label>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn" onClick={InvoiceEmail} >CONTINUE</button>
                            {isLoading == true ? <ReactBootStrap.Spinner animation="border" /> : null}
                        </div>
                    }
                </div>
            </div>
        </>
    )
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            {value === 'ThankYou' ? <ThankYou /> : <Confirm />}

        </>
    );
}
export default ConfirmOrder;