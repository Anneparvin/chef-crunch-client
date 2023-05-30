import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ChefSectionRecipe = (section) => {
    console.log(section.section)
    const {RecipeId,id, ChefPicture, ChefName, YearsOfExperience, NumbersOfRecipes, Likes, recipeName, Ingredients, cookingMethod, rating} = section.section;
    console.log(ChefPicture)

    const handleFavour = (id)=> {
      toast('My favourite recipe!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    }
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-3 p-4'>
            {/* card 1 */}
            <div className="card w-4/5 mx-auto bg-grey-200 shadow-xl gap-4 rounded-lg mt-4">
            <h1 className='text-2xl font-bold text-center'><span className='underline'>Name:</span> {ChefName}</h1>
  <img src={ChefPicture} alt="Shoes" />
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center"><span className='underline'>NumbersOfRecipes :</span> {NumbersOfRecipes}</h2>
    <p className="text-2xl font-bold text-center"><span className='underline'>YearsOfExperience :</span> {YearsOfExperience}</p>
    <p className="text-2xl font-bold text-center"><span className='underline'>Likes: </span>{Likes}</p>
    {/* <div className="card-actions justify-center"><Link to={`/chefsection/${RecipeId}`}>
      <button className="btn btn-primary btn-wide">View Recipies Button</button></Link>
    </div> */}
  </div>
</div>
{/* card 2 */}
<div className="card w-4/5 mx-auto bg-grey-200 shadow-xl gap-4 rounded-lg mt-4">
            <h1 className='text-2xl font-bold text-center'><span className='underline'>recipeName:</span> {recipeName}</h1>
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center"><span className='underline'>Ingredients: </span>{Ingredients}</h2>
    <p className="text-2xl font-bold text-center"><span className='underline'>cookingMethod: </span> {cookingMethod}</p>
    <p className="text-2xl font-bold text-center"><span className='underline'>rating: </span>  {rating}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleFavour(id)} className="btn btn-primary btn-wide">Favourite Button</button>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default ChefSectionRecipe;