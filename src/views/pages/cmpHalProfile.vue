<template>
  <!-- Main Container -->

  <!-- Page content -->
  <div id="page-content">
    <!--------------------------------------------------->
    <div class="row">
      <div class="col-lg-12"></div>
    </div>

    <!--------------------------------------------------->

    <!-- Orders and Products -->
    <div class="row">
      <div class="col-lg-4">
        <!-- Latest Orders Block -->
        <div class="block">
          <!-- Latest Orders Title -->
          <div class="block-title">
            <h2><strong>Foto Profil</strong></h2>
          </div>
          <!-- END Latest Orders Title -->

          <!-- Latest Orders Content -->
          <div class="block-section text-center">
            <a href="javascript:void(0)">
              <img :src="vModelAvatar" alt="avatar" class="img-circle" />
            </a>
            <h3>
              <strong>{{ model.profile.name }}</strong
              ><br /><small></small>
            </h3>
          </div>
          <table class="table table-borderless table-striped table-vcenter">
            <tbody>
              <tr>
                <td class="text-right col-lg-5">
                  <strong>Status Registrasi</strong>
                </td>
                <td>
                  <template v-if="isHiddenRegistrasi">
                    <img :src="loadingBar" width="100" />
                  </template>
                  <template v-else>
                    <template v-if="isRegistrasi != 'sudah'">
                      <span class="label label-danger">Belum Teregistrasi</span>
                    </template>
                    <template v-else>
                      <span class="label label-success"
                        >Sudah Teregistrasi</span
                      ></template
                    >
                  </template>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <strong>Status User</strong>
                </td>
                <td>
                  <template v-if="isHiddenRegistrasi">
                    <img :src="loadingBar" width="100" />
                  </template>
                  <template v-else>
                    <template v-if="isRegistrasi != 'sudah'">
                      <span class="label label-danger">Belum Aktif</span>
                    </template>
                    <template v-else>
                      <span class="label label-success">Aktif</span></template
                    >
                  </template>
                </td>
              </tr>

              <tr>
                <td class="text-right col-lg-5">
                  <strong>Themes</strong>
                </td>
                <td>
                  <ul
                    class="sidebar-section sidebar-themes clearfix sidebar-nav-mini-hide"
                    style="background: white"
                  >
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-night themed-border-night"
                        data-theme="css/themes/night.css"
                        data-toggle="tooltip"
                        title="Night"
                        @click="$root.changeColorBG('night.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-amethyst themed-border-amethyst"
                        data-theme="css/themes/amethyst.css"
                        data-toggle="tooltip"
                        title="Amethyst"
                        @click="$root.changeColorBG('amethyst.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-modern themed-border-modern"
                        data-theme="css/themes/modern.css"
                        data-toggle="tooltip"
                        title="Modern"
                        @click="$root.changeColorBG('modern.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-autumn themed-border-autumn"
                        data-theme="css/themes/autumn.css"
                        data-toggle="tooltip"
                        title="Autumn"
                        @click="$root.changeColorBG('autumn.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-flatie themed-border-flatie"
                        data-theme="css/themes/flatie.css"
                        data-toggle="tooltip"
                        title="Flatie"
                        @click="$root.changeColorBG('flatie.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-spring themed-border-spring"
                        data-theme="css/themes/spring.css"
                        data-toggle="tooltip"
                        title="Spring"
                        @click="$root.changeColorBG('spring.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-fancy themed-border-fancy"
                        data-theme="css/themes/fancy.css"
                        data-toggle="tooltip"
                        title="Fancy"
                        @click="$root.changeColorBG('fancy.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-fire themed-border-fire"
                        data-theme="css/themes/fire.css"
                        data-toggle="tooltip"
                        title="Fire"
                        @click="$root.changeColorBG('fire.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-coral themed-border-coral"
                        data-theme="css/themes/coral.css"
                        data-toggle="tooltip"
                        title="Coral"
                        @click="$root.changeColorBG('coral.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-lake themed-border-lake"
                        data-theme="css/themes/lake.css"
                        data-toggle="tooltip"
                        title="Lake"
                        @click="$root.changeColorBG('lake.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-forest themed-border-forest"
                        data-theme="css/themes/forest.css"
                        data-toggle="tooltip"
                        title="Forest"
                        @click="$root.changeColorBG('forest.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-waterlily themed-border-waterlily"
                        data-theme="css/themes/waterlily.css"
                        data-toggle="tooltip"
                        title="Waterlily"
                        @click="$root.changeColorBG('waterlily.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-emerald themed-border-emerald"
                        data-theme="css/themes/emerald.css"
                        data-toggle="tooltip"
                        title="Emerald"
                        @click="$root.changeColorBG('emerald.css')"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="themed-background-dark-blackberry themed-border-blackberry"
                        data-theme="css/themes/blackberry.css"
                        data-toggle="tooltip"
                        title="Blackberry"
                        @click="$root.changeColorBG('blackberry.css')"
                      ></a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <button @click="sendNotif" class="btn btn-primary">
                    Click me
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- END Latest Orders Content -->
        </div>
        <!-- END Latest Orders Block -->
      </div>

      <div class="col-lg-8">
        <!-- Top Products Block -->
        <div class="block">
          <!-- Top Products Title -->
          <div class="block-title">
            <h2><strong>Detail Account</strong></h2>
          </div>
          <!-- END Top Products Title -->

          <!-- Top Products Content -->
          <div class="form-horizontal form-bordered">
            <div class="form-group text-center">
              <div class="col-md-12">
                <QRCodeVue3
                  v-bind:image="iconUrl"
                  :width="200"
                  :height="200"
                  value="ABCDEFGHIJKMLMONPQRSTUVWXYZ"
                  :qrOptions="{
                    typeNumber: 0,
                    mode: 'Byte',
                    errorCorrectionLevel: 'H',
                  }"
                  :imageOptions="{
                    hideBackgroundDots: true,
                    imageSize: 0.4,
                    margin: 0,
                  }"
                  :dotsOptions="{
                    type: 'dots',
                    color: '#394263',
                    gradient: {
                      type: 'linear',
                      rotation: 0,
                      colorStops: [
                        { offset: 0, color: '#26249a' },
                        { offset: 1, color: '#26249a' },
                      ],
                    },
                  }"
                  :backgroundOptions="{ color: '#ffffff' }"
                  :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
                  :cornersDotOptions="{ type: undefined, color: '#000000' }"
                />

                <h3>
                  <strong>ID User</strong><br /><small>{{
                    model.profile.uuid
                  }}</small>
                </h3>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-3 control-label" for="example-hf-email"
                >Email</label
              >
              <div class="col-md-9">
                <CmpInputText
                  id="email"
                  name="email"
                  type="text"
                  v-model="model.profile.email"
                  placeholder="Input first"
                  readonly
                />
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-3 control-label" for="example-hf-email"
                >Name</label
              >
              <div class="col-md-9">
                <CmpInputText
                  id="name"
                  name="name"
                  type="text"
                  v-model="model.profile.name"
                  placeholder="Input first"
                  readonly
                />
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-3 control-label" for="example-hf-email"
                >Phone Ext</label
              >
              <div class="col-md-9">
                <CmpInputText
                  id="phone"
                  name="phone"
                  type="text"
                  v-model="model.profile.phone"
                  placeholder="Input first"
                  readonly
                />
              </div>
            </div>
          </div>
          <!-- END Top Products Content -->
        </div>
        <!-- END Top Products Block -->
      </div>
    </div>

    <!-- END Orders and Products -->
  </div>
  <!-- END Page Content -->

  <!-- END Main Container -->
  <!-- </div> -->
</template>

<script>
import axios from "axios";
import { markRaw } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import cmpHalLogout from "@/views/auth/_logout.vue";
// import footerLayout from "@/views/template/_footer.vue";

import CmpInputText from "@/components/inputText/inputText.vue";

import imageX from "@/assets/img/avatar@2x.jpg";

import LoadingX from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import QRCodeVue3 from "qrcode-vue3";

import loadingBar from "@/assets/img/Moving_train.gif";
import iconUrl from "@/assets/img/logo_mtg.png";

import { Device } from "@capacitor/device";

export default {
  components: { LoadingX, CmpInputText, QRCodeVue3 },
  data() {
    return {
      iconUrl: iconUrl,
      isLoading: false,
      errorList: "",
      isHidden: false,
      isHiddenRegistrasi: true,
      loadingBar: loadingBar,
      howDismissibleAlert: false,
      returnApiEmail: "",
      name: "QRCodeVue3Example",
      name: "dashboard",
      // logoutLayout: markRaw(cmpHalLogout),
      // footerLayout: markRaw(footerLayout),
      token: localStorage.getItem("token"),
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      params: null,
      first: null,
      imageX: imageX,
      vModelAvatar: null,
      isRegistrasi: null,
      model: {
        profile: {
          uuid: null,
          email: null,
          name: null,
          phone: null,
          password_old: null,
          password: null,
          password_reenter: null,
        },
      },

      errorField: {
        id: false,
        description: false,
        status: false,
      },

      showPassword: false,
      showPassword_old: false,
      showPassword_reenter: false,

      rules: [
        { message: "One lowercase letter required.", regex: /[a-z]+/ },
        { message: "One uppercase letter required.", regex: /[A-Z]+/ },
        { message: "8 characters minimum.", regex: /.{8,}/ },
        { message: "One number required.", regex: /[0-9]+/ },
      ],

      password: "",
      password_old: "",
      checkPassword: "",
      passwordVisible: false,
      submitted: false,

      modal: false,

      device_info: "",
      userid: 0,
    };
  },
  created() {
    // let uObject = JSON.parse(localStorage.getItem("uObject"));
    // this.model.profile.uuid = uObject.userUuid;
  },
  async mounted() {
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.isHiddenRegistrasi = false;
    await this.settingConfig();
    this.welcomeinfo();

    this.isRegistrasi = this.$root.decryptData(
      localStorage.getItem("registrasi")
    );
  },
  computed: {
    notSamePasswords() {
      if (this.passwordsFilled) {
        return this.password !== this.checkPassword;
      } else {
        return false;
      }
    },
    passwordsFilled() {
      return this.password !== "" && this.checkPassword !== "";
    },
    passwordValidation() {
      let errors = [];
      for (let condition of this.rules) {
        if (!condition.regex.test(this.password)) {
          errors.push(condition.message);
        }
      }
      if (errors.length === 0) {
        return { valid: true, errors };
      } else {
        return { valid: false, errors };
      }
    },
  },
  methods: {
    sendNotif() {
      // alert("hello world");
      this.$root.sendNotifFirebase("haloo", "reza ganteng");
    },
    welcomeinfo() {
      this.first = sessionStorage.getItem("first");
      if (this.first == 1) {
        toast.info(
          "Hi, " +
            this.$root.decryptData(localStorage.getItem("name")) +
            ". Welcome!",
          {
            theme: "colored",
            position: "top-center",
            transition: "flip",
          }
        );
        sessionStorage.clear();
      }
    },
    saveDeviceLogin(device_info, user_id, info) {
      const mythis = this;
      const AuthStr = "bearer " + localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: AuthStr,
        },
      };
      var url = mythis.$root.apiHostJWT + "user/logUsers";
      axios
        .post(
          url,
          {
            id_users: user_id,
            user_info: device_info,
            info: info,
          },
          config
        )
        .then((res) => {
          console.log(res);
        })
        .catch(function (error) {
          alert(error);
        });
    },
    async settingConfig() {
      await this.$root.presentLoading();
      let uObject = JSON.parse(localStorage.getItem("uObject"));
      this.vModelAvatar = uObject.userAvatar;
      this.model.profile.name = uObject.userName;
      this.model.profile.phone = uObject.userPhone;
      this.model.profile.email = uObject.userEmail;
      await this.$root.stopLoading();
    },
    show_modal() {
      this.modal = !this.modal;
    },
    timerExp() {
      toast.info(
        "Your session will be expired in 5 seconds. Please Re-Login.",
        { theme: "colored" }
      );
      setTimeout(this.$root.endSesi, 5000);
    },
    async changePassPresent() {
      var idx = this.$root.decryptData(localStorage.getItem("unique"));
      const myArray = idx.split("ABCDEFG");
      let word = myArray[1];

      Swal.fire({
        title: "Change Password",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Change Password!",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.changePass(
            //localStorage.getItem("unique"),
            word,
            this.model.profile.email,
            this.password_old,
            this.password
          );
        }
      });
    },
    async changePass(id, email, oldpass, pass) {
      var mythis = this;
      //mythis.$root.presentLoading();

      mythis.$root.flagButtonLoading = true;

      await this.$root.refreshToken(localStorage.getItem("token"));

      const that = this;
      const AuthStr = "bearer " + localStorage.getItem("token");
      const URL = this.$root.apiHostJWT + "user/update/" + id;

      const config = {
        headers: {
          Authorization: AuthStr,
        },
      };

      await axios
        .put(
          URL,
          {
            password: oldpass,
            email: email,
            newpass: pass,
          },
          config
        )
        .then(async (res) => {
          //console.log(res);
          await mythis.$root.stopLoading();
          mythis.$root.flagButtonLoading = false;
          await mythis.$root.sleep(500);
          // mythis.$root.presentAlert(
          //   "Update Password Success",
          //   res.data.message
          // );

          toast.success("Update Password Success", { theme: "colored" });
          mythis.timerExp();
        })
        .catch(async function (error) {
          //console.log(error);
          await mythis.$root.stopLoading();
          mythis.$root.flagButtonLoading = false;
          // //console.log(error);
          // mythis.$root.presentAlert(
          //   "Update Password Failed",
          //   error.response.data.message
          // );
          toast.error("Update Password Failed", { theme: "colored" });
          toast.error(error.response.data.message, { theme: "colored" });
        });

      mythis.password = "";
      mythis.password_old = "";
      mythis.checkPassword = "";
      //mythis.txtInput.password1 = "";

      mythis.model.profile.email = "";
    },
    // registrasiProfile() {
    //   var mythis = this;
    //   mythis.isHidden = true;
    //   ////console.log(mythis.model.profile);
    //   axios
    //     .post(mythis.$root.apiHost + "api/registrasi", mythis.model.profile)
    //     .then((res) => {
    //       //console.log(res);
    //       mythis.isLoading = true;
    //       if (res.status == 200) {
    //         Swal.fire({
    //           icon: "success",
    //           title: "Terima kasih,",
    //           text: "User Anda telah terdaftar sebelumnya",
    //           showCancelButton: false,
    //           confirmButtonColor: "#3085d6",
    //           cancelButtonColor: "#d33",
    //           confirmButtonText: "Ok",
    //           allowOutsideClick: false,
    //         }).then((result) => {
    //           if (result.isConfirmed) {
    //             //localStorage.setItem("registrasi", 1);
    //             localStorage.setItem(
    //               "registrasi",
    //               mythis.$root.encryptData("sudah")
    //             );
    //             location.reload();
    //           }
    //         });
    //       } else {
    //         Swal.fire({
    //           icon: "success",
    //           title: "Terima kasih,",
    //           text: "User Anda telah ter-registrasi",
    //           showCancelButton: false,
    //           confirmButtonColor: "#3085d6",
    //           cancelButtonColor: "#d33",
    //           confirmButtonText: "Ok",
    //           allowOutsideClick: false,
    //         }).then((result) => {
    //           if (result.isConfirmed) {
    //             //localStorage.setItem("registrasi", 1);
    //             localStorage.setItem(
    //               "registrasi",
    //               mythis.$root.encryptData("sudah")
    //             );
    //             location.reload();
    //           }
    //         });
    //       }

    //       mythis.isHidden = false;
    //     })
    //     .catch(function (error) {
    //       if (error.response) {
    //         //console.log(error.response.data);
    //         if (error.response.status == 422) {
    //           mythis.errorList = error.response.data;
    //           mythis.isHidden = false;
    //           if (Object.keys(mythis.errorList).length > 0) {
    //             Object.keys(mythis.errorList).forEach(function (key) {
    //               ////console.log(key, mythis.errorList[key]);
    //               toast.error(mythis.errorList[key], { theme: "colored" });
    //             });
    //           }
    //         }
    //         // The request was made and the server responded with a status code
    //         // that falls out of the range of 2xx
    //         // //console.log(error.response.data);
    //         // //console.log(error.response.status);
    //         // //console.log(error.response.headers);
    //       } else if (error.request) {
    //         // The request was made but no response was received
    //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //         // http.ClientRequest in node.js
    //         //console.log(error.request);
    //       } else {
    //         // Something happened in setting up the request that triggered an Error
    //         //console.log("Error", error.message);
    //       }
    //     });
    // },

    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow_old() {
      this.showPassword_old = !this.showPassword_old;
    },
    toggleShow_reenter() {
      this.showPassword_reenter = !this.showPassword_reenter;
    },
  },
};
</script>

<style scoped>
.fas {
  cursor: pointer;
}
.input-error {
  border: red 1px solid;
}
</style>
