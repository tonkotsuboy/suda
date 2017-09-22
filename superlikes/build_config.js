/**
 * ビルドの設定ファイル
 *
 * @author ICS-Kano
 */
/** ソースフォルダ */
const SRC_FOLDER = "./src";

/** SCSSフォルダ */
const SCSS_FOLDER = `${SRC_FOLDER}/scss`;
/** 変換対象のSassファイル */
const SCSS_FILES = `${SCSS_FOLDER}/**.scss`;
/** 変換後のCSS格納フォルダ */
const CSS_FOLDER = `${SRC_FOLDER}/css`;

// moduleとしてexportする
module.exports = {
  srcFolder: SRC_FOLDER,
  scssFolder: SCSS_FOLDER,
  scssFile: SCSS_FILES,
  cssFolder: CSS_FOLDER
};