var app = new Vue({
    el: '#app',
    mounted: function () {
        findAllCourses()
            .then(courses => this.courses = courses)
    },
    data: {
        courses: [],
        message: 'Hello Vue!'
    }
});