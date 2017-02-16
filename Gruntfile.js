module.exports = function (grunt) {
	'use strict';
	
	require('load-grunt-tasks')(grunt, {
		pattern: ['grunt-*']
	});
	
	var config = {
		name: 'damnums',
		dir: {
			src: 'src',
			dest: 'dist',
		},
		scripts: [
			'argent.acs'
		],
		pkg: require('./package.json')
	};
	
	grunt.initConfig({
		conf: config,

		compress: {
			main: {
				options: {
					mode: 'zip',
					archive: './<%= conf.dir.dest %>/<%= conf.name %>.pk3'
				},
				files: [
					{expand: true, cwd: '<%= conf.dir.src %>/', src: ['**'], dest: '/'}
				]
			}
		},
		copy: {
			main: {
				src: '<%= conf.dir.src %>/wadinfo.txt',
				dest: './<%= conf.dir.dest %>/<%= conf.name %>.txt'
			},
			dist: {
				expand: true,
				dot: true,
				cwd: '<%= conf.dir.dest %>',
				dest: '<%= conf.dir.dest %>/',
				src: '<%= conf.name %>.*',
				rename: function(dest, src) {
					return dest + src.replace(/(\.[\w\d_-]+)$/i, '_<%= conf.pkg.version %>$1');
				}
			}
		}
	});
	
	// task aliases
	grunt.registerTask('build', ['compress', 'copy:main']);
	grunt.registerTask('dist', ['compress', 'copy:main', 'copy:dist']);
	grunt.registerTask('default', ['build']);
};
