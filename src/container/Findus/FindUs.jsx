import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
   <div className='app__wrapper_info'>
    <SubHeading title='Contact'/>
    <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
    <div className='app__wrapper-content'>
      <p className='p__opensans'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
      <p className='p__opensans'>Mon - Fri: 09:00 AM - 04:00 AM</p>
      <p className='p__opensans'>Sat - Sun: 10:00 AM - 06:00 AM</p>
    </div>
    <button className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>
   </div>
   <div className='app__wrapper_img'>
    <img src={images.findus} alt="findus image"/>
   </div>
  </div>
);

export default FindUs;
