"use client"

import { useState, useRef, useEffect } from "react"
import { FaCaretDown } from "react-icons/fa"

const DropDown = ({title, options}: {title: string, options: string[]}) => {
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(title)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div ref={dropdownRef} className="relative overflow-visible">
    <button onClick={() => setOpen(!open)} className="flex cursor-pointer w-60 border-foreground border-2 rounded-lg pl-4 pr-2 gap-1 items-center justify-between">
    <span>{selectedOption}</span>
    <FaCaretDown className={`text-2xl scale-x-75 transition-transform ${open ? 'rotate-180' : ''}`} />
  </button>
  
  {open && (
    <ul className="absolute top-5 bg-white left-0 w-60 border-2 border-t-0 border-foreground rounded-b-lg z-50 overflow-visible">
        <li 
          className="py-1 px-4 border-b-2 rounded-lg border-foreground"      >
        </li>
      {options.map((option) => (
        <li 
          className="py-1 bg-white px-4 hover:bg-foreground/10 cursor-pointer last:rounded-b-lg" 
          key={option}
          onClick={() => {
            setSelectedOption(option);
            setOpen(false);
          }}
        >
          {option}
        </li>
      ))}
    </ul>
  )}
  </div>
  )
}

export default DropDown