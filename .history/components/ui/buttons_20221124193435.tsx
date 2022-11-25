'use client'

import { useMenuToggle } from 'hooks/useMenuToggle'

export const MenuToggle = () => {
  const { isOpen, toggle } = useMenuToggle()

  return (
    <div className="grid">
      <div className="menu cross menu--1">
        <label htmlFor="">
          <input type="checkbox" onClick={toggle} />
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" />
            <path className="line line--1" d="M 50 50 L 80 50" />
            <path className="line line--2" d="M 50 50 L 20 50" />
            <path className="line line--3" d="M 50 50 L 50 80" />
            <path className="line line--4" d="M 50 50 L 50 20" />
          </svg>
        </label>
      </div>
    </div>
  )
}
