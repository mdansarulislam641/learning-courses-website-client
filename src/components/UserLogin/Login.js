import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvier/AuthProvider';


const Login = () => {
    const GoogleProvider = new GoogleAuthProvider()
    const {loginWithEmailPassword,handleGoogleSignIn} = useContext(AuthContext)
    const [userInfo , setUserInfo] = useState({
        email:"",
        password:""
    })
    const [userError,setUserError] = useState({
        email:"",
        password:""
    })
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogIn = () =>{
        handleGoogleSignIn(GoogleProvider)
        .then(result=>{
            navigate(from , {replace:true});
            // navigate('/')
        })
        .catch(e=>{})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        loginWithEmailPassword(userInfo.email, userInfo.password)
        .then(result=>{
            navigate(from , {replace:true});
        })
        .catch(error=>{

        })
    }
const handleEmail = e =>{
    const email = e.target.value
    if(!/\S+@\S+\.\S+/.test(email)){
        setUserError({...userError, email:'your email is not correct'})
        setUserInfo({...userInfo,email:email })
    }
    else{
        setUserInfo({...userInfo,email:email })
        setUserError({...userError, email:''})
    }
}
const handlePassword = e =>{
    const password = e.target.value ;
    setUserInfo({...userInfo, password:password})
}
 console.log(userInfo.email, userInfo.password)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
              <div  className="card flex-shrink-0 w-[600px] max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} >
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleEmail} type="email" placeholder="your email" className="input input-bordered" required />
                        </div>
                       {userError.email && <p className='text-red-800'>{userError.email}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handlePassword} type="password" placeholder="enter password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p >You haven't account Please <Link to='/register' className=" text-xl text-red-800 underline">Register now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
                <div className="form-control w-[320px] mb-5 mx-auto">
                            <button onClick={handleGoogleLogIn} className="btn btn-primary"><FaGoogle className='text-2xl text-black mr-2'/> Google Login</button>
                        </div>
              </div>
            </div>
        </div>
    );
};

export default Login;