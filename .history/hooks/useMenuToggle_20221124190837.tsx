export const useMenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return { isOpen, toggle }
}
