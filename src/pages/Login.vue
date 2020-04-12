<template>
  <div class="login" :style="{height: screenHeight + 'px'}">
    <div class="input-area">
      <p class="title">欢迎来访</p>
      <p class="item-row">
        <label for="username" class="label">用户名</label>： <Input style="width: 300px;" id="username" suffix-icon="el-icon-user" v-model="username" />
      </p>
      <p class="item-row">
        <label for="password" class="label">密码</label>： <Input style="width: 300px;" id="password" show-password v-model="password"></Input>
      </p>
      <p class="remeber">
        <span><Checkbox style="margin-right: 5px;" v-model="remeberMe"><span style="color: #fff;">记住我</span></Checkbox></span> <Button size="small" @click="login">登录</Button>
      </p>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import utils from '../libs/utils'

export default {
  name:"Login",
  computed: {
    ...mapState('body', {
      screenHeight: state => state.screenHeight
    })
  },
  data(){
    return {
      username: '',
      password: '',
      remeberMe: false
    }
  },
  methods:{
    login() {
      let msg = '';
      if (!this.username) {
        msg = msg || '用户名不能为空';
      }
      if (!this.password) {
        msg = msg || '密码不能为空';
      }
      if (msg) {
        return this.$message({
          message: msg,
          type: 'warning'
        });
      }
      utils.setCookie('username', this.username, this.remeberMe ? 24 * 3600 : 3600);
      utils.setCookie('password', this.password, this.remeberMe ? 24 * 3600 : 3600);
      this.$router.push({path: '/home/index'});
    }
  },
  created(){
    if (utils.checkLogin()) {
      this.$router.replace({path: '/home/index'});
    }
  },
  mounted(){
    // console.log('screenHeight', this.screenHeight);
  }
}
</script>
<style lang="less" scoped>
  .login {
    background: url('../../static/img/login.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .input-area {
      box-sizing: border-box;
      width: 500px;
      height: 280px;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, .2);
      color: #fff;
      .title {
        text-align: center;
        font-size: 20px;
        line-height: 100px;;
      }
      .item-row {
        margin-bottom: 20px;
        .label {
          padding-left: 50px;
          text-align-last: justify;
          width: 100px;
          display: inline-block;
        }
      }
      .remeber {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
      }
    }
  }
</style>