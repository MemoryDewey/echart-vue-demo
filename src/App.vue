<template>
  <div id="app">
    <el-container>
      <el-header class="app-header"></el-header>
      <el-container>
        <el-aside>
          <el-menu router :default-active="menu[0].path">
            <el-menu-item v-for="{path, title} of menu" :key="path" :index="path">
              <template #title>
                {{ title }}
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {routes} from "@/router";

export default {
  computed: {
    menu() {
      return routes.filter(val => val.component).map(val => ({
        title: val.meta.title,
        path: val.path,
      }))
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

.app-header {
  background-color: aqua;
}

</style>
