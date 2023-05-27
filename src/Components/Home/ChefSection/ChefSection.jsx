import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefSectionRecipe from './ChefSectionRecipe';


const ChefSection = () => {
    const chefsections = useLoaderData();
    console.log(chefsections);

    const [recipies, setRecipies] = useState([]);

    return (
        <div>
            {
                recipies.map(recipie =><ChefSectionRecipe
                key = {chefsection.id}
                recipie = {recipie}
                ></ChefSectionRecipe> )
            }
            
        </div>
    );
};

export default ChefSection;