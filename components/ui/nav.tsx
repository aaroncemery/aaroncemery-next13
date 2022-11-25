'use client'

import { MenuToggle } from './buttons'
import Link from 'next/link'
import { useMenuToggle } from 'hooks/useMenuToggle'
import { useEffect } from 'react'
import { pages } from 'app/lib/globals'

export default function Nav() {
  const { isOpen, toggle } = useMenuToggle()

  return (
    <nav className="py-4 absolute w-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-mono">
            bad_raccoon
          </Link>
          <ul
            className={`font-mono text-white gap-6 transition-all duration-300 hidden lg:flex ${
              !isOpen ? 'opacity-0 translate-x-8 pointer-events-none' : ''
            }`}
          >
            {pages[0].items.map((page) => (
              <li key={page.name}>
                <Link
                  href={'/' + page.slug}
                  className="hover:underline transition-all duration-300"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <MenuToggle onClick={toggle} isOpen={isOpen} />
        </div>
      </div>
      <ul
        className={`font-mono text-white flex flex-col gap-6 transition-all duration-300 lg:hidden bg-blue-500 w-screen h-screen justify-start items-center pt-24 ${
          !isOpen ? 'opacity-0 -translate-y-8 pointer-events-none' : ''
        }`}
      >
        {pages[0].items.map((page) => (
          <li key={page.name}>
            <Link
              href={'/' + page.slug}
              className="hover:underline transition-all duration-300"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
