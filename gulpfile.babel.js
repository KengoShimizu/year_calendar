// パッケージをインストール
import gulp from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import typescript from 'gulp-typescript';


//pug入力先、html出力先を記述
const paths = {
  src: {
    pug: "src/index.pug",
    scss: "src/scss/index.scss",
    ts: ["src/ts/index.ts"],
  },
  public: {
    html: "public/",
    css: "public/css/",
    js: "public/js/",
  },
};

const pugOptions = {
  pretty: true,
};

// pugコンパイル
function conpilePug() {
  gulp.src(paths.src.pug)
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(pug(pugOptions))
    .pipe(gulp.dest(paths.public.html));
}

// scssコンパイル
function conpileScss() {
  gulp.src(paths.src.scss)
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(sass(pugOptions))
    .pipe(gulp.dest(paths.public.css));
}

// typescriptコンパイル
function conpileTypescript() {
  gulp.src(paths.src.ts)
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(typescript({ target: "ES5", removeComments: true, sortOutput: true }))
    .pipe(gulp.dest(paths.public.js));
}

gulp.task("default", function(){
  gulp.watch(paths.src.pug, conpilePug());
  gulp.watch(paths.src.scss, conpileScss());
  gulp.watch(paths.src.ts, conpileTypescript());
});
