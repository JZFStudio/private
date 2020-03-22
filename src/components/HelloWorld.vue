<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link to="/second" style="font-size: 20px; color: black">点击进入二级页面</router-link>
    <router-link to="/third">alias</router-link>
    <label for="username">姓名</label><input type="text" v-model="username" id="username">
    <label for="age">年龄</label><input type="text" v-model="age" id="age">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    second() {
      // return `/second/${this.username}/${this.age}/#/hash?_=123`
      return {
        name: 'SecondPage',
        params: {
          username: this.username,
          age: this.age
        },
        query: {
          _: 123
        },
        hash: '#/hash'
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      age: null
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
