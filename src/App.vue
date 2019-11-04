<template>
  <div id="app">
    <div id="nav">
      <router-link to="/menu">
        <el-button round>Menu</el-button>
      </router-link>
      <router-link to="/menu-active">
        <el-button type="primary" round>Active Menu</el-button>
      </router-link>
      <MyTopBar></MyTopBar>
    </div>
    <router-view />
  </div>
</template>

<script>
import MyTopBar from "./component/Topbar";
export default {
  components() {}
};
</script>

