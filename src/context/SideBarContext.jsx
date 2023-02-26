import React, { createContext, useState } from 'react'

export const SideBarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
})

export const SideBarContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const context = {
    isOpen,
    setIsOpen,
  }

  return <SideBarContext.Provider value={context}>{children}</SideBarContext.Provider>
}
