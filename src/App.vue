<script setup>
import Editor from './components/Editor.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <main>
      <Editor />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0;
  width: 60px;
}

@media (min-width: 1024px) {
  main,header {
    display: flex;
    place-items: flex-start;
    height: 100%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
