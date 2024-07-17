"use client";

import { useState } from "react";

export default function Login() {
  
  const [showPassword,setShowPassword] = useState(false)


  return (
    <>
      <div className="grid grid-cols-12 justify-center ">
      <div className="lg:col-span-4 lg:col-start-5 p-5 rounded-2xl border-4 border-slate-400 mt-8 sm:col-span-6 sm:col-start-4 md:col-span-6 md:col-start-4">
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Login
          </h1>
          <h5 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome back to ECOMMERCE
          </h5>
          <p className="text-center text-lg leading-9 tracking-tight text-gray-900">
          The next gen business marketplace
          </p>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  /> 
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="Enter"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  /><button
                  type="button"
                  className="text-black dark:text-white z-10"
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="m-10 text-center text-sm text-gray-500">
            Don’t have an Account? {' '}
              <a href="/signup  " className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}