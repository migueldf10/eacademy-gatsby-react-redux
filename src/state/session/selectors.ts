export const getUser = state => state.session.user
export const isAdmin = state => {
  const roles = state.session.user["https://thedutchonlineacademy.com/roles"]
  if (Array.isArray(roles)) {
    return roles.includes("admin")
  }
}

export const getCourses = state => state.session.courses
export const getCompletedLessons = state => state.session.completedLessons
export const getTodoLessons = state => state.session.todoLessons
