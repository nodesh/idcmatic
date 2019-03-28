<script type="jsx">
  export default {
    name: 'IdcTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        event.stopPropagation();
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size;
      }
    },
    render() {
      const classes = [
        'idc-tag',
        this.type ? `idc-tag--${this.type}` : '',
        this.tagSize ? `idc-tag--${this.tagSize}` : '',
        { 'is-hit': this.hit }
      ];
      const tagEl = (
        <span class={classes} style={{ backgroundColor: this.color }} on-click={this.handleClick}>
          {this.$slots.default}
          {
            this.closable && <i class="idc-tag__close idc-icon-close" on-click={this.handleClose}></i>
          }
        </span>
      );

      return this.disableTransitions ? tagEl : (<transition name="idc-zoom-in-center">{tagEl}</transition>);
    }
  };
</script>
