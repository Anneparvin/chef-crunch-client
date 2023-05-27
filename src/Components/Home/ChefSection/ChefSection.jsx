import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefSectionRecipe from './ChefSectionRecipe';


const ChefSection = () => {
    const chefsections = useLoaderData();
    console.log(chefsections);

    return (
        <div>
            {
                chefsections.map(chefsection =><ChefSectionRecipe
                key = {chefsection.RecipeId}
                chefsection = {chefsection}
                ></ChefSectionRecipe> )
            }
            
        </div>
    );
};

export default ChefSection;