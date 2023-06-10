import React from 'react'
import {BsFacebook} from "react-icons/bs"
import { AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";
const ChefCard = ({chef}) => {
  return (
    <>
        <div className="chef-card">
            <img src={chef.img} alt="images" />
            <div className="chef-card-info">
                <h3 className="chef-card-name">{chef.name}</h3>
                <p className="chef-recipes-counts">Recipes : <b>{chef.recipesCount}</b></p>
                <p className="chef-cuisine">Cuisine : <b>{chef.cuisine}</b></p>
                <p className="chef-icons">
                <BsFacebook/>
                <AiFillInstagram/>
                <AiFillTwitterCircle/>
                </p>
            </div>
        </div>
    </>
  )
}

export default ChefCard