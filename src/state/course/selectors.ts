export const getActiveCourse = state => {
  console.log("state,course", state.course.lessons)
  // if (state.course.lessons) {
  //   return state.course
  // }
  const { lessons } = state.course
  const { todoLessons, completedLessons } = state.session

  if (lessons && lessons.length > 0) {
    const courseLessonsWithTodos = lessons.map(lesson => {
      if (todoLessons.includes(lesson.id)) {
        return { ...lesson, toDo: true }
      }
      return { ...lesson, toDo: false }
    })
    const courseLessonsWithCompleted = courseLessonsWithTodos.map(lesson => {
      if (completedLessons.includes(lesson.id)) {
        return { ...lesson, completed: true }
      }
      return { ...lesson, completed: false }
    })

    return { ...state.course, lessons: courseLessonsWithCompleted }
  }

  return state.course
}
