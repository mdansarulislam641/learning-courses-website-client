import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvier/AuthProvider';

const Header = () => {
    const {user,logOutUser } = useContext(AuthContext)
    // console.log(user)
    const handleSignOut = () =>{
        logOutUser()
        .then(()=>{})
        .catch(error=>{})
    }
    return (
        <div className='bg-violet-300 py-2'>
           <div className='flex justify-between items-center w-9/12 mx-auto'>
            <div>
                <Link to='/home'>
                <h2 className='text-3xl font-extrabold font-mono'><span className='text-5xl'>J</span><span className='text-yellow-600'>UNIOR</span><span className='text-blue-800'><span className='text-5xl text-white'>H</span>ERO</span></h2> 
                </Link>
            </div>
               <div className='text-xl font-bold'> 
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
                        title={user?.displayName} className='h-[40px] rounded-full inline-block ml-5' src='https://i.ibb.co/MnGKtKm/download.jpg' alt="" />

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