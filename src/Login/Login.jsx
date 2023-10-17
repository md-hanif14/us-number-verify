import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../public/login.svg'
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

    const navigateTo = useNavigate();

    const { signIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (result.user) {
                    navigateTo('/user');
                }
                
            })
            .catch(error => console.log(error))


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left mr-12">
                        <img src={img}  alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-warning" type="submit" value="Login" />
                                  <div className='flex justify-between'>
                                  <Link to='/signUp'> <input className="btn btn-warning mt-5" type="submit" value="Sign Up" /></Link>
                                   <Link> <input className="btn btn-warning mt-5" type="submit" value="Visit Site" /></Link>
                                  </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;