module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cordovacli: {
            options: {
                path: '<%= pkg.path %>'
            },
            cordova: {
                options: {
                    command: ['create','platform','plugin','build'],
                    platforms: ['android'],
                    plugins: ['device','dialogs'],
                    path: '<%= pkg.path %>',
                    id: '<%= pkg.id %>',
                    name: '<%= pkg.name %>'
                }
            },
            create: {
                options: {
                    command: 'create',
                    id: '<%= pkg.id %>',
                    name: '<%= pkg.name %>'
                }
            },
            add_platforms: {
                options: {
                    command: 'platform',
                    action: 'add',
                    platforms: ['android']
                }
            },
            add_plugins: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        'battery-status',
                        'camera',
                        'console',
                        'contacts',
                        'device',
                        'device-motion',
                        'device-orientation',
                        'dialogs',
                        'file',
                        'geolocation',
                        'globalization',
                        'inappbrowser',
                        'media',
                        'media-capture',
                        'network-information',
                        'splashscreen',
                        'vibration'
                    ]
                }
            },
            build_ios: {
                options: {
                    command: 'build',
                    platforms: ['ios']
                }
            },
            build_android: {
                options: {
                    command: 'build',
                    platforms: ['android']
                }
            },
            emulate_android: {
                options: {
                    command: 'emulate',
                    platforms: ['android'],
                    args: ['--target','Nexus5']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-cordovacli');

    // Default task(s).
    grunt.registerTask('default', ['cordovacli:cordova']);

};