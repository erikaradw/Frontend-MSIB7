<template>
  <!-- Footer -->
  <footer class="clearfix">
    <div class="pull-right">ERP MB</div>
    <div class="pull-left">2024 &copy; IT Corporate</div>
  </footer>
  <!-- END Footer -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      menu: ["footer"],
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      params: null,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
