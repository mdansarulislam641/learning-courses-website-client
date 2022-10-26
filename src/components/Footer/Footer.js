import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200 mt-[70px]'>
    <footer className="footer max-w-[1300px] mx-auto p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a href='/' className="link link-hover">Branding</a> 
    <a href='/' className="link link-hover">Design</a> 
    <a href='/' className="link link-hover">Marketing</a> 
    <a href='/' className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href='/' className="link link-hover">About us</a> 
    <a href='/' className="link link-hover">Contact</a> 
    <a href='/' className="link link-hover">Jobs</a> 
    <a href='/' className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a href='/' className="link link-hover">Privacy policy</a> 
    <a href='/' className="link link-hover">Cookie policy</a>
    <a href='/' className="link link-hover">Terms of use</a> 
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;