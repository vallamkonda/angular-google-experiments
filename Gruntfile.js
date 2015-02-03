module.exports = function(grunt) {
    grunt.initConfig({
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app1: {
                files:{
                    'googleExperiments.js': [
                        'src/googleExperimentsModule.js',
                        'src/googleExperimentsDirective.js',
                        'src/googleExperimentsProvider.js'
                    ]
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            googleExperiments: {
                files: {
                    'googleExperiments.min.js': [
                        'src/googleExperimentsModule.js',
                        'src/googleExperimentsProvider.js',
                        'src/googleExperimentsDirective.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['ngAnnotate','uglify']);
};
