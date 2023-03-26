'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import NotePage from '@/components/notePage'
import { SideBarContext } from '@/context/SideBarContext'
import SideBar from '@/components/sideBar'

const Home = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext)

  return (
    <div className="w-full h-full flex bg-gray-100">
      <button className="relative w-8 h-8 top-2 p-8 " onClick={() => setIsOpen(true)}>
        <Bars3BottomLeftIcon className="text-black w-8 h-8" />
      </button>
      <SideBar />
      <div
        className={classNames(
          'w-full',
          isOpen ? 'ml-[25rem] w-full duration-400' : 'ml-0 transition-400',
        )}
      >
        <NotePage />
      </div>
    </div>
  )
}

export default Home
