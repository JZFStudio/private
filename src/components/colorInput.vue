<template>
  <div class="color-input">
    <slot name="top">This is a top slot.</slot>
    <input type="text" maxlength="6" :value="curColor" @input="onChange"><span class="show-color" :style="{backgroundColor: '#' + curColor}"></span>
    <slot :inner="inner">this is a slot.</slot>

    <input type="text" v-focus placeholder="placeholder" v-model="directivesContent">
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'SecondPage',
  directives: {
    focus: {
      inserted: function (el, binding, vnode, oldVnode) {
        el.style.borderRadius = '5px';
      },
      componentUpdated: function (el) {
        el.style.borderRadius = '0'
      }
    }
  },
  prop: {
    value: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      curColor: this.value,
      inner: 'inner',
      directivesContent: 'directivesContent'
    }
  },
  computed: {
  },
  methods: {
    onChange($event) {
      this.curColor = $event.target.value;
      this.$emit('input', $event.target.value);
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .color-input {
    display: block;
    width: 166px;
    margin: 0 auto;
    position: relative;
    .show-color {
      position: absolute;
      width: 10px;
      height: 10px;
      display: inline-block;
      right: 20px;
      top: 20px;
      border: 1px solid #ccc;
    }
  }
</style>
