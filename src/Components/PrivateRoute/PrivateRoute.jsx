import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const PrivateRoute = ({children}) => {
     const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);

    
    if(loading){
        return <span><progress className="progress w-56"></progress></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;

