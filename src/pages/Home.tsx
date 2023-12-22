/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/quotes
import React, { useState } from "react"
import Sidebar from '../components/Sidebar'
import EditableNote from '../components/EditableNote'
import { placeholdertext } from '../utils/data'
import { useQuery } from 'react-query'
import { editNote, getNote, getNotes } from '../utils/getNote'

const Home: React.FC = () => {
  const [title, setTitle] = useState('Title')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur olores modi? Eos quidem in temporibus sapiente enim nobis deserunt recusandae neque.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique temporibus sapiente maiores ex veniam non possimus nihil adipisci saepe eos mollitia pariatur, hic reiciendis totam dicta? Officia suscipit dolores atque.')
  const [note, setNote] = useState(placeholdertext)
  const [noteId, setNoteId] = useState('' as string)
  const [folderName, setFolderName] = useState('Loading...' as string)
  const [folderId, setFolderId] = useState('' as string)
  const noteRes = useQuery('notes', async () => await getNote(folderId, noteId))
  const handleTitle = (data: string) => {
    setTitle(data)
  }
  const handleDescription = (data: string) => {
    setDescription(data)
  }
  const handleNote = (data: string) => {
    setNote(data)
  }

  const handlePassData = (data: string, id: string) => {
    console.log('cek123', data, id)

    setFolderName(data)
    setFolderId(id)
  }

  const handleSave = async () => {
    const res = await editNote(folderId, noteId, title, description, note)
    console.log('res : ', res)
    window.location.reload()
  }

  const handlePassData2 = (title: string, description: string, note: string, id: string) => {
    setTitle(title)
    setDescription(description)
    setNote(note)
    setNoteId(id)
    console.log('noteasas : ', title, description, note, id)
  }

  return (
    <div className="font-inter">
      <Sidebar passData={handlePassData} passData2={handlePassData2}>
        <div className="pt-14 mx-11 ">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>{folderName}</a>
              </li>
              <li>{title}</li>
            </ul>
          </div>
          <div className="flex flex-col flex-wrap flex-1">
            <div className="text-4xl mt-2 mb-2 font-bold flex-1">
              <EditableNote
                placeholder={title}
                tooltip="Edit Title"
                passData={handleTitle}
              />
            </div>
            <div className="text-gray-500 mt-2 mb-2">
              <EditableNote
                placeholder={description}
                tooltip="Edit Description"
                passData={handleDescription}
              />
            </div>
            <div className=" mt-2 mb-2 flex-1">
              <EditableNote
                placeholder={note}
                tooltip="Edit note"
                passData={handleNote}
              />
            </div>
          </div>
        </div>
        <div className="bg-base-100 pointer-events-none sticky bottom-0 -mt-6 flex h-16 [mask-image:linear-gradient(transparent,#000000)]"></div>
      </Sidebar>
      <div className="bottom-10 right-10 fixed">
          <button onClick={handleSave} className="btn btn-outline btn-md bg-white shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
            Save
          </button>
        </div>
    </div>
  )
}

export default Home
