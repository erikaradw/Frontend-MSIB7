<template></template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    localStorage.setItem("token", "ABC");
    localStorage.setItem("unique", this.$root.encryptData("ABCDEFG1ABCDEFG1"));
    localStorage.setItem("name", this.$root.encryptData("NAMA ANDA"));
    localStorage.setItem(
      "halaman",
      //this.$root.encryptData("cmpHalDashboard")
      this.$root.encryptData("cmpHalProfile")
    );
    sessionStorage.setItem("first", 1);
    localStorage.setItem("registrasi", this.$root.encryptData("sudah"));

    const myObject = {
      userAvatar:
        this.$root.appBaseUrl + "/public/26954e5e29b5c77937e5098d3e817bb5.png",
      userEmail: "abc@marthana.co.id",
      userName: "NAMA ANDA",
      userUuid: "abc@marthana.co.id",
    };
    localStorage.setItem("uObject", JSON.stringify(myObject));

    location.reload();
  },
  methods: {},
};
</script>

<style scoped></style>
