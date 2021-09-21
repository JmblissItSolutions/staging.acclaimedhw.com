import React from 'react'
import { Helmet } from "react-helmet";
import MakeAClaim from "../assets/images/MakeAClaim.png"

const ClaimSubmission = () => {
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            <div className="home_page Claim">
                <div className="top_img">
                    <img src={MakeAClaim} alt="MakeClaim" />
                </div>
                <div className="container">
                    <h1>Claim Submission</h1>
                    <section className="cliam-title">
                        <p>Thank you for submitting your claim. You will be contacted the next business day. If this is an emergency one of our team members will be in touch shortly.</p>
                        <p>If after 6pm or on weekends or holidays you will receive a call back the next business day. If this is deemed a life emergency, please contact 911. If this is any other type of emergency, please call 888-494-9460 and let us know it’s an emergency so we can contact you immediately.</p>
                        <p>Thank you for choosing Acclaimed Home Warranty</p>
                        <p>Acclaimed Home Warranty<br />
                            888-494-9460<br />
                            <a href="mailto:info@acclaimedhw.com">info@acclaimedhw.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}
export default ClaimSubmission;