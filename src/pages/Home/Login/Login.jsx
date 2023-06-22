import React, { useContext, useState } from 'react';
import { GithubAuthProvider, getAuth } from 'firebase/auth';
import { AuthContext } from '../../../providers/AuthProviders';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGithubsignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log('error', error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log('error', error.message);
      });
  };

  const [error, setError] = useState('');

  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError('');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <h2>
        <div className='flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center'>
          <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md'>
            <div className='p-5 bg-white md:flex-1'>
              <h3 className='my-4 text-2xl font-semibold text-gray-700 text-center'>
                Account Login
              </h3>
              <form
                onSubmit={handleLogin}
                action='#'
                className='flex flex-col space-y-5'
              >
                <div className='flex flex-col space-y-1'>
                  <label
                    htmlFor='email'
                    className='text-sm font-semibold text-gray-500'
                  >
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    autoFocus
                    className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                  />
                </div>
                <div className='flex flex-col space-y-1'>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className='text-sm font-semibold text-gray-500'
                    >
                      Password
                    </label>
                    <a
                      href='#'
                      className='text-sm text-blue-600 hover:underline focus:text-blue-800'
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type='password'
                    name='password'
                    required
                    className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                  />
                </div>
                <div className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200'
                  />
                  <label className='text-sm font-semibold text-gray-500'>
                    Remember me
                  </label>
                </div>
                <p> {error}</p>
                <div>
                  <button
                    type='submit'
                    className='w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4'
                  >
                    Log in
                  </button>
                </div>
                <div className='text-center'>
                  <Link className='text-blue-700' to='/register'>
                    New user? Register Here...
                  </Link>
                </div>
                <div className='flex flex-col space-y-5'>
                  <span className='flex items-center justify-center space-x-2'>
                    <span className='h-px bg-gray-400 w-14'></span>
                    <span className='font-normal text-gray-500'>
                      or login with
                    </span>
                    <span className='h-px bg-gray-400 w-14'></span>
                  </span>
                  <div className='flex flex-col space-y-4'>
                    <button
                      onClick={handleGithubsignIn}
                      href='#'
                      className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none'
                    >
                      <span></span>
                      <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                        Github
                      </span>
                    </button>
                    <button
                      onClick={handleGoogleSignIn}
                      href='#'
                      className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none'
                    >
                      <span></span>
                      <span className='text-sm font-medium text-blue-500 group-hover:text-white'>
                        Google
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default Login;
