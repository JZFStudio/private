<template>
  <div class="index">
    <div class="left-side">
      <Carousel autoplay loop dots="none" arrow="never" @on-click="goTo" :radius-dot="true" style="cursor: pointer;">
        <CarouselItem v-for="item in iconList" :key="item.index">
          <img :src="item.src" :alt="item.alt" class="icon">
        </CarouselItem>
      </Carousel>
      <div class="intro">
        <p class="title">本站介绍</p>
        <div class="content">
          欢迎来到这里，目前还在搭建中，敬请期待！
        </div>
      </div>
      <div class="timeline">
        <Timeline pending>
          <TimelineItem>发布1.0版本</TimelineItem>
          <TimelineItem>发布2.0版本</TimelineItem>
          <TimelineItem>发布3.0版本</TimelineItem>
        </Timeline>
      </div>
    </div>
    <div class="right-side" ref="listContent" :style="{height: screenHeight - 133 + 'px'}">
      <Card v-for="item in showList" :key="item.id" style="margin-bottom: 10px; cursor: pointer;" :to="'/dev/' + item.id">
        <p slot="title" class="title">{{item.title}}</p>
        <div class="content">
          <p><span class="tag">{{item.date}}</span><Tag checkable color="primary" v-for="(i, index) in item.tags" :key="index">{{i}}</Tag></p>
          <p>{{item.content}}</p>
        </div>
      </Card>
      <Page :total="total" show-elevator show-total style="text-align: center;" @on-change="changePage"/>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name:"Index",
  data(){
    return {
      list: [],
      page: 1,
      showList: [],
      total: null,
      iconList: [
        {
          src: '../../../static/img/angular.jpeg',
          alt: 'angular',
          url: 'https://angular.cn/'
        },
        {
          src: '../../../static/img/iview.jpeg',
          alt: 'iview',
          url: 'https://www.iviewui.com/'
        },
        {
          src: '../../../static/img/less.jpeg',
          alt: 'less',
          url: 'http://lesscss.cn/'
        },
        {
          src: '../../../static/img/npm.jpeg',
          alt: 'npm',
          url: 'https://www.npmjs.com/'
        },
        {
          src: '../../../static/img/react.jpeg',
          alt: 'react',
          url: 'https://react.docschina.org/'
        },
        {
          src: '../../../static/img/vue.jpeg',
          alt: 'vue',
          url: 'https://cn.vuejs.org/'
        },
        {
          src: '../../../static/img/webpack.jpg',
          alt: 'webpack',
          url: 'https://www.webpackjs.com/'
        }
      ]
    }
  },
  computed: {
    ...mapState("body", {
      screenHeight: state => state.screenHeight
    })
  },
  methods:{
    changePage(page) {
      console.log('page', page);
      this.showList = this.list.slice((page - 1) * 10, page * 10);
      if (this.$refs.listContent) {
        this.$refs.listContent.scrollTop = 0;
      }
    },
    goTo(index) {
      console.log('goTo index', index);
      window.open(this.iconList[index].url, '_blank');
    }
  },
  created(){
    let total = 100, list = [];
    while (total > 0) {
      list.push({
        id: 100 - total,
        title: '测试标题' + (100 - total),
        content: '测试内容',
        date: '2020-01-01 12:12:12',
        tags: ['标签一', '标签二', '标签三']
      });
      total--;
    }
    this.list = list;
    this.showList = this.list.slice(0, 10);
    this.total = list.length;
  },
  mounted(){}
}
</script>
<style lang="less" scoped>
  .index {
    .left-side {
      width: 25%;
      float: left;
      padding: 10px 5px 10px 10px;
      text-align: center;
      .icon {
        max-width: 100%;
        max-height: 200px;
      }
      .intro {
        margin: 10px 0;
        border: 1px dashed #ccc;
        border-radius: 5px;
        padding: 5px;
        .title {
          font-size: 14px;
          font-weight: bold;
        }
      }
      .timeline {
        padding-top: 10px;
      }
    }
    .right-side {
      width: 75%;
      float: right;
      height: 100%;
      padding: 10px 10px 10px 5px;
      overflow: auto;
      .title {
        font-size: 20px;
      }
      .content {
        .tag {
          margin-right: 10px;
        }
      }
    }
  }
</style>