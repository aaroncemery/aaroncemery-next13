'use client'

import { useMenuToggle } from 'hooks/useMenuToggle'

export const MenuToggle = () => {
  const { isOpen, toggle } = useMenuToggle()

  return (
    <button
      className="flex flex-col justify-around w-10 h-8 p-0 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0032E3] focus:ring-white border"
      onClick={toggle}
    >
      <span
        className={`w-full h-[2px] bg-white rounded ${
          isOpen ? 'rotate-45 origin-left' : ''
        }`}
      ></span>
      <span
        className={`w-full h-[2px] bg-white rounded ${
          isOpen ? '-rotate-45 origin-right' : ''
        }`}
      ></span>
    </button>
  )
}
