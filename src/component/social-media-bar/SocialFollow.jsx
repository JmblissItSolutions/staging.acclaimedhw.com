import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialFollow = () => {
  return (
    <>
      <div className="contact-us-flag">
        <a href="https://www.facebook.com/acclaimedhomewarranty/" target="_blank" className="social_icons"><FaFacebook /></a>
        <a href="https://www.instagram.com/acclaimedhw/" target="_blank" className="social_icons"><FaInstagram /></a>
        <a href="/contact-us/" className="desktop">
        Contact us
			</a>
      </div>
    </>
  )
};
export default SocialFollow;