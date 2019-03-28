export default {
  name: 'IdcRow',

  componentName: 'IdcRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  render(h) {
    return h(this.tag, {
      class: [
        'idc-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'idc-row-flex': this.type === 'flex' }
      ]
    }, this.$slots.default);
  }
};
