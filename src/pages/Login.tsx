/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
// import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { instanceHeader } from '../utils/axios'
import Cookies from 'js-cookie'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const fetchLogin = async (): Promise<unknown> => {
    try {
      const res = await instanceHeader.post('/login', {
        username: email,
        password
      })
      return res.data
    } catch (error) {
      console.error(error)
      setIsError(true)
    }
  }

  const handleLogin = async (): Promise<void> => {
    try {
      const res: any = await fetchLogin()
      Cookies.set('token', res.token)
      window.location.href = '/home'
      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  return (<>
 <html className="h-full">
  <body className="dark:bg-slate-900 bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent flex h-[100vh] items-center py-16">
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {"Don't have an account yet?"}
              <Link className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={'/register'}>
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">

              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm mb-2 dark:text-white">Username</label>
                  <div className="relative">
                    <input onChange={handleEmail} placeholder='Enter your username here' type="username" id="username" name="username" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"/>
                    <div className={`${isError ? '' : 'hidden'} absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className={`${isError ? '' : 'hidden'} text-xs text-red-600 mt-2`} id="username-error">Username or password invalid</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                  </div>
                  <div className="relative">
                    <input onChange={handlePassword} placeholder='Enter your password here' type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error"/>
                    <div className={`${isError ? '' : 'hidden'} absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className={`${isError ? '' : 'hidden'} text-xs text-red-600 mt-2" id="password-error`}>Username or password invalid</p>
                </div>

                <div className="flex items-center">
                  <div className="flex">
                    <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                  </div>
                </div>

                <button onClick={handleLogin} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign in</button>
              </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
  </>)
}

export default Login
