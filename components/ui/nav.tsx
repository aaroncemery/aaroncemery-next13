'use client'

import { MenuToggle } from './buttons'
import Link from 'next/link'
import { useMenuToggle } from 'hooks/useMenuToggle'
import { useEffect } from 'react'
import { pages } from 'app/lib/globals'

export default function Nav() {
  const { isOpen, toggle } = useMenuToggle()

  useEffect(() => {
    console.log(isOpen, 'isOpen')
  }, [isOpen])

  return (
    <nav className="bg-[#0032E3] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-mono">bad_raccoon</div>
          <ul
            className={`font-mono text-white flex gap-6 transition-all duration-300 ${
              !isOpen ? 'opacity-0 translate-x-8 pointer-events-none' : ''
            }`}
          >
            {pages[0].items.map((page) => (
              <li key={page.name}>
                <Link
                  href={'/' + page.slug}
                  className="hover:text-[#52FF00] hover:underline transition-all duration-300"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <MenuToggle onClick={toggle} isOpen={isOpen} />
        </div>
      </div>
    </nav>
  )
}
