import React from 'react';

const ChefSectionRecipe = (recipie) => {
    console.log(recipie)
    const {RecipeId, id, ChefPicture, ChefName, YearsOfExperience, NumbersOfRecipes, Likes, recipeName, Ingredients, cookingMethod, rating} = recipie;
    return (
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-3 p-4'>
            {/* card 1 */}
            <div className="card w-2/5 mx-auto bg-grey-200 shadow-xl gap-4 rounded-lg mt-4">
            <h1 className='text-2xl font-bold text-center'>Name: {ChefName}</h1>
  <img src={ChefPicture} alt="Shoes" />
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">NumbersOfRecipes: {NumbersOfRecipes}</h2>
    <p className="text-2xl font-bold text-center">YearsOfExperience: {YearsOfExperience}</p>
    <p className="text-2xl font-bold text-center">Likes: {Likes}</p>
    <p className="text-2xl font-bold text-center">RecipeId: {RecipeId}</p>
    <div className="card-actions justify-center"><Link to={`/chefsection/${id}`}>
      <button className="btn btn-primary btn-wide">View Recipies Button</button></Link>
    </div>
  </div>
</div>
{/* card 2 */}
<div className="card w-2/5 mx-auto bg-grey-200 shadow-xl gap-4 rounded-lg mt-4">
            <h1 className='text-2xl font-bold text-center'>RecipeName: {recipeName}</h1>
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">Ingredients: {Ingredients}</h2>
    <p className="text-2xl font-bold text-center">cookingMethod: {cookingMethod}</p>
    <p className="text-2xl font-bold text-center">rating: {rating}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary btn-wide">Favourite Button</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefSectionRecipe;