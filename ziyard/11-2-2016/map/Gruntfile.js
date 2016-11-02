module.exports = function(grunt) {

  //Initializing the configuration object
  	jshint: {
    all: ['Gruntfile.js', 'assets/js/**/*.js', 'assets/js/build/**/*.js']
    }
    grunt.initConfig({
	sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'assets/stylesheets/css/main.css': 'assets/stylesheets/scss/main.scss'
				}
			}
		},
    concat: {
      options: {
        separator: '\n',
		stripBanners: true,
      },
      js_frontend: {
        src: [
		   'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
		   'bower_components/slick-carousel/slick/slick.min.js',
		   'bower_components/Materialize/js/waves.js',
	       'assets/js/common.js'
        ],
        dest: 'assets/js/build/main.js',
      }
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          'assets/js/build/main.min.js': ['assets/js/build/main.js']
        }
      },
    },
    watch: {
		
        js_frontend: {
          files: [
            //watched files
     		'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
		   	'bower_components/slick-carousel/slick/slick.min.js',
			'bower_components/Materialize/js/waves.js',
	       	'assets/js/common.js'
            ],   
          tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        sass: {
				files: ['assets/stylesheets/scss/**/*.{scss,sass}', 'bower_components/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			},
			livereload: {
				files: ['*.html', '*.php', 'assets/js/**/*.{js,json}' ,'assets/js/build/**/*.{js,json}', 'assets/stylesheets/css/*.css','assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-menu');

  // Task definition
  grunt.registerTask('default', ['watch']);

};