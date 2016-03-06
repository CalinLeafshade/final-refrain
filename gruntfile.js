module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    mangle: false
                },
                files: {
                    'public/app.js': ['build/lib.js', 'build/app.js', 'build/**/*.js'],
                },
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "src/js",
                    src: "**/*.js",
                    dest: "build",
                    ext: ".js"
                }]
            }
        },
        less: {
            development: {
                options: {
                    paths: ["src/less"],
                    compress: true
                },
                files: {
                    "public/site.css": "src/less/site.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['babel', 'uglify']
            },
            styleSheets: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            },
            bower: {
                files: ['bower_components/*.js'],
                tasks: ['bower_concat', 'babel', 'uglify']
            }
        },
        bower_concat: {
            all: {
                dest: 'build/lib.js',
                cssDest: 'public/lib.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['less', 'bower_concat', 'babel', 'uglify']);

};