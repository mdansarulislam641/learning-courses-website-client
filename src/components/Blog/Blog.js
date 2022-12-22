import React from 'react';

const Blog = () => {
    return (
        <div className=' mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto'>
           <div className='mb-5  rounded bg-violet-300 p-10 text-center mx-auto'>
            <h2 className='text-3xl font-bold'>What Is Cors</h2>
            <p className='text-xl'>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
           </div>
           <div className='mb-5 rounded bg-violet-300 p-10 text-center  mx-auto'>
            <h2 className='text-3xl font-bold'>Why we using firebase  and what other option without firebase?</h2>
            <p className='text-xl'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
            <p className='text-3xl'>without firebase</p>
            <h3 className='text-xl font-bold'>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</h3>
           </div>
           <div className='mb-5 rounded bg-violet-300 p-10 text-center mx-auto'>
            <h3 className="text-3xl font-bold">What does work private route</h3>
            <p className="text-xl">
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
            </p>
           </div>
           <div className='mb-5 rounded bg-violet-300 p-10 text-center  mx-auto'>
            <h3 className="text-3xl font-bold">
                What is node and How does work Node
            </h3>
            <p className="text-xl">
            Node.js is an open source server environment
            Node.js is free
            Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
            Node.js uses JavaScript on the server,,

It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
           </div>
        </div>
    );
};

export default Blog;