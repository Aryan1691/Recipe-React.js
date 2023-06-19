import React from 'react';
import CustomImages from './CustomImages';
import sg from  "../Assets/img_1.webp";
import sg1 from "../Assets/img_2.webp";
import sg2 from "../Assets/img_3.webp";
import sg3 from "../Assets/img_4.webp";
import sg4 from "../Assets/img_5.webp";
import sg5 from "../Assets/img_6.webp";
import sg6 from "../Assets/img_7.webp";
import sg7 from "../Assets/img_8.webp";
import sg8 from "../Assets/img_9.webp";
import bgs from '../Assets/bga.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 100,
        anchorPlacement: 'top-bottom',
        once: true,
      });
    const image=[sg,sg1,sg2,sg3,sg4,sg5,sg6,sg7,sg8];
  return (
   <React.Fragment>
   <div className='con' >
   <img src={bgs} className='img2' alt="BACKGROUND" data-aos="fade-top" />
   <div className='middle' data-aos="fade-up"> delightful experience</div>
   <h1 className='middle-text' data-aos='fade-up'>Welcome to Foodathon</h1>
   <div className='middle-text2' data-aos="fade-up">
Welcome to our Recipe App, where you can discover and explore a world of delicious recipes at your fingertips. From mouthwatering entrees to delectable desserts, we have a wide range of culinary inspirations to satisfy your cravings and ignite your passion for cooking.</div>
   </div>
   
    <div className="section hero"  >

        <div className="col" data-aos='fade-up'>
            <h1 className='title typography' >What Are We About</h1>
            <p className="info">Foodathon is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
            <button className="btn">explore now</button>
        </div>
        <div className="col gallery" data-aos='fade-bottom'>
        {image.map((src,index)=>{
        return<CustomImages key={index} images={src} pt={"90%"}/>
        
        })}
           

        </div>
    </div>
   </React.Fragment>
  )
}

export default HeroSection