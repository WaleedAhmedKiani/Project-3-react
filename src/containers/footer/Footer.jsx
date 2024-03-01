import React from 'react';
import './Footer.css';
import Flogo from '../../Assets/logo-footer.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__pading'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>You Want to step in to future</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request For Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={Flogo} alt="logo" />
          <p>Waleed Ahmed, All Right Reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Services</p>
          <p>Social Media</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

      

        
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Signup</p>
          <p>Contact</p>
        </div>

          
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Email</p>
          <p>Workig Hours</p>
          <p>Phone Number</p>
          <p>Billing Address</p>
        </div>
        
      </div>
      <div className='gpt3__footer-copyright'>
        <p>@ 2022 GPT-3. Waleed Ahmed, &nbsp;All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer