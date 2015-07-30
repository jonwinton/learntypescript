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
                options: {fast: 'never'}
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);


};
