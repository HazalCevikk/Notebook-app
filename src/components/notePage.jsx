import { CursorArrowRaysIcon, PlusIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import PlusIconContextMenu from './plusIconContextMenu'

const initialContextMenu = {
  show: false,
  x: 0,
  y: 0,
}

function NotePage() {
  const [header, setHeader] = useState()
  const [subtitle, setSubTitle] = useState()
  const [contextMenu, setContextMenu] = useState(initialContextMenu)
  const [type, setType] = useState('text')

  //context menu

  const handleContextMenu = (e) => {
    e.preventDefault()
    const { pageX, pageY } = e
    setContextMenu({ show: true, x: pageX, y: pageY })
  }

  const contextMenuClose = () => setContextMenu(initialContextMenu)

  return (
    <div className="w-full h-[100vh] bg-gray-100 flex flex-col p-12  z-[51]">
      <div className="h-[25%] w-full bg-gray-300 rounded-t-lg relative">
        <button className="bg-gray-100 text-black text-sm py-1 px-8 rounded-sm opacity-60 absolute bottom-2 left-2  hover:opacity-100">
          Add Cover
        </button>
      </div>
      <div className="w-full h-[75%] px-[15rem] pt-3 bg-white text-center flex flex-col items-start relative">
        <div className="flex ml-8 justify-center items-center">
          <input
            type="text"
            value={header}
            defaultValue="Getting Started !"
            onChange={(e) => setHeader(e.target.value)}
            className="p-5 outline-none text-3xl font-semibold leading-3"
          />
        </div>
        {contextMenu.show && (
          <PlusIconContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            closeContextMenu={contextMenuClose}
            setType={setType}
          />
        )}
        <div className="flex space-x-2 justify-center items-center">
          <PlusIcon
            className="w-6 h-6 opacity-40 cursor-pointer"
            onContextMenu={handleContextMenu}
          />
          <CursorArrowRaysIcon className='"w-6 h-6 opacity-40 cursor-pointer' />
          {type === 'text' ? (
            <input
              type="text"
              value={subtitle}
              defaultValue="👋 Welcome to NoteBook!"
              onChange={(e) => setSubTitle(e.target.value)}
              className="p-2 outline-none opacity-60 text-md font-normal leading-3"
            />
          ) : type === 'To-do' ? (
            <div className="pl-2 flex items-center">
              <input type="checkbox" />
              <input
                type="text"
                value={subtitle}
                defaultValue="👋 Welcome to NoteBook!"
                onChange={(e) => setSubTitle(e.target.value)}
                className="p-2 outline-none opacity-60 text-md font-normal leading-3"
              />
            </div>
          ) : type === 'head3' ? (
            <div className="pl-2 flex items-center">
              <input type="checkbox" />
              <input
                type="text"
                value={subtitle}
                defaultValue="👋 Welcome to NoteBook!"
                onChange={(e) => setSubTitle(e.target.value)}
                className="p-2 outline-none opacity-60 text-md text-[22px] leading-3"
              />
            </div>
          ) : type === 'head2' ? (
            <div className="pl-2 flex items-center">
              <input type="checkbox" />
              <input
                type="text"
                value={subtitle}
                defaultValue="👋 Welcome to NoteBook!"
                onChange={(e) => setSubTitle(e.target.value)}
                className="p-2 outline-none opacity-60 text-md text-[26px] leading-3"
              />
            </div>
          ) : type === 'head1' ? (
            <div className="pl-2 flex items-center">
              <input type="checkbox" />
              <input
                type="text"
                value={subtitle}
                defaultValue="👋 Welcome to NoteBook!"
                onChange={(e) => setSubTitle(e.target.value)}
                className="p-2 outline-none opacity-60 text-md text-[36px] leading-3"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default NotePage
