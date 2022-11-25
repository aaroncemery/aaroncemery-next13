export const MenuToggle = () => {
  const { isOpen, toggle } = useMenuToggle()

  return (
    <button
      className="flex flex-col justify-around w-8 h-8 p-0 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0032E3] focus:ring-white"
      onClick={toggle}
    >
      <span className="w-full h-1 bg-white rounded"></span>
      <span className="w-full h-1 bg-white rounded"></span>
      <span className="w-full h-1 bg-white rounded"></span>
    </button>
  )
}
