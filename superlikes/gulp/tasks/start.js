/**
 * ローカルサーバーの起動、ファイルウォッチ用のタスク
 *
 * @author ICS-Kano
 */
// 設定ファイル
const config = require("../../build_config");
const taskName = require("../taskName");
const browserSync = require("browser-sync");

const gulp = require("gulp");

/**
 * ローカルサーバーのタスク設定
 */
gulp.task(taskName.start,
  gulp.series(
    gulp.parallel(
      taskName.scssCompile
    ),
    () => {
      startWatchTasks();
    }
  )
);

/**
 * ウォッチタスクを開始します。
 */
function startWatchTasks() {
  browserSync.init({
    server: {
      baseDir: "src" // ルートとなるディレクトリを指定
    },

    // 更新を監視する対象ファイル
    files: [`${config.srcFolder}/**/*.{html, js, css}`]
  });

  // Sassファイルのウォッチ
  gulp.watch([`${config.scssFolder}/**/*.scss`],
    gulp.parallel(
      taskName.scssCompile
    )
  );
}