<template>
  <div class="index">
    <div class="left-side">
      <Card v-for="item in list" :key="item.id" style="margin-bottom: 10px;">
        <p slot="title" class="title">{{item.title}}</p>
        <div class="content">
          <p><span class="tag">{{item.date}}</span><Tag checkable color="primary" v-for="(i, index) in item.tags" :key="index">{{i}}</Tag></p>
          <p>{{item.content}}</p>
        </div>
      </Card>
    </div>
    <div class="right-side">
      
    </div>
  </div>
</template>
<script>
export default {
  name:"Index",
  data(){
    return {
      list: [
        {
          id: 0,
          title: '测试标题',
          content: '测试内容',
          date: '2020-01-01 12:12:12',
          tags: ['标签一', '标签二', '标签三']
        },
        {
          id: 1,
          title: '测试标题',
          content: '测试内容',
          date: '2020-01-01 12:12:12',
          tags: ['标签一', '标签二', '标签三']
        },
        {
          id: 2,
          title: '测试标题',
          content: '测试内容',
          date: '2020-01-01 12:12:12',
          tags: ['标签一', '标签二', '标签三']
        }
      ]
    }
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
  .index {
    height: 100%;
    .left-side {
      width: 75%;
      float: left;
      height: 100%;
      padding: 10px 5px 10px 10px;
      .title {
        font-size: 20px;
      }
      .content {
        .tag {
          margin-right: 10px;
        }
      }
    }
    .right-side {
      width: 25%;
      float: right;
      height: 100%;
      padding: 10px 10px 10px 5px;
    }
  }
</style>