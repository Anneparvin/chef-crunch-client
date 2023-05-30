import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefSectionRecipe from './ChefSectionRecipe';


const ChefSection = () => {
    const sections = useLoaderData();
    console.log(sections);

   

    return (
        <div>
            {
                sections.length &&
                sections.map(section =><ChefSectionRecipe
                key = {section.RecipeId}
                section = {section}
                ></ChefSectionRecipe> )
            }
            
        </div>
    );
};

export default ChefSection;