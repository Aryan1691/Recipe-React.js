import React from 'react';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCards from '../components/RecipeCards';


const Recipies = () => {

    const items =["Pizza","Burger","Cookies","Juice","Biryani","Salad","Ice cream","Pudding","Soup","Lemon rice"]
   
  return (
    
    <>
     <PreviousSearches ITEMS={items}/>
     <div className="recipe-container">
     <RecipeCards/>


     </div>

    </>
  )
}

export default Recipies;