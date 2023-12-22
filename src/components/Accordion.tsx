/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/quotes
import React, { useEffect, useState } from "react"
import classNames from 'classnames'
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
// import { sidebarData } from '../utils/data'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { deleteFolder, postFolder, postNote } from '../utils/getNote'

interface Props {
  arrayChildren: any,
  passData?: any,
  folderName?: string,
  passData2?: any,
  folderId?: string
}

const Accordion: React.FC<Props> = ({ arrayChildren, passData, folderName, passData2, folderId }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddFolder, setIsAddFolder] = useState(false)
  const [isActive, setIsActive] = useState(0)
  const { mutate } = useMutation(postFolder)
  const [newFolder, setNewFolder] = useState('')
  const navigator = useNavigate()

  const handleAddFolder = () => {
    setIsAddFolder(!isAddFolder)
  }

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFolder(e.target.value)
  }

  const handeNewFolder = async () => {
    if (folderId) {
      await postNote(folderId)
      window.location.reload()
    } else {
      mutate(newFolder)
      window.location.reload()
    }
  }

  const handleDeleteFolder = async () => {
    await deleteFolder(arrayChildren.data?.data.data[isActive].id)
    window.location.reload()
  }

  useEffect(() => {
    if (passData && arrayChildren.isLoading === false) {
      if (folders.data?.data.data.length === 0) {
        window.location.href = '/'
      }
      console.log('passdata', arrayChildren.data?.data.data[isActive].name ?? arrayChildren.data?.data.data[isActive].title)
      passData(arrayChildren.data?.data.data[isActive].name ?? arrayChildren.data?.data.data[isActive].title, arrayChildren.data?.data.data[isActive].id)
    }
  }, [isActive, arrayChildren.isLoading])
  useEffect(() => {
    if (passData2 && arrayChildren.isLoading === false) {
      if (folders.data?.data.data.length === 0) {
        // window.location.href = '/'
      } else {
        console.log('passdata2', arrayChildren.data?.data.data[isActive].name ?? arrayChildren.data?.data.data[isActive].title)
        passData2(arrayChildren.data?.data.data[isActive].title ?? arrayChildren.data?.data.data[isActive].title, arrayChildren.data?.data.data[isActive].description, arrayChildren.data?.data.data[isActive].note, arrayChildren.data?.data.data[isActive].id)
      }
    }
  }, [isActive, arrayChildren.isLoading])
  const folders = arrayChildren
  const sidebarDatas = folders.data?.data.data
  if (folders.isLoading || folders === undefined) {
    return (<>
    <div className="skeleton w-full h-7 mb-4" ></div>
    <div className="skeleton w-full h-7 mb-4" ></div>
    <div className="skeleton w-full h-7 mb-4" ></div>
    <div className="skeleton w-full h-7 mb-4" ></div>
    <div className="skeleton w-full h-7 mb-4" ></div>
    <div className="skeleton w-full h-7 mb-4" ></div>
    <div className="skeleton w-full h-7" ></div>
    </>)
  } else if (folders.isError) {
    navigator('/login')
  } else {
    return (
      <>
              <div className="flex justify-between collapse collapse-arrow mb-4">
                <p className="text-[16px] text-[#242424]">{folderName ?? 'Folders'}</p>
                <div className="flex flex-row gap-1">
                  <svg
                    onClick={handleAddFolder}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={classNames('w-5 h-5 items-center cursor-pointer', {
                      'text-gray-400': isAddFolder,
                      'text-gray-900': !isAddFolder,
                      hidden: isCollapsed
                    })}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <label className="swap swap-rotate">
                    <input type="checkbox" />
                    <svg
                      onClick={handleCollapse}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 swap-on"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                    <svg
                      onClick={handleCollapse}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 swap-off"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              {
                <>
                  <div
                    className={classNames('transition-all duration-500', {
                      'max-h-0 opacity-0 overflow-hidden': isCollapsed,
                      'max-h-screen opacity-100 overflow-auto': !isCollapsed
                    })}
                  >
                      {sidebarDatas.map((item: {
                        title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined, name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined
                      }, index: any) => {
                        if (index === isActive) {
                          return (<>
                               <div key={index} className="p-[10px] bg-base-200 rounded-lg flex flex-row gap-1 justify-between items-center">
                      <p className="text-lg">{item.name ?? item.title}</p>
                      <div className="flex flex-row gap-1 justify-between items-center">

                      <svg onClick={handleDeleteFolder} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="w-5 h-5 fill-gray-600 hover:fill-slate-900 active:fill-gray-500 cursor-pointer ">
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                      </svg>
                      </div>

                    </div>
                              </>)
                        }
                        return (<>
                   <div
                   key={index}
                      onClick={() => { setIsActive(index) }}
                      className="p-[10px] hover:bg-base-200 active:bg-base-300 rounded-lg"
                      role="button"
                    >
                      <p className="text-lg">{item.name ?? item.title}</p>
                    </div>
                          </>)
                      })}
                       <div className={classNames('relative transition-all duration-500', {
                         'max-h-0 opacity-0 overflow-hidden': !isAddFolder,
                         'max-h-screen opacity-100 overflow-auto': isAddFolder
                       })} id="hs-leading-icon-wrapper">
                        <input onChange={handleChange} type="text" id="hs-leading-icon" name="hs-leading-icon" className="py-3 px-4 ps-11 block w-full border-inherit border-2 shadow-sm rounded-lg text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none" placeholder="New Folder"/>
                        <div className="absolute inset-y-0 start-0 flex items-center cursor-pointer z-20 ps-4">
                        <svg onClick={handeNewFolder} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 items-center hover:h-6 hover:w-6 h-5 w-5 active:text-gray-500 hover:text-gray-900 text-gray-400 dark:text-gray-600">
                          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>

                        </div>
                      </div>
                  </div>
                </>
              }
      </>
    )
  }
}

export default Accordion
