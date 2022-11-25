'use client'

import { useMenuToggle } from 'hooks/useMenuToggle'

export const MenuToggle = () => {
  const { isOpen, toggle } = useMenuToggle()

  return (
    <button
      className="flex flex-col justify-around w-8 h-8 p-0 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0032E3] focus:ring-white/40"
      onClick={toggle}
    >
      <span
        className={`w-full h-[2px] bg-white rounded transition-all duration-300 ${
          isOpen
            ? 'rotate-45 -translate-x-1 translate-y-[18px] origin-right'
            : ''
        }`}
      ></span>
      <span
        className={`w-full h-[2px] bg-white rounded transition-all duration-300 ${
          isOpen ? ' rotate-[135deg] -translate-x-[0px] -translate-y-[7px]' : ''
        }`}
      ></span>
    </button>
  )
}
