Vue.component('module-list', {
    props: ['modules'],
    template: `
        <div v-if="modules.length">
            <ul class="list-group">
                <li v-for="module in modules"
                    class="list-group-item">
                    <a v-bind:href="course.html?module">
                        {{module.title}}
                    </a>
                </li>
            </ul>
        </div>
    `
})