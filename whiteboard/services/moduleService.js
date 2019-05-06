const COURSE_MODULE_BASE_URL = 'http://localhost:8080/api/courses/{courseId}/modules'
const MODULE_BASE_URL        = 'http://localhost:8080/api/modules'
// const COURSE_BASE_URL = 'https://jannunzi-github-io.herokuapp.com/api/courses'

findAllModules = () =>
    fetch(MODULE_BASE_URL)
        .then(response => response.json())

findAllModulesForCourse = courseId =>
    fetch(COURSE_MODULE_BASE_URL.replace('{courseId}', courseId))
        .then(response => response.json())
