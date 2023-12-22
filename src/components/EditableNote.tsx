/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/quotes
import React, { useEffect, useRef, useState } from "react"

interface EditableNoteProps {
  placeholder: string
  tooltip?: string
  passData?: (data: string) => void
}

const EditableNote: React.FC<EditableNoteProps> = ({ placeholder, tooltip, passData }) => {
  const [isEditing, setEditing] = useState(false)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const [text, setText] = useState(placeholder || '')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (text.length === 0 && !isEditing) {
      setText(placeholder)
    }

    if (isEditing) {
      // Mengatur tinggi textarea sesuai tinggi konten teks
      if (textareaRef.current != null) {
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }
  }, [isEditing, text])

  useEffect(() => {
    if (placeholder !== text) {
      setText(placeholder)
    }
  }, [placeholder])

  const handleDoubleClick = () => {
    setEditing(true)
  }

  const handleBlur = () => {
    setEditing(false)
  }

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setText(e.target.value)
    if (passData !== undefined) {
      passData(e.target.value as string)
    }
  }
  return (
    <>
    {isEditing
      ? (
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className="border-none outline-none resize-none w-full"
        />
        )
      : (
        <p onClick={handleDoubleClick} className="cursor-pointer text-start tooltip whitespace-pre-line" data-tip={tooltip}>
          {text}
        </p>
        )}
    </>
  )
}

export default EditableNote
