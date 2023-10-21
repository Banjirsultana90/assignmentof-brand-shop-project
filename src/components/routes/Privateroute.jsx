import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <h2 className='text-center text-2xl'>loading</h2>
    }
    if(user){
        return children
    } 
    return <Navigate state={location.pathname} to='/Login'></Navigate>
};


export default Privateroute;