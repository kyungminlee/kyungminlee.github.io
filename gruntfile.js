const sass = require('node-sass');

module.exports = grunt => {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            core: {
                src: 'css/style.scss',
                dest: 'css/style.css'
            }
        },

        watch: {
            css: {
                files: [ 'css/style.scss' ],
                tasks: 'sass'
            },
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask('default', ['sass:core', 'watch']);
};