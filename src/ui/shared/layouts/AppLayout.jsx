import { Outlet } from 'react-router-dom'

import { Footer,Navbar } from '../components'

export const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}