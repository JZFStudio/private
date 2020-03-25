<template>
  <div class="home" style="height: 100%;">
    <Layout style="height: 100%;">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '10px'}">
          <div :style="{height: screenHeight - 84 + 'px'}" style="background-color: #fff;">
            <router-view></router-view>
          </div>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("body", {
      screenHeight: state => state.screenHeight
    })
  },
  data() {
    return {
      activedItem: 0,
      navList: [
        {
          id: 0,
          label: "首页",
          path: "/index"
        },
        {
          id: 1,
          label: "基础",
          path: "/base"
        },
        {
          id: 2,
          label: "待命名",
          path: ""
        }
      ]
    };
  },
  methods: {
    goTo(item) {
      console.log("goTo", item);
      if (window.location.hash.indexOf(item.path) === -1) {
        this.$router.push(item.path);
        this.activedItem = item.id;
      }
    }
  },
  created() {
    this.$router.push('/index');
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
  .head {
    height: 60px;
    background-color: #909399;
    .content {
      float: right;
      height: 60px;
      .content-list {
        list-style: none;
        margin: 0;
        li {
          display: inline-block;
          padding: 0 10px;
          text-align: center;
          margin-right: 10px;
          line-height: 60px;
          color: #fff;
          cursor: pointer;
        }
        .active {
          background-color: #409eff;
        }
      }
    }
  }
  .footer {
    text-align: center;
    line-height: 60px;
  }
}
</style>
