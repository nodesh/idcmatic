<template>
  <aside class="idc-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'IdcAside',

    componentName: 'IdcAside',

    props: {
      width: {
        type: String,
        default: '200px'
      }
    }
  };
</script>
