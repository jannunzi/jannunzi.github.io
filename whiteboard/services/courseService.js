const COURSE_BASE_URL = 'http://localhost:8080/api/courses'
// const COURSE_BASE_URL = 'https://jannunzi-github-io.herokuapp.com/api/courses'

findAllCourses = () =>
    fetch(COURSE_BASE_URL)
        .then(response => response.json())

createCourse = course =>
    fetch(COURSE_BASE_URL, {
    	method: "POST",
    	body: JSON.stringify(course),
    	headers: {
    		'content-type': 'application/json'
    	}
    })
    .then(response => response.json())
