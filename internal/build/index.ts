import delPath from '../utils/delPath';
import { copyFile } from '../utils/copyFile';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';


//删除文件
export const removeDist = () => {
  return delPath(`${pkgPath}`);
};

//复制文件
export const copyFiles = () => {
  return copyFile('../../packages/custom/package.json', '../../dist/package.json');
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/lib/src`))
    .pipe(dest(`${pkgPath}/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', '../..');
};

export default series(
  async () => removeDist(),
  async () => copyFiles(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  ),
);
