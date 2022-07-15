import React from 'react';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import {FooterOverlay,Newsletter} from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
   
   <Newsletter />

   <div className='app__footer-links'>
    <div className='app__footer-links_contact'>
     <h1 className='app__footer-headtext'>Contact Us</h1>
     <p className='p__opensans'>B/2 Krishna Nivas, Adityapur, Jamshedpur-831013, India</p>
     <p className='p__opensans'>+91 8798013238</p>
     <p className='p__opensans'>+91 7783050712</p>
    </div>
    <div className='app__footer-links_logo'>
      <img src={images.hungrylogo} alt='Hungry'/>
      <p className='p__opensans' style={{color:'var(--color-golden)'}}>"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world."</p>
      <img src={images.spoon} alt='Spoon' className='spoon__img' style={{marginTop: '15px'}}/>
      <div className='app__footer-links_icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>
    <div className='app__footer-links_work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
     <p className='p__opensans'>Monday - Friday :</p>
     <p className='p__opensans'>08:00 AM - 12:00 AM</p>
     <p className='p__opensans'>Saturday - Sunday</p>
     <p className='p__opensans'>07:00 AM - 11:00 PM</p>
    </div>
   </div>
   <div className='footer__copyright'>
    <p className='p__opensans'>2022 Hungry. All Rights Reserved!</p>
   </div>
  </div>
);

export default Footer;
