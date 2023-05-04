import React, { useState } from 'react'
import { useRouter } from 'next/router'

import firebase from 'firebase/app';
import 'firebase/auth';



import { useAuth } from '../context/AuthContext';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from 'next/link';
import { auth } from '@/config/firebase';
import Header from '@/Components/Header/Header';

const Signup = () => {
    const router = useRouter()
    const { user, signup, } = useAuth()
    console.log(user)
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleSignup = async (e: any) => {
        e.preventDefault()

        try {
            await signup(data.email, data.password)
            router.push('/');
        } catch (err) {
            console.log(err)
        }

    }

    const googleAuth = new GoogleAuthProvider();
    const google = async () => {
        const result = await signInWithPopup(auth, googleAuth)
        router.push('/')
    }

    const facebookAuth = new FacebookAuthProvider();
    const facebook = async () => {
        const result = await signInWithPopup(auth, facebookAuth)
        router.push('/')
    }





    return (
        <div>

            <Header></Header>

            <div className='flex justify-center items-center pt-8 mb-20'>

                <div className='lg:grid grid-cols-2 gap-10 items-center  rounded-xl'>
                    <div className='img hidden lg:block'>
                        <img src="https://i.pinimg.com/originals/02/fc/da/02fcda11cbfb2a84537f9d059b4c81b2.gif" alt="" />
                    </div>
                    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-orange-400'>
                        <div className='mb-8 text-center'>
                            <h1 className='my-3 text-4xl font-bold'>Register</h1>
                            <p className='text-sm text-gray-400'>Create a new account</p>
                        </div>
                        <form onSubmit={handleSignup}>



                            <div className='space-y-4'>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Enter Your Name Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Email address
                                    </label>
                                    <input onChange={(e: any) =>
                                        setData({
                                            ...data,
                                            email: e.target.value,
                                        })
                                    }
                                        value={data.email}
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='Enter Your Email Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <div className='flex justify-between mb-2'>
                                        <label htmlFor='password' className='text-sm'>
                                            Password
                                        </label>
                                    </div>
                                    <input onChange={(e: any) =>
                                        setData({
                                            ...data,
                                            password: e.target.value,
                                        })
                                    }
                                        value={data.password}
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='*******'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 bg-white focus:border-gray-900 text-gray-900'
                                    />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div>
                                    <button
                                        type='submit'
                                        className='w-full px-8 py-3 font-semibold rounded-md bg-blue-500 hover:bg-orange-500 hover:text-white text-gray-100'
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Signup with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <div className='flex justify-center space-x-4'>
                            <button
                                onClick={google}
                                aria-label='Log in with Google'
                                className='p-3 rounded-sm'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 32 32'
                                    className='w-5 h-5 fill-current'
                                >
                                    <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                                </svg>
                            </button>
                            <button
                                onClick={facebook}
                                aria-label='Log in with Twitter' className='p-3 rounded-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                </svg>
                            </button>

                        </div>
                        <p className='px-6 text-sm text-center text-gray-400'>
                            Already have an account yet?{' '}
                            {/* <Link to='/login' className='hover:underline text-gray-600'>
  Sign In
</Link> */}
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;