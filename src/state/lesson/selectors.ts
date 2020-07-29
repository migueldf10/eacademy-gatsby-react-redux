export const getActiveLesson = state => {
  if (state.course.lessons && state.course.lessons.length > 0) {
    const lessonsIds = state.course.lessons.map(obj => obj.id)
    const currentLessonIndex = lessonsIds.indexOf(state.lesson.id)

    const previousLesson =
      currentLessonIndex > 0
        ? state.course.lessons[currentLessonIndex - 1]
        : null
    const nextLesson =
      currentLessonIndex <= lessonsIds.length
        ? state.course.lessons[currentLessonIndex + 1]
        : null

    return {
      previousLesson: previousLesson,
      lesson: state.lesson,
      nextLesson: nextLesson,
    }
  }
  console.log("there is only one lesson in the array")
  return state.lesson
}
