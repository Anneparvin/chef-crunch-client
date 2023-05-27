import React from 'react';
import img from '../../assets/images/banner/flat-404.avif';

const Error = () => {
    return (
        <div className='md:max-w-screen-2xl mx-auto sm:w-full p-2'>
            <img src={img} alt='404'/>
        </div>
    );
};

export default Error;