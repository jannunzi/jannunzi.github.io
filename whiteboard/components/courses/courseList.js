Vue.component('course-list', {
    props: ['courses'],
    template: `
        <div v-if="courses.length">
            <ul class="list-group">
                <li v-for="course in courses" class="list-group-item">
                    {{course.title}}
                </li>
            </ul>
        </div>
    `
})