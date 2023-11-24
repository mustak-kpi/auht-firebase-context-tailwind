import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/provider/AuthProvider';

const Login = () => {
  const {singIn, sineinwithgoogle} = useContext(AuthContext)

    const hendelelogineEmail = event =>{
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password,name)

        singIn(email, password)
        .then(result =>{
          const userlogine = result.user;
          console.log(userlogine)
          from.teste()
        })
    }

    const sinewithHendler = () =>{
      sineinwithgoogle()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hendelelogineEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <p>
                <Link to='/register' className='link link-hover'>please? mange email accounts Register</Link>
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="text-center mt-3">
              <button onClick={sinewithHendler} className="btn btn-primary">google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;