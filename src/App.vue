<script setup>
  import Editor from './components/Editor.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg"/>
    <br/>
    <ul>
      <li @click="openDoc(100)">评估表</li>
      <li @click="openDoc(101)">病案首页</li>
      <li @click="openDoc(102)">超声检查</li>
      <br/>
      <li @click="execCommand('form')">表单模式</li>
      <li @click="execCommand('design')">设计模式</li>
      <br/>
      <li @click="execCommand('print')">打印</li>
      <li @click="execCommand('zoomout')">放大</li>
      <li @click="execCommand('zoomin')">缩小</li>
      <li @click="execCommand('fullscreen')">全屏</li>
    </ul>
  </header>
  <main>
      <Editor id="editor1" width="100%" height="50%" doc="/doc/100.html"/>
      <Editor id="editor2" width="50%"  height="50%" doc="/doc/101.html"/>
      &nbsp;
      <Editor id="editor3" style="width:calc(50% - 15px)"  height="50%" doc="/doc/102.html"/>
  </main>
</template>

<script>
  function openDoc(id){
    editor1.loadHtml('/doc/'+id+'.html', id)
  }

  function execCommand(cmd){
    editor1.execCommand(cmd)
  }
</script>

<style scoped>
.logo {
  display: block;
  margin: 0;
  width: 60px;
}

li {
  cursor: pointer;
}

@media (min-width: 1024px) {
  main,header {
    height: 100%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
