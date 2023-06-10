import React from 'react'
import sg from "../Assets/img_10.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ImproveSkill = () => {
    const list =[
        "Learn new recepies",
        "Experiment with food",
        "Know nutrition facts",
        "Get cooking tips",
        "Learn new recepies"
    ]
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 100,
        anchorPlacement: 'top-bottom',
        once: true,
      });
  return (
    <>
          
    <div className="section improve-skills">
    <div className="col img" data-aos="fade-top">
        <img src={sg} alt="img"/>
    </div>
        <div className="col"  data-aos="fade-bottom"> 
            <h1 className='title typography'>Improve Your Culinary Skills</h1>
            <div className="info">{list.map((List,index)=>{
                return <div key={index} className='list'>{List}</div>
            })}</div>
            <button className="btn">SIGNUP NOW</button>
        </div>
       
           

    </div>
  
    </>
  )
}

export default ImproveSkill