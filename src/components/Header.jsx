import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/provider/AuthProvider';

const Header = () => {
  const {user,logout} = useContext(AuthContext)

  const hendlertologin = () =>{
    logout()
  }
    return (
        <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">auth master</button>
        <Link  className="btn btn-ghost text-xl" to="/">home</Link>
        <Link  className="btn btn-ghost text-xl" to="/login">login</Link>
       {
        user &&  <Link  className="btn btn-ghost text-xl" to="/profile">profile</Link>
       }
        <Link className="btn btn-ghost text-xl"  to="/register">Register</Link>
        <Link className="btn btn-ghost text-xl"  to="/orders">orders</Link>
        {
          user ? <>
          <span>{user.email}</span> <button onClick={hendlertologin} className="btn btn-xs">sine out</button> 
          </>
          : <Link to='/login'>login</Link>
        }
      </div>
        </div>
    );
};

export default Header;