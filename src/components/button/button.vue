<template>
  <button class="idc-button"
          @click="handleClick"
          :disabled="disabled || loading"
          :autofocus="autofocus"
          :type="nativeType"
          :class="[
            type ? 'idc-button--' + type : '',
            size ? 'idc-button--' + size : '',
            {
              'is-disabled': disabled,
              'is-inline': inline,
              'is-loading': loading,
              'is-round': round,
              'is-circle': circle,
            }
          ]">
    <i class="idc-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      round: Boolean,
      circle: Boolean,
      inline: Boolean,
      autofocus: Boolean,
      disabled: Boolean,
      loading: Boolean,
      nativeType: {
        type: String,
        default: 'button'
      }
    },

    name: 'IdcButton',

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
