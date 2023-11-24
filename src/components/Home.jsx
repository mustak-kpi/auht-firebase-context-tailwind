import React, { useContext } from 'react';
import { AuthContext } from '../assets/provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>this is home{user && <span>{user}</span>}</h1>
        </div>
    );
};

export default Home;