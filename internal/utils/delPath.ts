import { resolve } from 'path';
import fs from 'fs';
import { pkgPath } from './paths';

const stayFiles = ['package.json', 'README.md'];

const delPath = async (path: string) => {
  let files: string[] = [];
  
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(async file => {
      const curPath = resolve(path, file);
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete file
        if (!stayFiles.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path !== `${pkgPath}/custom`) fs.rmdirSync(path);
  }
};

export default delPath;
