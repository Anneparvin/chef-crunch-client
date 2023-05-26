import React from 'react';
import ActiveLink from '../../ActiveLink/ActiveLink';
import logo1 from '../../../assets/images/banner/logo.jpg';

const Header = () => {
    return (
      <nav>
      <div className="navbar bg-orange-500 rounded-lg">
<div className="navbar-start">
 <div className="dropdown">
   <label tabIndex={0} className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
   <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     <li><ActiveLink to='/'>Home</ActiveLink></li>
     <li tabIndex={0}>
       <ActiveLink to='/featuredjob' id='featuredjob' className="justify-between">
        
       
       </ActiveLink>
     </li>
     <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
   </ul>
 </div>
 <ActiveLink to='/' className="btn btn-ghost font-bold text-2xl"><span className='text-green-400 text-4xl font-bold'>Chef</span><span className='text-amber-400 font-bold text-3xl'>Krunch</span></ActiveLink>
 <img className='lg:w-16 w-0 rounded-full ml-4' src={logo1} alt='' />
</div>
<div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal px-1">
   <li><ActiveLink to='/statistics' className='font-bold'>Statistics</ActiveLink></li>
   <li tabIndex={0}>
     <ActiveLink to='/featuredjob' className='font-bold'>
       Applied jobs
     </ActiveLink>
     
   </li>
   <li><ActiveLink to='/blog' className='font-bold'>Blog</ActiveLink></li>
 </ul>
</div>

</div>
    </nav>
    );
};

export default Header;