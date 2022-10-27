import React from 'react';

const Footer = () => {
    return (
        <div className='bg-violet-400 mt-[70px]'>
    <footer className="footer max-w-[1300px] mx-auto p-10 bg-violet-400 text-base-content">
  <div className='lg:text-2xl text-black'>
    <span className="footer-title">Services</span> 
    <a href='/' className="link link-hover">Branding</a> 
    <a href='/' className="link link-hover">Design</a> 
    <a href='/' className="link link-hover">Marketing</a> 
    <a href='/' className="link link-hover">Advertisement</a>
  </div> 
  <div className='lg:text-2xl text-black'>
    <span className="footer-title">Company</span> 
    <a href='/' className="link link-hover">About us</a> 
    <a href='/' className="link link-hover">Contact</a> 
    <a href='/' className="link link-hover">Jobs</a> 
    <a href='/' className="link link-hover">Press kit</a>
  </div> 
  <div className='lg:text-2xl text-black'>
    <span className="footer-title">Legal</span> 
    <a href='/' className="link link-hover">Privacy policy</a> 
    <a href='/' className="link link-hover">Cookie policy</a>
    <a href='/' className="link link-hover">Terms of use</a> 
  </div> 
  <div className='lg:text-2xl text-black'>
    <span className="footer-title">Newsletter</span> 
    
    <div className='lg:text-2xl text-black'>
    <span className="footer-title">Legal</span> <br />
    <a href='/' className="link link-hover">Privacy policy</a> <br />
    <a href='/' className="link link-hover">Cookie policy</a> <br />
    <a href='/' className="link link-hover">Terms of use</a> 
 
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;