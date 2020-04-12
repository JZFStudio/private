<template>
  <div class="dev">
    <Article :id="id" v-if="id"></Article>
  </div>
</template>
<script>
import Article from './article'
export default {
  name:"Dev",
  data(){
    return {
      id: null
    }
  },
  components: {
    Article
  },
  methods:{},
  created(){
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
  },
  mounted(){}
}
</script>
<style lang="less" scoped>
  
</style>