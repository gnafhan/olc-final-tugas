/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getFolder, postFolder } from '../utils/getNote'

const Hero: React.FC = () => {
  const [newFolder, setNewFolder] = React.useState('')
  const folder = useQuery('folder', getFolder)
  if (!folder.isLoading && folder.data?.data.data.length !== 0) {
    window.location.href = '/home'
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFolder(e.target.value)
  }
  const handleClick = async () => {
    const res = await postFolder(newFolder)
    if (res?.status === 200) {
      window.location.href = '/home'
    }
  }
  return <div>
<div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <div className="flex justify-center">
      <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        PRO release - Join to waitlist
        <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </a>
    </div>

    <div className="mt-5 max-w-2xl text-center mx-auto">
      <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray">
        {"Let's take a "}
        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Notes</span>
      </h1>
    </div>

    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-600 dark:text-gray">Effortless Note-Taking: Streamline Your Thoughts with our User-Friendly Note App – Simplify, Organize, and Boost Productivity Anytime, Anywhere</p>
    </div>
    {!folder.isLoading && (<div className="mt-8 gap-3 flex justify-center">
      {folder.data?.data.data.length === 0
        ? <div className='relative w-[50vw]'>
        <input onChange={handleChange} type="text" id="hs-leading-icon" name="hs-leading-icon" className="py-3 px-4 ps-11 block w-full border-inherit border-2 shadow-sm rounded-lg text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none" placeholder="New Folder"/>
         <div className="absolute inset-y-0 start-0 flex items-center cursor-pointer z-20 ps-4">
         <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 items-center hover:h-6 hover:w-6 h-5 w-5 active:text-gray-500 hover:text-gray-900 text-gray-400 dark:text-gray-600">
                          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
         </div>
        </div>

        : <>
      <Link to={'/login'} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-5 dark:focus:ring-offset-gray-800">
        Login
        <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </Link>
      <Link to={'/register'} className=" py-3 px-5 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
          Register
        </Link>
      </>}

    </div>)}

  </div>
</div>
  </div>
}

export default Hero
