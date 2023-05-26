import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { routes } from '@/config'

import { AppLayout } from '@/layouts/AppLayout'

const Home = lazy(() => import('@/views/home/pages/Home'))
const CoursesRoutes = lazy(() => import('@/views/courses/routes/CoursesRoutes'))

export default function AppRoutes() {
  const appRoutes = [
    {
      ...routes.home,
      element: <Home />,
    },
    {
      ...routes.courses,
      element: <CoursesRoutes />,
    },
  ]

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        {appRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense
                fallback={
                  <div className='text-sky-600 h-96 text-9xl'>APP LOADING...</div>
                }
              >
                {route.element}
              </Suspense>
            }
          />
        ))}
        <Route path='*' element={<Navigate to={routes.not_found.to} />} />
      </Route>
    </Routes>
  )
}
