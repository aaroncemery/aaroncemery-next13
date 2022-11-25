'use client'

import { useMenuToggle } from 'hooks/useMenuToggle'

export const MenuToggle = () => {
  const { isOpen, toggle } = useMenuToggle()

  return (
    <button
      className="flex flex-col justify-around w-8 h-8 p-0 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0032E3] focus:ring-white border before:content-none after:content-none before:w-4 before:h-0.5 before:bg-white before:transform before:origin-left before:rotate-45 after:w-4 after:h-0.5 after:bg-white after:transform after:origin-left after:-rotate-45 absolute"
      onClick={toggle}
    ></button>
  )
}
