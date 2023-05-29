import { Popover, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import Image from 'next/image'

export default function Example({ setType }) {
  const solutions = [
    {
      name: 'Heading 1',
      description: 'Big section heading.',
      icon: '/icons/headerone.png',
      setTypes: 'head1',
    },
    {
      name: 'Heading 2',
      description: 'Medium section heading.',
      icon: '/icons/headersecond.png',
      setTypes: 'head2',
    },
    {
      name: 'Heading 3',
      description: 'Small section heading.',
      icon: '/icons/headerthird.png',
      setTypes: 'head3',
    },
    {
      name: 'Text',
      description: 'Just start writing with plain text.',
      icon: '/icons/en-US.png',
      setTypes: 'text',
    },
    {
      name: 'To Do List',
      description: 'Track tasks with a to-do list.',
      icon: '/icons/to-do.png',
      setTypes: 'toDo',
    },
  ]

  return (
    <div className="absolute top-1">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="outline-none">
              <PlusIcon className="w-5 h-5 text-gray-400" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-7 lg:grid-cols-2 flex flex-col space-y-3">
                    {solutions.map((item, index) => (
                      <div
                        key={item.name}
                        onClick={() => {
                          setType(item.setTypes)
                        }}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-[#FEFEFE] focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div
                          className="flex h-40 w-40 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                          key={index}
                        >
                          <Image width={55} height={55} src={item.icon} alt="deneme" />
                        </div>
                        <div className="ml-4 items-center w-3/4">
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
