<template>
     <iframe src="editor.html" v-bind="objectOfAttrs"></iframe>
</template>

<script>
    export default {
     data() {
          return {
               objectOfAttrs:{
                    width: '300px',
                    height: '300px',
                    id:'editor',
                    frameborder: 0
               }
          }
     }
    }
</script>