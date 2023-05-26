const routes = {
  all: {
    path: '/all',
    label: 'All Courses',
    to: '/courses/all'
  },
  my: {
    path: '/my',
    label: 'My Courses',
    to: '/courses/my'
  },
  course_id: {
    path: '/id/:id',
    label: 'Course',
    to: '/courses/id'
  },
}

export {
  routes
}