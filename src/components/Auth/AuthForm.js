import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const ShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAa5WIwbYunig-hzWdMF7L1GShOrx4_xcY';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAa5WIwbYunig-hzWdMF7L1GShOrx4_xcY';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      Headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   // errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className=' p-[1.2rem] rounded-[10px] w-[33rem]'>
        <h2 className='text-3xl font-bold mb-5 text-gray-800'>
          Get’s started.
        </h2>
        <h6 className='text-lg font-normal mb-10 text-[#7C7C8D]'>
          Don’t have an account?{' '}
          {
            <button
              type='button'
              className='text-[#A162F7] hover:text-[#7b25f4]'
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          }
        </h6>

        <form onSubmit={submitHandler} className='space-y-5'>
          <div className='bg-white p-4 rounded-[10px]'>
            <div className='mr-6'>
              <label className='block mb-1 font-medium text-base text-gray-500'>
                Email
              </label>
              <input
                type='email'
                ref={emailInputRef}
                placeholder='uistore@gmail.com'
                className='w-full border-2  border-gray-200 p-3 rounded-[10px] outline-none focus:border-purple-500'
              />
            </div>
            <div>
              <div className='mr-6 mt-[20px]'>
                <label className='block mb-1 font-medium text-gray-500'>
                  Password
                </label>

                <input
                  type={showPassword ? 'password' : 'text'}
                  required
                  placeholder='**********'
                  ref={passwordInputRef}
                  className='w-full border-2 border-gray-200 p-3 rounded-[10px] outline-none focus:border-purple-500'
                />

                <label
                  className={
                    showPassword
                      ? 'svg-icon-pass svg-icon-show'
                      : 'svg-icon-pass svg-icon-hide'
                  }
                  onClick={ShowPassword}
                />
              </div>
            </div>
          </div>
          <div className='flex items-center mt-[20px]'>
            <input type='checkbox' id='agree' required />
            <label className='ml-2 w-2/5 text-[#B1B5C4] font-medium text-base not-italic'>
              Remember me
            </label>
            <div className='w-2/3 text-right text-[#A162F7] hover:text-[#7b25f4]'>
              {<Link to='#'>Forgot your password?</Link>}
            </div>
          </div>

          <button className='block w-full bg-[#A162F7] hover:bg-[#7b25f4] p-4 rounded text-white hover:text-white transition duration-300'>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
          {isLoading && <p>Sending request....</p>}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
