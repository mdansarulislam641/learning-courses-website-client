import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvier/AuthProvider';

const Register = () => {
    const {createNewUser} = useContext(AuthContext);
    const [userInfo , setUserInfo] = useState({
        name:"",
        pictureURL:"",
        email:"",
        password:""
    })
    const handleRegister = e =>{
        e.preventDefault();
        createNewUser(userInfo.email,userInfo.password)
        .then(result=>{
            console.log(result.user)
        })  
        .catch(error=>{

        })
    }

    const handleName = e =>{
        const name = e.target.value ;
        setUserInfo({...userInfo, name:name})
    }
    const handleImage = e =>{
        const pictureURL = e.target.value ;
        setUserInfo({...userInfo, pictureURL:pictureURL})
    }
    const handleEmail = e =>{
        const email = e.target.value ;
        setUserInfo({...userInfo, email:email})
    }
    const handlePassword = e =>{
        const password = e.target.value ;
        setUserInfo({...userInfo, password:password})
    }
    console.log(userInfo.name, userInfo.pictureURL, userInfo.email, userInfo.password)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <form onSubmit={handleRegister}  className="card flex-shrink-0 w-[600px] max-w-sm shadow-2xl bg-base-100">
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
                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handlePassword} type="password" placeholder="enter password" className="input input-bordered" required/>
                            <label className="label">
                                <p>Have already an account <Link to='/login' className='text-xl text-red-800 underline'>login now</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;