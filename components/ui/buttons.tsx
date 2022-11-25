interface MenuToggleTextProps {
  isOpen?: boolean
  onClick: () => void
}

export const MenuToggle = ({ onClick, isOpen }: MenuToggleTextProps) => {
  return (
    <button
      className="flex flex-col justify-around w-8 h-8 p-0 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white/40 rounded-md"
      onClick={onClick}
    >
      <span
        className={`w-full h-[2px] bg-white rounded transition-all duration-300 ${
          isOpen ? 'rotate-45 -translate-x-1 translate-y-5 origin-right' : ''
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
