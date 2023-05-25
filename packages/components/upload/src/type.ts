export type FileType = {
  blobData: Blob | null,
  base64: string | null,
  file: {
    lastModified: number,
    // lastModifiedDate: Date,
    name: string,
    size: number,
    type: string,
    webkitRelativePath: string
  } | null
}