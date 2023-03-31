import { useContext, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { SideBarContext } from '@/context/SideBarContext'

const SideBar = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-[52]" onClose={setIsOpen}>
        {/* For backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-400"
              enterFrom="opacity-0 "
              enterTo="opacity-100 "
              leave="duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0 "
            >
              <div className="fixed w-[25rem] h-[100vh] bg-black p-8 text-gray-300 flex flex-col space-y-6  z-[999] left-0">
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
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SideBar
