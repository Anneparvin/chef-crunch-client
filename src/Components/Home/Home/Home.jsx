import React from 'react';
import pic1 from '../../../assets/images/banner/food.jpg';
import pic2 from '../../../assets/images/banner/spices.jpg';
import pic3 from '../../../assets/images/banner/vegetables.jpg';
import pic4 from '../../../assets/images/banner/fruit-.jpg';


const Home = () => {
    return (
        // carousel here
       <div>
        <div className="carousel w-full rounded-lg">

  <div id="item1" className="carousel-item w-full">
    <img src={pic1} className="w-3/5 sm:w-full h-96 sm:h-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={pic2} className="w-3/5 sm:w-full h-96 sm:h-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={pic3} className="w-3/5 sm:w-full h-96 sm:h-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={pic4} className="w-3/5 sm:w-full h-96 sm:h-full" />
  </div>
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
 
</div>
<div className='text-center'><button className='bg-yellow-800 p-4 btn-wide text-white font-bold rounded-md mb-4'>Chef Introduction</button></div>
       </div>
    );
};

export default Home;