module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            lib: {
                files: [{
                    src: ['./src/scripts/**/*.ts'],
                    dest: './web/scripts'
                }],
                options: {
                    fast: 'never'
                }
            }
        },
        clean: {
            build: {
                src: ['./web']
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: './src/',
                        src: ['**/*.html'],
                        dest: 'web/'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('default', ['clean','copy', 'ts']);


};
