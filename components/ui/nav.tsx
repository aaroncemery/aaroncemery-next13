'use client'

import { MenuToggle } from './buttons'
import Link from 'next/link'
import { useMenuToggle } from 'hooks/useMenuToggle'
import { useEffect } from 'react'
import { pages } from 'app/lib/globals'

export default function Nav() {
  const { isOpen, toggle } = useMenuToggle()

  return (
    <nav className="py-4 fixed w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-mono">
            bad_raccoon
          </Link>
          <ul
            className={`font-mono text-white flex gap-6 transition-all duration-300 ${
              !isOpen ? 'opacity-0 translate-x-8 pointer-events-none' : ''
            }`}
          >
            {pages[0].items.map((page) => (
              <li key={page.name}>
                <Link
                  href={'/' + page.slug}
                  className="hover:text-green-500 hover:underline transition-all duration-300"
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
