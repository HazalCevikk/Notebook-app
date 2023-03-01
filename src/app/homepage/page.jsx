'use client'
import React, { useContext } from 'react'
import SideBar from '@/components/sidebar'
import NotePage from '@/components/notePage'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import { SideBarContext } from '@/context/SideBarContext'

const Home = () => {
  const context = useContext(SideBarContext)

  return (
    <div className="w-full h-full flex bg-gray-100">
      <button
        className="relative w-8 h-8 top-2 p-8 z-[55]"
        onClick={() => context.setIsOpen(true)}
      >
        <Bars3BottomLeftIcon className="text-black w-8 h-8" />
      </button>
      <div>
        <SideBar />
      </div>
      <div className="w-full">
        <NotePage />
      </div>
    </div>
  )
}

export default Home
