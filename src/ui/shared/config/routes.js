const routes = {
  home: {
    path: '/home',
    label: 'Home',
    to: '/home'
  },
  courses: {
    path: '/courses/*',
    label: 'Courses',
    to: '/courses'
  },
  notes: {
    path: '/notes/*',
    label: 'Notes',
    to: '/notes'
  },
  not_found: {
    path: '/404',
    label: 'Not Found',
    to: '/404'
  },
  not_authorized: {
    path: '/401',
    label: 'Not Authorized',
    to: '/401'
  },
}

export {
  routes
}
