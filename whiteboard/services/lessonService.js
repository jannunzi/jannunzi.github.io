const MODULE_LESSON_BASE_URL = 'http://localhost:8080/api/modules/{moduleId}/lessons'
// const COURSE_BASE_URL = 'https://jannunzi-github-io.herokuapp.com/api/courses'

findAllLessonsForModule = courseId =>
    fetch(MODULE_LESSON_BASE_URL.replace('{moduleId}', moduleId))
        .then(response => response.json())
