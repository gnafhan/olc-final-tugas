/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/quotes
import React, { useEffect } from "react"
// import classNames from 'classnames'
import Accordion from './Accordion'
import { getFolder, getNotes } from '../utils/getNote'
import { useQuery } from 'react-query'
// import { useQuery } from 'react-query'
// import { getFolder } from '../utils/getNote'
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props = {
  children: React.ReactNode
  passData?: any
  passData2?: any
}

// console.log(folders.data?.data.data)
// const sidebarDatas = folders.data?.data.data

const Sidebar: React.FC<Props> = ({ children, passData, passData2 }) => {
  const [folderId, setFolderId] = React.useState('VOzBXZz6cWIp7Cs3ZFre')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [folderName, setFolderName] = React.useState('' as string)
  const folders = useQuery('folders', getFolder)
  const notes = useQuery({
    queryKey: ['notes', folderId],
    queryFn: async () => await getNotes(folderId)
  })
  const handlePass = (data: any, id: any) => {
    setFolderName(data)
    setFolderId(id)
    console.log('foldername', data, id)
  }

  const handlePass2 = (title: any, description: any, note: any, id: string) => {
    console.log('note : ', title, description, note)
    passData2(title, description, note, id)
  }

  useEffect(() => {
    if (passData && !folders.isLoading) {
      if (folders.data?.data.data.length === 0) {
        window.location.href = '/'
      }
      console.log('passdata', folders.data?.data.data[0].name)
      passData(folderName, folderId)
    }
  }, [folderId, folderName])

  return (
    <>
      <div className="flex">
        <div className=" w-[400px] hidden lg:block flex-col h-[100vh] fixed m border-r-2">
        <div className="container px-10 pt-14">
            <p className="font-bold text-3xl mb-4">Notes</p>
          <Accordion arrayChildren={folders} passData={handlePass} />
        </div>
        <div className="container px-10 pt-5">
          <Accordion arrayChildren={notes} folderName={folderName} passData2={handlePass2} folderId={folderId} />
        </div>
        </div>
        <div className="ml-[400px] flex-1">{children}</div>
      </div>
    </>
  )
}

export default Sidebar
