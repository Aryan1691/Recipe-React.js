import React, { useEffect, useState } from 'react'
import CustomImages from './CustomImages'
import veg from '../Assets/veg.webp';
import nonveg from '../Assets/non-veg.webp';


const RecipeCards = () => {
 
const[store,getStore]=useState([]);

useEffect(()=>{
let  url="https://api.spoonacular.com/recipes/random?apiKey=ec68d028426244daba4a93addcf26b30&number=12";
const Data = async()=>{
    const fet = await fetch(url);
    const convert = await fet.json();

    getStore(convert.recipes)
    console.log(convert.recipes)
}
Data();

},[])

  return (
  <React.Fragment>
  
{store.map((recpi,index)=>{
  return(    
    <div>
    
    <div className="recipe-card" key={index}>
    <CustomImages images={recpi.image} pt={"65%"}/>    
        <div className="recipe-card-info">
        <div>{recpi.vegetarian===true?<img className='author-image' src={veg} alt="chef" />:<img className='author-image' src={nonveg} alt="chef" />}</div>  
          <p className='recipe-title'>{recpi.title}</p>
                <a className="view-btn" href={recpi.spoonacularSourceUrl}  rel="noReferrer" target='_blank'>VIEW RECIPE</a>
        </div>
        </div>
        </div>
  )
})}
  </React.Fragment>
  )

}

export default RecipeCards