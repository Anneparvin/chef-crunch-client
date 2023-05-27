import React from 'react';
import CourseTitle from '../../CourseTitle/CourseTitle';
import { useLoaderData } from 'react-router-dom';
import ChefRecipe from './ChefRecipe';


const ChefRecipies = () => {
   const recipies = useLoaderData();
   console.log(recipies);

    CourseTitle('ChefRecipies');


    return (
       <div>
        {
            recipies.map(recipie => <ChefRecipe
                key ={recipie.id}
                recipie = {recipie}
            ></ChefRecipe>)
        }
       </div>
    );
};

export default ChefRecipies;