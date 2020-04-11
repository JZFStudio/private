<template>
  <div class="home" style="height: 100%;">
    <Layout style="height: 100%;">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">Logo</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>首页
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>前端开发
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>其他
            </MenuItem>
            <div class="layout-search">
              <Input search enter-button placeholder="Enter something..." />
            </div>
          </div>
        </Menu>
      </Header>
      <Layout>
        <div :style="{height: screenHeight - 128 + 'px'}" style="background-color: #fff;">
          <router-view></router-view>
        </div>
      </Layout>
      <Footer style="text-align: center;">
        &copy;2020 Private. All rights reserved.
      </Footer>
    </Layout>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("body", {
      screenHeight: state => state.screenHeight,
      themeColor: state => state.themeColor
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
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav {
    padding-left: 150px;
  }
  .layout-nav:after {
    clear: both;
    content: '*';
    font-size: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .layout-search {
    width: 300px;
    float: right;
    position: relative;
    top: 15px;
  }
  .layout-footer-center {
    text-align: center;
  }
}
</style>
