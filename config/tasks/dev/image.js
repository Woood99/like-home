import changed from "gulp-changed";
import webp from 'gulp-webp';

export const imageDev = () => {
    return app.gulp.src([`./src/img/**/**.{jpg,jpeg,png,svg}`], {
            encoding: false
        })
        .pipe(changed('./app/img/'))
        .pipe(app.gulp.dest('./app/img/'))
        .pipe(app.gulp.src([`./src/img/**/**.{jpg,jpeg,png,svg}`], {
            encoding: false
        }))
        .pipe(webp())
        .pipe(app.gulp.dest('./app/img/'))
};