import React, { useState } from 'react';
import { useEffect } from 'react';

const LeftNav = () => {
    const [chefcards, setChefcards] = useState([]);

    useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default LeftNav;