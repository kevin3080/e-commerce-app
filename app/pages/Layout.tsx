import Header from '@/wrappers/header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
