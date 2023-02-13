<script setup>
  import Editor from './components/Editor.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg"/>
    <br/>
    文档
    <ul>
      <li @click="openDoc(100)">评估表</li>
      <li @click="openDoc(101)">病案首页</li>
      <li @click="openDoc(102)">超声检查</li>
    </ul>
    命令
    <ul>
      <li @click="exec('form')">表单模式</li>
      <li @click="exec('design')">设计模式</li>
      <li @click="exec('print')">打印</li>
      <li @click="exec('preview')">打印预览</li>
      <li @click="exec('zoomout')">放大</li>
      <li @click="exec('zoomin')">缩小</li>
      <li @click="exec('fullscreen')">全屏</li>
    </ul>
    <br><br>
    <a href="https://gitee.com/bensenplus/x-emr-vue" target="_blank">源码下载</a>
  </header>
  <main>
      <Editor id="editor1" doc="/doc/100.html"/>
      <Editor id="editor2" doc="/doc/101.html"/>
      <Editor id="editor3" doc="/doc/102.html"/>
  </main>
</template>

<script>

  function openDoc(id){
    editor1.loadHtml('/doc/'+id+'.html', id)
  }

  function exec(cmd){
    editor1.execCommand(cmd)
  }
</script>

<style scoped>

li {
  cursor: pointer;
}
a {
  color: #ccc;
}
.logo {
    margin: 0 2rem 0 0;
}

main {
    height: 100%;
}

#editor1 { width: 100%; height: 50%;}
#editor2 { width: 50%; height: 50%;}
#editor3 { width: calc(50% - 6px); height: 50%; margin-left: 6px;}


@media (max-width: 1024px) {
ul,li {display: inline-block; padding-left: 15px;}
#editor1 { width: 100%; height: 100%;}
#editor2 { width: 100%; height: 100%;}
#editor3 { width: 100%; height: 100%; margin:0}

  .logo {
    width: 50px;
    margin: 0 2rem 0 0;
  }
}
</style>
