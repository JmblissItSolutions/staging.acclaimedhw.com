import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.jpg';
import phone from './assets/images/green-phone.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Menu() {

  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="top-menu">
        <ul className="topBar ml-auto d-flex ml-auto">
          <li>
            <a href="tel:8884949460" className="icon-link">
              <img src={phone} alt="Phone Number" /><span>Toll-Free 888.494.9460 </span></a>
          </li>
          <li>
            <a className="login" onClick={handleShow}>login</a>
          </li>
        </ul>
      </div>
      <Modal className="login_model" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h2 className="mode_ttl">Please select your login type</h2>
        </Modal.Header>
        <div className="modal-body">
          <div className="button-holder" >
            <div className="button-holder">
              <a onClick={() => window.open("https://acclaimed.homeonewarranty.com/customerportal", "_blank")} className="holderbtn">Homeowners</a>
              <a onClick={() => window.open("https://acclaimed.homeonewarranty.com/homeoneportal", "_blank")} className="holderbtn">Real Estate Professionals</a>
              <a onClick={() => window.open("https://acclaimed.homeonewarranty.com/homeoneportal", "_blank")} className="holderbtn">Insurance Agent</a>
            </div>
          </div>
        </div>
        <div className="model_foo">
          <Button onClick={handleClose} className="modal-btn">
            OK
          </Button>
        </div>
      </Modal>
      <Navbar collapseOnSelect expand="xl" expanded={expanded}>
        <Navbar.Brand href="/"><img src={logo} alt="Acclaimed Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav onClick={() => setExpanded(false)} className='mr-auto'>
            <NavLink exact className="nav-link" activeClassName="active" to="/home-warranty">Home Warranty</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/order-now">ORDER NOW</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/resources/arizona">Brochures</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/member-advantages">Member Advantages</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/home-warranty-faqs">FAQ</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/contractors">Contractors</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/about-us">About Us</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/make-a-claim">Make A Claim</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/contact-us">Contact Us</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/renewals">Renewals</NavLink>
            <NavLink exact className="contact_mobile_btn" activeClassName="active" to="/contact-us">Contact Us</NavLink>
            <div className="social-icons">
              <a  className="nav_facebook" target="_blank" href="https://www.facebook.com/acclaimedhomewarranty/"><FaFacebook /></a>
              <a  className="nav_insta" target="_blank" href="https://www.instagram.com/acclaimedhw/"><FaInstagram /></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Menu;