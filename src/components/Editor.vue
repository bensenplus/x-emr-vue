<template>
     <iframe src="editor.html" v-bind="objectOfAttrs"></iframe>
</template>

<script>
    export default {
     data() {
          return {
               objectOfAttrs:{
                    id:'editor',
                    frameborder: 0
               }
          }
     }
    }
</script>