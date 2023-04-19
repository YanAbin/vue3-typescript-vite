import fs from 'fs';
import path from 'path';

/**
 * @param { copiedPath: String } (被复制文件的地址，相对地址)
 * @param { resultPath: String } (放置复制文件的地址，相对地址)
 */
export function copyFile(copiedPath: string, resultPath: string) {
  copiedPath = path.join(__dirname, copiedPath);
  resultPath = path.join(__dirname, resultPath);
  console.log(copiedPath, resultPath, 'resultPath');
  try {
    fs.copyFileSync(copiedPath, resultPath);
    console.log('success');
  } catch (error) {
    console.log(error);
  }
  /**
   * @des 方式三
   */
  fs.promises.copyFile(copiedPath, resultPath).then(() => {
    console.log('success');
  }).catch((err) => {
    console.log(err);
  });
}