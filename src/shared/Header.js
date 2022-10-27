import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvier/AuthProvider';
import logo from './images.jpg';

const Header = () => {
    const {user,logOutUser } = useContext(AuthContext)
    const [toggle, setToggle] = useState(true)
    // console.log(user)
    const handleSignOut = () =>{
        logOutUser()
        .then(()=>{
            toast.success("successfully logOut")
        })
        .catch(error=>{})
    }
    const handleShow = () =>{
        setToggle(!toggle)
    }
    console.log(toggle)
    return (
        <div className='bg-violet-300 py-2 max-w-full mb-5 sticky top-0 z-10'>
           <div className='flex justify-between items-center max-w-[1300px] mx-auto'>
            <div>
                <Link to='/home'>
                <h2 className='flex items-center text-3xl font-extrabold font-mono'> <img className='w-[50px] rounded-full' src={logo} alt="" /> <span className='text-5xl'>J</span><span className='text-yellow-600'>UNIOR</span><span className='text-blue-800'><span className='text-5xl text-white'>H</span>ERO</span></h2> 
                </Link>
            </div>
            {
               toggle ? <FaBars onClick={handleShow} className='block lg:hidden text-3xl mr-3'/>: <FaTimes onClick={handleShow} className='block lg:hidden text-3xl mr-3'/> 
            }

            {
                toggle ? "" : <div className='toggle-navbar pl-5 text-left text-xl font-bold lg:hidden'> 
                <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/home'>Home</NavLink>
                <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/courses'>Courses</NavLink>
                <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/faq'>FAQ</NavLink>
                <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/blog'>Blog</NavLink>
               {
                user && user?.uid ? 
                <div className=''>
               <span className='ml-5 text-white '> {user.displayName}</span>
                <p>
                {
                   user && user?.photoURL ? <img title={user?.displayName}  className='w-[70px] rounded-full inline-block ml-5' src={user.photoURL} alt="" /> : <img 
                     className='w-[70px] rounded-full inline-block ml-5 tooltip tooltip-open tooltip-bottom' data-tip={user?.displayName} src='https://i.ibb.co/MnGKtKm/download.jpg' alt="" />

                }
                </p>
                <button onClick={handleSignOut} className='btn-outline ml-2 mt-4 font-bold font-mono text-xl rounded'>SignOut</button>
             
                </div> :
                <>
                     <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/register'>Register</NavLink>
                <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/login'>LogIn</NavLink>
                </>
               }
           </div>
            }



               <div className='text-xl font-bold hidden lg:block'> 
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/home'>Home</NavLink>
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/courses'>Courses</NavLink>
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/faq'>FAQ</NavLink>
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/blog'>Blog</NavLink>
                   {
                    user && user?.uid ? 
                    <>
                   <span className='mr-3 text-white'> {user.displayName}</span>
                    <button onClick={handleSignOut} className='btn-outline font-bold font-mono text-xl rounded'>SignOut</button>
                    {
                       user && user?.photoURL ? <img title={user?.displayName}  className='h-[40px] rounded-full inline-block ml-5' src={user.photoURL} alt="" /> : <img 
                         className='h-[40px] rounded-full inline-block ml-5 tooltip tooltip-open tooltip-bottom' data-tip={user?.displayName} src='https://i.ibb.co/MnGKtKm/download.jpg' alt="" />

                    }
                    </> :
                    <>
                         <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/register'>Register</NavLink>
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/login'>LogIn</NavLink>
                    </>
                   }
               </div>
           </div>
        </div>
    );
};

export default Header;