/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { instanceHeader } from './axios'

export const getFolder = async () => {
  try {
    const result = await instanceHeader.get('/firebase/folder/')
    return result
  } catch (error) {
    console.log(error)
  }
}
export const getNotes = async (folderId: string) => {
  try {
    const result = await instanceHeader.get(`/firebase/${folderId}`)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const getNote = async (folderId: string, noteId: string) => {
  try {
    const result = await instanceHeader.get(`/firebase/${folderId}/${noteId}`)
    return result
  } catch (error) {
    console.log(error)
  }
}
export const editNote = async (folderId: string, noteId: string, title: string, description: string, note: string) => {
  try {
    const result = await instanceHeader.put(`/firebase/${folderId}/${noteId}`, {
      title,
      description,
      note,
      folderId
    })
    return result
  } catch (error) {
    console.log(error)
  }
}
export const postNote = async (folderId: string) => {
  try {
    const result = await instanceHeader.post('/firebase', {
      title: 'New Note',
      description: 'New Description',
      note: 'New Note',
      folderId
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

export const postFolder = async (folderName: string) => {
  try {
    const result = await instanceHeader.post('/firebase/folder/', {
      name: folderName
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteFolder = async (folderId: string) => {
  try {
    const result = await instanceHeader.delete(`/firebase/folder/${folderId}`)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteNote = async (folderId: string, noteId: string) => {
  try {
    const result = await instanceHeader.delete(`/firebase/${folderId}/${noteId}`)
    return result
  } catch (error) {
    console.log(error)
  }
}
