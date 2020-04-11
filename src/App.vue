<template>
  <div id="app" :style="{height: screenHeight + 'px'}">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState('body', {
      screenHeight: state => state.screenHeight
    })
  },
  data: function () {
    return {
      
    }
  },
  mounted() {
    
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1000px;
}
</style>
