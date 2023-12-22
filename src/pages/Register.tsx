/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { Link } from 'react-router-dom'
import { instanceHeader } from '../utils/axios'
import Cookies from 'js-cookie'

const Register: React.FC = () => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const handleSubmit = async (): Promise<void> => {
    if (password !== confirmPassword) {
      setIsError(true)
      return
    }
    try {
      const res = await instanceHeader.post('/register', {
        username,
        email,
        password,
        firstName: 'ghifari',
        lastName: 'nafhan'
      })
      if (res.status === 200) {
        Cookies.set('token', res.data.token)
        window.location.href = '/home'
      } else {
        setIsError(true)
      }
    } catch (error) {

    }
  }

  return <div>
<html className="h-full">
  <body className="dark:bg-slate-900 bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent flex h-[100vh] items-center py-16">
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <Link className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={'/login'}>
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-5">
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Username</label>
                  <div className="relative">
                    <input onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter username here' id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"/>
                    <div className={`${isError ? '' : 'hidden'} absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className={`${isError ? '' : 'hidden'} text-xs text-red-600 mt-2`} id="email-error">Please include a valid email address so we can get back to you</p>

                <div>                </div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                  <div className="relative">
                    <input onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email here' type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"/>
                    <div className={`${isError ? '' : 'hidden'} absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className={`${isError ? '' : 'hidden'} text-xs text-red-600 mt-2`} id="email-error">Please include a valid email address so we can get back to you</p>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                  <div className="relative">
                    <input onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password here' type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error"/>
                    <div className={`${isError ? '' : 'hidden'} absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className={`${isError ? '' : 'hidden'} text-xs text-red-600 mt-2`} id="password-error">8+ characters required</p>
                </div>

                <div>
                  <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">Confirm Password</label>
                  <div className="relative">
                    <input onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder='Enter password here' type="password" id="confirm-password" name="confirm-password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="confirm-password-error"/>
                    <div className={`${isError ? '' : 'hidden'} absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3`}>
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
                </div>

                <div className="flex items-center">
                  <div className="flex">
                    <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Terms and Conditions</a></label>
                  </div>
                </div>

                <button onClick={handleSubmit} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign up</button>
              </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
  </div>
}

export default Register
