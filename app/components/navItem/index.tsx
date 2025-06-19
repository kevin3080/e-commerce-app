import { NavLink } from 'react-router-dom'

interface NavItemProps {
  to: string
  label: string
  baseStyle: string
}
export const NavItem = ({ to, label, baseStyle }: NavItemProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${baseStyle}__active` : `${baseStyle}__link`
        }
      >
        {label}
      </NavLink>
    </li>
  )
}
