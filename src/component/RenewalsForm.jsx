import { React } from "react";

const RenewalsForm = () => {
    return (
        <>
            <div className="form-box-wrap">
                <div className="form">
                    <form>
                        <label>First Name</label>
                        <input type="text" id="fname" name="fname" />
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lname" />
                        <label>Home address or policy number *</label>
                        <input type="text" id="addressorpolicynumber" name="addressorpolicynumber" />
                        <label>Email address *</label>
                        <input type="email" id="email" name="email" />
                        <label>Phone number *</label>
                        <input type="number" id="phonenumber" name="phonenumber" />
                        <label>Click on your option below:</label>
                        <label><input type="checkbox" id="choice1" name="choice1" value="sameplan" /> Do you want to renew on the same plan & options as last year?</label>
                        <label><input type="checkbox" id="choice2" name="choice2" value="specials" /> Do you want information on other renewal options & specials?</label>
                        <label>Payment: if you choose to renew on the same plan as last year we will email you an invoice to securely pay online. Once payment is made you will receive the updated contact information to your email to securely pay online.</label>
                        <label>Anything else we can help you with today?</label>
                        <textarea></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default RenewalsForm;