<template>
  <div id="app">
    <div id="nav">
      <div class="links">
        <router-link to="/red">RED</router-link>
      </div>
      <div class="links">
        <router-link to="/yellow">YELLOW</router-link>
      </div>
      <div class="links">
        <router-link to="/green">GREEN</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #181A1B;
}

.links {
  margin-left: 5px;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    font-weight: bold;
    color: rgb(174, 194, 211);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
