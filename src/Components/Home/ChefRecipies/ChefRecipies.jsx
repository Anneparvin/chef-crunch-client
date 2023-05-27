import React from 'react';
import CourseTitle from '../../CourseTitle/CourseTitle';
import { useLoaderData } from 'react-router-dom';
import ChefRecipe from './ChefRecipe';


const ChefRecipies = () => {
   const recipies = useLoaderData();
   console.log(recipies);

    CourseTitle('ChefRecipies');


    return (
       <div className='grid grid-cols-1 sm:grid-cols-2'>
        <h1 className='text-4xl font-bold text-center underline'>Introduction with BD Chef</h1>
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