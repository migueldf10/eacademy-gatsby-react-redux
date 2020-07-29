export const getActiveLesson = state => {
  if (state.course.lessons.length > 0) {
    const lessonsIds = state.course.lessons.map(obj => obj.id)
    const currentLessonIndex = lessonsIds.indexOf(state.lesson.id)
    return {
      lesson: state.lesson,
      nextLesson: state.course.lessons[currentLessonIndex + 1],
    }
  }
  return state.lesson
}
