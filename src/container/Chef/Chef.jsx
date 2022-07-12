import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef image'/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
    
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quotes' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, sem ac rhoncus egestas, lectus odio feugiat nisl, et dapibus leo sem ac nibh.</p>
      </div>
      <p className='p__opensans'>Sed imperdiet pulvinar vulputate. Cras hendrerit ut lorem id blandit. Fusce odio sapien, scelerisque non sapien porttitor, porttitor ultrices urna. Etiam sit amet consectetur tortor. Integer quis interdum neque. Ut tempor sodales ultricies. Mauris vestibulum orci nisi, at molestie sem maximus at. Pellentesque et scelerisque justo. Nunc iaculis commodo arcu. Morbi sagittis eu magna ut porta. Nam quis ligula sit amet nunc feugiat pulvinar.</p>
      
    </div>

    <div className='app__chef-sign'>
      <p>Abhay Anand</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt='signature'/>
    </div>


    </div>
  </div>
);

export default Chef;
