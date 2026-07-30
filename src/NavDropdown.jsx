import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavDropdown({ label, basePath, items, onNavigate }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <li className="navbar-dropdown" ref={ref}>
      <button
        type="button"
        className="navbar-dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {label}
      </button>
      {open && (
        <ul className="navbar-dropdown-menu">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={`${basePath}/${item.path}`}
                onClick={() => {
                  setOpen(false)
                  onNavigate?.()
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavDropdown
