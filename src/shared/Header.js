import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvier/AuthProvider';

const Header = () => {
    const {user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className='bg-violet-300 py-2'>
           <div className='flex justify-between items-center w-9/12 mx-auto'>
            <div>
                <h2>JUNIOR HERO</h2> 
            </div>
               <div> 
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/courses'>Courses</NavLink>
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/faq'>FAQ</NavLink>
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/blog'>Blog</NavLink>
                   {
                    user && user?.uid ? 
                    <>
                   <span> {user.displayName}</span>
                    <button className='btn-outline font-bold font-mono text-xl rounded'>SignOut</button>
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