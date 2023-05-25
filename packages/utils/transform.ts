/**
 * 文件转base64
 * @param file 文件
 * @returns base64
 */
export function fileToBase64(file: File) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
  });
}
/**
 * base64转blob
 * @param dataURI base64
 * @returns 
 */
export function dataURIToBlob(dataURI: string) {
  const byteString = window.atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];  
  const ab = new ArrayBuffer(byteString.length);  
  const ia = new Uint8Array(ab);  
  for (let i = 0; i < byteString.length; i++) {  
    ia[i] = byteString.charCodeAt(i);  
  }  
  return new Blob([ab], {type: mimeString});  
}