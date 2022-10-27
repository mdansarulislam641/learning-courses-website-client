import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvier/AuthProvider';

const Register = () => {
    const GoogleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()
    const {user,createNewUser,handleGoogleSignIn,githubLogin,handleUpdateUserProfile} = useContext(AuthContext);
    const [userInfo , setUserInfo] = useState({
        name:"",
        pictureURL:"",
        email:"",
        password:""
    })
    const [userError, setUserError] = useState({
        email:"",
        password:""
    });
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleLogIn = ()=>{
        handleGoogleSignIn(GoogleProvider)
        .then(result=>{
            navigate('/')
        })
        .catch(e=>{})
    }
       // github login
       const handleGithubLogIn = () =>{
        githubLogin(GithubProvider)
        .then(result=>{
            toast.success("successfully login")
            navigate(from , {replace:true});
            navigate('/')
        })
        .catch(e=>{})
    }
    const handleRegister = e =>{
        e.preventDefault();
        createNewUser(userInfo.email,userInfo.password)
        .then(result=>{
            handleUserProfile(userInfo.name,userInfo.pictureURL)
            navigate(from, {replace:true})
            navigate('/');
            toast.success("successfully Register")

        })  
        .catch(error=>{
            toast.error(error.message)
            setError(error.message)
        })
    }

    const handleName = e =>{
        const name = e.target.value ;
        setUserInfo({...userInfo, name:name})
    }
    console.log(userInfo.name)
    const handleImage = e =>{
        const pictureURL = e.target.value ;
        setUserInfo({...userInfo, pictureURL:pictureURL})
    }

    const handleUserProfile = (name,photo) =>{
        const profile = {displayName:name,photoURL:photo}
        handleUpdateUserProfile(profile)
        .then(()=>{
            toast.success("added user name and picture")
        })
        .catch((e)=>{
            toast.error(e.message)
        })
    }

    const handleEmail = e =>{
        const email = e.target.value ;
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
        if(!/(?=.*[A-Z])/.test(password)){
            setUserError({...userError,password:"must be one capital letter"})
            setUserInfo({...userInfo,password:password })
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setUserError({...userError,password:"must be one number"})
            setUserInfo({...userInfo,password:password })
        }
        else if(!/(?=.*[@#$%^&+-])/.test(password)){
            setUserError({...userError,password:"must be one spacial character"})
            setUserInfo({...userInfo,password:password })
        }
        else if(password.length < 6){
            setUserError({...userError,password:"password must be 6 character"})
            setUserInfo({...userInfo,password:password })
        }
        else{
            setUserInfo({...userInfo, password:password})
            setUserError({...userError,password:""})
        }
    }

    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user,navigate])
    // console.log(userInfo.name, userInfo.pictureURL, userInfo.email, userInfo.password)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
              <div  className="card flex-shrink-0 lg-w-[600px] shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} >
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleName} type="text" placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL </span>
                            </label>
                            <input onChange={handleImage} type="text" placeholder="your image url Optional" className="input input-bordered" />
                        </div>
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
                            <input onChange={handlePassword} type="password" placeholder="enter password" className="input input-bordered" required/>
                            <p>{userError.password}</p>
                            <label className="label">
                                <p>{error}</p>
                                <p>Have already an account <Link to='/login' className='text-xl text-red-800 underline'>login now</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
          
               <div className='w-full'>
               <div className="form-control lg:w-[400px] w-[250px] mb-5 mx-auto">
                            <button onClick={handleGoogleLogIn} className="btn btn-primary"><FaGoogle className='text-2xl text-black mr-2'/> Google Register</button>
                        </div>
                        <div className="form-control lg:w-[350px]  w-[250px]  mb-5 mx-auto">
                            <button onClick={handleGithubLogIn} className="btn btn-primary"><FaGithub className='text-2xl text-black mr-2'/> Github Register</button>
                        </div>
               </div>
              </div>
            </div>
        </div>
    );
};

export default Register;