'use client'

import { useMenuToggle } from 'hooks/useMenuToggle'
import JSXStyle from 'styled-jsx/style'

export const MenuToggle = () => {
  const { isOpen, toggle } = useMenuToggle()

  return (
    <div className="grid">
      <div className="menu cross menu--1">
        <label htmlFor="">
          <input type="checkbox" onClick={toggle} />
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" />
            <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className="line--2" d="M0 50h70" />
            <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
      </div>
    </div>
  )
}

<JSXStyle
  id="menu"
  global={true}
  children={`
  .menu--1 {
    background-color: #3f77e9;
    .line--1,
    .line--3 {
      --total-length: 126.64183044433594;
    }
    .line--2 {
      --total-length: 70;
    }
    input:checked+svg {
      .line--1,
      .line--3 {
        --offset: -94.1149185097;
      }
      .line--2 {
        --offset: -50;
      }
    }
  }`
}
