var app = new Vue({
    el: '#app',
    mounted: function () {
        const params = queryParams()
        findAllModulesForCourse(params['courseId'])
            .then(modules => {
                console.log(modules)
                console.log(modules.length)
                this.modules = modules
            })
    },
    methods: {
        expandModule: function(module) {
            alert('ddd')
        }
    },
    data: {
        modules: []
    }
});