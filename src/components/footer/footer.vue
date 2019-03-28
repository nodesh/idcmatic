<template>
  <footer class="idc-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'IdcFooter',

    componentName: 'IdcFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
