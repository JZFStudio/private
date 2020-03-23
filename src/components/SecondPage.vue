<template>
  <div class="second-page">
    <button @click="show">显示</button>
    <color-input v-model.number="selectionItem.color1">
      <span style="color: red;">color1 {{inner}}</span>
      <div slot="top">This is top slot div.</div>
    </color-input>
    <color-input v-model.trim="selectionItem.color2">
      color2
    </color-input>

    <span>当前页码为：{{pageNum}}</span>

    <p v-for="item in list" :key="item.id" class="list">{{item.name}}</p>
    
    <router-link to="/third">去子页</router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import colorInput from './colorInput'
import {mapGetters, mapState, mapMutations} from 'vuex'

export default {
  name: 'SecondPage',
  components: {
    colorInput
  },
  data () {
    return {
      obj: {
        a: 'aaa'
      },
      selectionItem: {
        color1: '',
        color2: ''
      },
      inner: 'ourter'
    }
  },
  computed: {
    ...mapGetters([
      'page'
    ]),
    ...mapState([
      'pageNum'
    ]),
    list() {
      let ary = [], n = 0;
      while(n <= 100) {
        ary.push({
          id: ++n,
          name: 'This is the ' + n + ' floor.'
        })
      }
      console.log(ary);
      return ary;
    }
  },
  methods: {
    ...mapMutations([
      'updatePageNum'
    ]),
    show() {
      console.log('提交的颜色分别为：', this.selectionItem);
    }
  },
  mounted() {
    
  },
  created() {
    this.updatePageNum({page: 2});

    console.log(this.$route);

    console.log('second page created');
  },
  beforeRouteUpdate (to, from, next) {
    console.log('to', to);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .second-page {
    text-align: center;
    .list {
      height: 20px;
    }
  }
</style>
