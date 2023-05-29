import { CursorArrowRaysIcon, PlusIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import PlusIconPopover from '../components/PlusIconPopover'
import DialogModal from './DialogModal'

function NotePage() {
  const [header, setHeader] = useState()
  const [subtitle, setSubTitle] = useState()
  const [type, setType] = useState('text')
  const [openModal, setOpenModal] = useState(false)
  const [backgroundUrl, setBackgroundUrl] = useState('')

  const addBackgroundImage = (backgroundPath) => {
    const background = document.getElementById('header-background')
    background.style.backgroundImage = `url(${backgroundPath})`
    background.style.backgroundSize = 'contain'
    background.style.backgroundPosition = 'center'
  }

  useEffect(() => {
    if (backgroundUrl) {
      addBackgroundImage(backgroundUrl)
    }
  }, [backgroundUrl])

  return (
    <div className="w-full h-[100vh]  bg-gray-100 flex flex-col p-12  z-[51]">
      <div
        className="h-[25%] w-full bg-gray-300 rounded-t-lg relative"
        id="header-background"
      >
        <button
          className="bg-gray-100 text-black text-sm py-1 px-8 rounded-sm opacity-60 absolute bottom-2 left-2  hover:opacity-100"
          onClick={() => setOpenModal(true)}
        >
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

        <div className="flex space-x-2 justify-center items-center">
          <div className="flex relative items-center space-x-8">
            <PlusIconPopover setType={setType} />
            <CursorArrowRaysIcon className='"w-6 h-6 opacity-40 cursor-pointer' />
          </div>

          {type === 'text' ? (
            <input
              type="text"
              value={subtitle}
              defaultValue="👋 Welcome to NoteBook!"
              onChange={(e) => setSubTitle(e.target.value)}
              className="p-2 outline-none opacity-60 text-md font-normal leading-3"
            />
          ) : type === 'toDo' ? (
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
      {openModal && (
        <DialogModal
          setIsOpen={setOpenModal}
          isOpen={openModal}
          setBackgroundUrl={setBackgroundUrl}
        />
      )}
    </div>
  )
}

export default NotePage
