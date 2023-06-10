import React from 'react'
import ChefCard from './ChefCard';
import sg1 from '../chefs/img_1.webp';
import sg2 from '../chefs/img_2.webp';
import sg3 from '../chefs/img_3.webp';
import sg4 from '../chefs/img_4.webp';
import sg5 from '../chefs/img_5.webp';
import sg6 from '../chefs/img_6.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ChefSections = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 100,
        anchorPlacement: 'top-bottom',
        once: true,
      });
  const chef =[
    {
      name: "Juan Carlos",
      img: sg1,
      recipesCount: "10",
      cuisine: "Japanese",
  },
  {
      name: "Erich Maria",
      img: sg2,
      recipesCount: "05",
      cuisine: "Mexican",
  },
  {
      name: "John Doe",
      img: sg3,
      recipesCount: "23",
      cuisine: "Indian",
  },
  {
      name: "Chris Brown",
      img: sg4,
      recipesCount: "08",
      cuisine: "American"
  },
  {
      name: "Blake Lively",
      img: sg5,
      recipesCount: "09",
      cuisine: "French"
  },
  {
      name: "Ben Affleck",
      img: sg6,
      recipesCount: "04",
      cuisine: "Italian"
  }

  ]
  return (
  <>
  
    <div className="section chefs" id='chef' data-aos="fade-bottom">
        <h1 className='title'>Our Top Chefs</h1>
        <div className="top-chefs-container">
        {chef.map(((chefInfo,index)=>{
         return(
          <ChefCard key={index} chef={chefInfo}/>
         )

        }))}
          

        </div>
    </div>
  </>
  )
}

export default ChefSections