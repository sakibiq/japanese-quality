import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Banner = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className=' text-center  gap-10 mb-10 '>
        <div>
          {(user && (
            <p className='font-Stylish text-lg'> Hello {user.email} </p>
          )) || (
            <button>
              <Link
                className='bg-orange-600 hover:bg-orange-500 ml-3 py-3 px-8 rounded-full text-orange-100 transition duration-500'
                to='/login'
              >
                Login
              </Link>
            </button>
          )}
        </div>

        <div className='mb-5 text-lg font-bold font-Stylish uppercase mr-10'>
          {user && (
            <span>
              <br />
              <button className='ml-10' onClick={handleLogout}>
                <Link
                  className='bg-orange-600 hover:bg-orange-500 py-3 px-20 rounded-full text-orange-100 transition duration-500'
                  to='/'
                >
                  Logout
                </Link>
              </button>
            </span>
          )}
        </div>
      </div>

      <div className='flex justify-center'>
        <div
          className='hero min-h-screen mx-10'
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
          }}
        >
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-md'>
              <h1 className='text-7xl pb-8'>こんにちは</h1>
              <p className='mb-5 font-Stylish text-3xl'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
