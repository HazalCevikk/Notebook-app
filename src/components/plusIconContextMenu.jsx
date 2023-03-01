import React from 'react'

const PlusIconContextMenu = ({ x, y, closeContextMenu, setType }) => {
  return (
    <div
      onClick={() => closeContextMenu()}
      className={`absolute top-[${y}px] left-[${x}px] z-[55] w-[15rem] bg-white border-[0.5px] h-[10rem] overflow-y-scroll`}
    >
      <ul className="decoration-none divide-y-[0.5px] divide-gray-300">
        <li className="p-3" onClick={() => setType('head1')}>
          Heading 1
        </li>
        <li className="p-3" onClick={() => setType('head2')}>
          Heading 2
        </li>
        <li className="p-3" onClick={() => setType('head3')}>
          Heading 3
        </li>
        <li className="p-3" onClick={() => setType('text')}>
          Text
        </li>
        <li className="p-3" onClick={() => setType('To-do')}>
          To-do list
        </li>
      </ul>
    </div>
  )
}

export default PlusIconContextMenu
