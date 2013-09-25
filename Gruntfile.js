module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: 'dist/<%= pkg.name %>.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		concat: {
			build: {
				src: ['src/ajax.js', 'src/GeoJSON.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		jshint:{
			options:{
				jshintrc:".jshintrc"
			},
			all:['src/ajax.js', 'src/GeoJSON.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint','concat','uglify']);
};