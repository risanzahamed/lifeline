import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';

const donate = () => {
    return (
        <div>
            <Header></Header>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="max-w-2xl  mx-auto text-center">
                    <h2 className="text-[24px] lg:text-[36px] font-bold leading-tight  text-black ">Make a Donation</h2>
                    <p className="max-w-xl mx-auto mt-4 lg:text-2xl  leading-relaxed text-gray-600">Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.</p>
                </div>

                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div className="overflow-hidden bg-white rounded-md shadow-md">

                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <form action="#" method="POST">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> First & Last name </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>

                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Enter your full name"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            />
                                        </div>
                                    </div>


                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Your Phone Number </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>

                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Enter your full name"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            />
                                        </div>
                                    </div>


                                    <div className="flex justify-between">
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text mr-10">Paypal</span>
                                                <input type="radio" name="radio-10" className="radio checked:bg-[#F26A02]" checked />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text mr-10">Stripe</span>
                                                <input type="radio" name="radio-10" className="radio checked:bg-[#F26A02]" checked />
                                            </label>
                                        </div>

                                    </div>




                                    <div className="flex justify-around">


                                        <div ><button className="btn checked:bg-blue-500 lg:px-8 hover:border-0 hover:bg-[#F26A02] lg:py-4 mr-1 btn-outline">$10.00</button></div>
                                        <div ><button className="btn lg:px-8 hover:border-0 hover:bg-[#F26A02] lg:py-4 mr-1 btn-outline">$20.00</button></div>
                                        <div ><button className="btn lg:px-8 hover:border-0 hover:bg-[#F26A02] lg:py-4 mr-1 btn-outline">$35.00</button></div>


                                    </div>
                                    <div className="flex justify-around">


                                        <div ><button className="btn  lg:px-8 hover:border-0 hover:bg-[#F26A02] lg:py-4 mr-1 btn-outline">$100.00</button></div>
                                        <div ><button className="btn lg:px-8 hover:border-0 hover:bg-[#F26A02] lg:py-4 mr-1 btn-outline">$250.00</button></div>
                                        <div ><button className="btn lg:px-8 hover:border-0 hover:bg-[#F26A02] lg:py-4 mr-1 btn-outline">Custom</button></div>


                                    </div>




                                    <div className="flex items-center">
                                        <input type="checkbox" name="agree" id="agree" className="w-5 h-5 text-green-500 bg-white border-gray-200 rounded" checked />

                                        <label htmlFor="agree" className="ml-3 text-sm font-medium text-gray-500">
                                            I agree to Postcraft’s <a href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and <a href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn lg:px-12 lg:py-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 border-0 text-white hover:text-black hover:bg-[#dee0e3] bg-[#F26A02]">
                                            Donate Now
                                        </button>
                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default donate;