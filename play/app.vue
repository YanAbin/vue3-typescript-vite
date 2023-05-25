<template>
  <div class="app">
    <div class="box">
      <ct-button 
        type="primary" 
        size="small"
        @click="jump('/upload')"
      >
        Upload
      </ct-button>
      <ct-button 
        type="primary" 
        size="small"
        @click="jump('/form')"
      >
        Form
      </ct-button>
    </div>
    <router-view 
      class="view"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
let router = useRouter();

const jump = (path: string) => {
  router.push(path);
};
</script>

<style>
button {
  margin-right: 10px;
}
.view {
  margin-top: 20px;
}
</style>
