<template>
  <div class="article">
    {{id}}
  </div>
</template>
<script>
export default {
  name:"Article",
  data(){
    return {
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
  
</style>