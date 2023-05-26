import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from '../config'

import { CoursesLayout } from '../layouts'

const All = lazy(() => import('../pages/All'))
const Id = lazy(() => import('../pages/Id'))
const My = lazy(() => import('../pages/My'))

export default function CoursesRoutes () {
  const coursesRoutes = [
    {
      ...routes.all,
      element: <All />,
    },
    {
      ...routes.id,
      element: <Id />,
    },
    {
      ...routes.my,
      element: <My />,
    },
  ]

  return (
    <Routes>
      <Route path='/' element={<CoursesLayout />}>
        {coursesRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={
            <Suspense fallback={<div className='text-sky-600 h-96 text-9xl'>COURSES LOADING...</div>}>
              {route.element}
            </Suspense>
          } 
          />
        ))}
      </Route>
    </Routes>
  )
}
