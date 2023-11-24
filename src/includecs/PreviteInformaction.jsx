import React, { useContext } from 'react';
import { AuthContext } from '../assets/provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PreviteInformaction = ({children}) => {
    const {user, loding } = useContext(AuthContext)
    if (loding){
        return <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
    }
if(user){
    return children
}

return <Navigate to="/login"></Navigate>

};

export default PreviteInformaction;