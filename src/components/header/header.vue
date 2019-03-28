<template>
  <header class="idc-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'IdcHeader',

    componentName: 'IdcHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
