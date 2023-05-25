<template>
  <div 
    class="ct-upload" 
    @click="handleClick"
  >
    <input
      ref="uploadRef"
      class="ct-upload-input"
      type="file"
      @change="handleChange"
    />
    <span 
      v-if="!imgSrc" 
      class="ct-upload-icon"
    >+</span>
    <img 
      v-if="imgSrc" 
      :src="imgSrc" 
      class="ct-upload-img"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { fileToBase64, dataURIToBlob } from '@custom/utils';
import { FileType } from './type';
import { emitsEvent, propsType } from './upload';
const props = defineProps(propsType);
const emits = defineEmits(emitsEvent);
const fileList = ref<FileType[]>([]);
const imgSrc = ref();
defineOptions({
  name: 'CtUpload'
});
const uploadRef = ref<HTMLInputElement>();
const fileData = ref<FileType>({
  blobData: null,
  base64: null,
  file: null
});
const handleClick = () => {
  uploadRef.value?.click();
};
const handleChange = async (e: Event) => {
  const files = (e.target as HTMLInputElement).files;

  if (!files) return;

  let arr = Array.from(files);

  if (!numLimitValid(arr[0])) return;

  // if (!typeLimitValid(arr[0].type)) return;
  fileData.value.file = arr[0];
  fileData.value.base64 = await fileToBase64(arr[0]);
  fileData.value.blobData = dataURIToBlob(fileData.value.base64);
  fileList.value.push(fileData.value);
  console.log(fileData.value);
  if (fileData.value.file.type.split('/')[0] === 'image') {
    imgSrc.value = fileData.value.base64;
  } else {
    imgSrc.value = null;
  }
  if (!props.multiple) {
    fileList.value = fileList.value.slice(0, 1);
  }
  emits('onSuccess', fileData.value);
};
const numLimitValid = (file: File) => {
  let numLimit = props.limit;
  if (numLimit && fileList.value.length + 1 > numLimit && props.onExceed) {
    props.onExceed(file, fileList.value);
    return false;
  }
  return true;
};
// const typeLimitValid = (fileType: string) => {
//   let type = props.type;
//   if (!type) {
//     return true;
//   }
//   if (Array.isArray(type)) {
//     let index = type.findIndex(el => {
//       return el === fileType;
//     });
//     return index !== -1;
//   }
//   return fileType === type;
// };
</script>