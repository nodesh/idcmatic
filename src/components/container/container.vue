<template>
  <div class="idc-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'IdcContainer',

    componentName: 'IdcContainer',

    props: {
      direction: String
    },

    computed: {
      isVertical() {
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'idc-header' || tag === 'idc-footer';
          })
          : false;
      }
    }
  };
</script>
