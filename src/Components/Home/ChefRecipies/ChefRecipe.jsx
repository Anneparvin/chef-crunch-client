import React from 'react';
import { Link } from 'react-router-dom';


const ChefRecipe = (recipie) => {
    //  console.log(recipie.recipie)
    const {ChefName, ChefPicture, YearsOfExperience, NumbersOfRecipes , Likes, RecipeId} = recipie.recipie;
    
    return (
        <>
        
        <div className="card w-3/5 mx-auto bg-grey-200 shadow-xl gap-4 rounded-lg mt-4">
            <h1 className='text-2xl font-bold text-center'>Name: {ChefName}</h1>
  <img src={ChefPicture} alt="Shoes" />
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">NumbersOfRecipes: {NumbersOfRecipes}</h2>
    <p className="text-2xl font-bold text-center">YearsOfExperience: {YearsOfExperience}</p>
    <p className="text-2xl font-bold text-center">Likes: {Likes}</p>
    {/* <p className="text-2xl font-bold text-center">RecipeId: {RecipeId}</p> */}
    <div className="card-actions justify-center"><Link to={`/chefsection/${RecipeId}`}>
      <button className="btn btn-primary btn-wide">View Recipies Button</button></Link>
    </div>
  </div>
</div>
</>
    );
};

export default ChefRecipe;