import { useState } from 'react'

export const useMenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  console.log(isOpen)

  return { isOpen, toggle }
}
