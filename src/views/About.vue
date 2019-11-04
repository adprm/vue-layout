<template>
  <div>
    <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
    <div class>
      <router-link to="/karyawan">
        <el-button type="primary" round>Karyawan</el-button>
      </router-link>
      <router-link to="/kehadiran">
        <el-button type="primary" round>Kehadiran</el-button>
      </router-link>
      <router-link to="/cuti">
        <el-button type="primary" round>Cuti</el-button>
      </router-link>
      <router-link to="/gaji">
        <el-button type="primary" round>Gaji</el-button>
      </router-link>
    </div>

    <H1>test</H1>
  </div>
</template>
<script>
import MyTopBar from "../component/Topbar";
export default {
  components: {
    MyTopBar
  }
};
</script>