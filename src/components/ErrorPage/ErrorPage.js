import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {status,statusText,statusMessage} = useRouteError();
    
    return (
        <div className='flex justify-center h-[100vh] items-center text-center'>
            <h1 className='text-4xl'>OPP'S You are arrive wrong route, <br /> 
                Page  {statusText ? statusText : statusMessage} <br /> {status} <br />
              
            </h1>
        </div>
    );
};

export default ErrorPage;