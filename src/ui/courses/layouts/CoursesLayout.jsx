import { Outlet } from 'react-router-dom'

import { CoursesNavbar } from '../components'

export const CoursesLayout = () => {
  return (
    <div>
      <CoursesNavbar />
      <Outlet />
    </div>
  )
}
