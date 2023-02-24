import Image from 'next/image'
import Sidebar from 'react-sidebar'
import React, { useContext, useEffect } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { SideBarContext } from '@/context/SideBarContext'

const SideBar = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext)

  console.log('context', isOpen)

  return (
    <div className="z-50">
      <Sidebar
        sidebar={
          <div className="w-[350px] h-[100vh] bg-black p-8 text-gray-300 flex flex-col space-y-6 relative">
            <div className="flex space-x-3 items-center">
              <div className="w-6 h-6 bg-gray-400 text-white flex justify-center items-center rounded-lg">
                H
              </div>
              <div className="text-gray-300">Hazal Çevik Notebook</div>
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-gray-400 pb-1">
              <div>Create a new template</div>
              <div className="cursor-pointer">
                <PlusCircleIcon className="text-gray-300 w-5 h-5" />
              </div>
            </div>
          </div>
        }
        open={isOpen}
        onSetOpen={setIsOpen}
      ></Sidebar>
    </div>
  )
}

export default SideBar
