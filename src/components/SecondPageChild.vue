<template>
  <div class="second-page-child">
    <span>当前页码为：{{pageNum}}</span>

    <p v-for="item in list" :key="item.id" class="list">{{item.name}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import colorInput from './colorInput'
import {mapGetters, mapState, mapMutations} from 'vuex'

export default {
  name: 'SecondPageChild',
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
      while(n <= 1000) {
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
    this.updatePageNum({page: '2-1'});

    console.log(this.$route);
  },
  beforeRouteUpdate (to, from, next) {
    console.log('to', to);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .second-page-child {
    text-align: center;
    .list {
      height: 20px;
    }
  }
</style>
