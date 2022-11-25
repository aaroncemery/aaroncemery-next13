import { MenuToggle } from './buttons'

export default function Nav() {
  return (
    <nav className="bg-[#0032E3] py-4">
      <div className="container mx-auto px-4">
        <div className="text-white">aaroncemery</div>
        <MenuToggle />
      </div>
    </nav>
  )
}
