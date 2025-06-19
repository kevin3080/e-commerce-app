import { NavItem } from '../navItem'

const HEADER_NAV_STYLE = 'nav'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

export const Navigation = () => (
  <nav className={HEADER_NAV_STYLE}>
    <ul className={`${HEADER_NAV_STYLE}__list`}>
      {navLinks.map(({ to, label }) => (
        <NavItem key={to} to={to} label={label} baseStyle={HEADER_NAV_STYLE} />
      ))}
    </ul>
  </nav>
)
