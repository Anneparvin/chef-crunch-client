import React from 'react';
import { Link } from 'react-router-dom';
import ChefSection from '../ChefSection/ChefSection';

const ChefRecipe = (recipie) => {
    console.log(recipie.recipie)
    const {ChefName, ChefPicture, YearsOfExperience, NumbersOfRecipes , Likes, RecipeId} = recipie.recipie;
    
    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <h1>{ChefName}</h1>
  <img src={ChefPicture} alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">{NumbersOfRecipes}</h2>
    <p>{YearsOfExperience}</p>
    <p>{Likes}</p>
    <div className="card-actions justify-end"><Link to={`/chefsection/${RecipeId}`}>
      <button className="btn btn-primary">View Recipies Button</button></Link>
    </div>
  </div>
</div>
</>
    );
};

export default ChefRecipe;