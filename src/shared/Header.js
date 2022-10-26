import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                    <NavLink style={{padding:'5px 10px', borderRadius:'5px'}} className={({isActive}) => isActive ? 'bg-red-500' : undefined }  to='/login'>LogIn</NavLink>
               </div>
           </div>
        </div>
    );
};

export default Header;