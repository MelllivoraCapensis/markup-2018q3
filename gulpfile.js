    var gulp= require('gulp');// Подключаем Gulp
    var browserSync = require('browser-sync'); // Подключаем Browser Sync
    var plumber=require('gulp-plumber');
    gulp.task('browser-sync', function() { // Создаем таск browser-sync
        browserSync({ // Выполняем browserSync
            server: { // Определяем параметры сервера
                baseDir: 'app' // Директория для сервера - app
            },
            notify: false // Отключаем уведомления
        });
    });
    gulp.task('watch', ['browser-sync'], function() {
        gulp.watch('app/*.css', browserSync.reload);
        gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    });

