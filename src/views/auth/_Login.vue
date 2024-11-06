<template>
  <div id="login-container" class="animation-fadeIn" style="top: 50px">
    <!-- Login Title -->
    <div class="login-title text-center" style="background-color: #ffffff">
      <img :src="imageUrl" alt="avatar" class="widget-image" width="250" />
      <!-- <h1>Login Form</h1> -->
    </div>
    <!-- END Login Title -->

    <!-- Login Block -->
    <div class="block push-bit">
      <!-- Login Form -->
      <div class="form-horizontal form-bordered">
        <div class="form-group">
          <div class="col-xs-12">
            <div class="input-group">
              <span class="input-group-addon" style="border-color: #6c6c6c"
                ><i class="gi gi-envelope"></i
              ></span>
              <CmpInputText
                id="email"
                name="email"
                type="text"
                v-model="email"
                placeholder="Email"
                :class="
                  errorField.email
                    ? 'form-control input-lg input-error'
                    : 'form-control input-lg'
                "
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12">
            <div class="input-group">
              <span class="input-group-addon" style="border-color: #6c6c6c"
                ><i class="gi gi-asterisk"></i
              ></span>

              <CmpInputText
                id="password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Password"
                :class="
                  errorField.password
                    ? 'form-control input-lg input-error'
                    : 'form-control input-lg'
                "
              />

              <span class="input-group-addon" style="border-color: #6c6c6c"
                ><i
                  @click="toggleShow"
                  class="fas"
                  :class="{
                    'gi gi-eye_close': showPassword,
                    'gi gi-eye_open': !showPassword,
                  }"
                ></i>
              </span>
            </div>
          </div>
        </div>

        <div class="form-group form-actions">
          <div class="col-xs-12 text-center">
            <button
              type="button"
              class="btn btn-lg btn-primary btn-block"
              @click="login"
              :disabled="$root.flagButtonLoading"
            >
              <i
                v-if="$root.flagButtonLoading"
                class="fa fa-spinner fa-spin text-default"
              ></i>
              Sign In
            </button>
          </div>
        </div>
      </div>
      <!-- END Login Form -->
    </div>
    <!-- END Login Block -->
  </div>
  <!-- END Login Container -->

  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1536 714"
      preserveAspectRatio="xMidYMid"
      width="1536"
      height="714"
      style="
        background-color: #ecd285;
        shape-rendering: auto;
        display: block;
        background-position-x: 0%;
        background-position-y: 0%;
        background-size: auto;
        background-origin: padding-box;
        background-clip: border-box;
        width: 1536px;
        height: 714px;
      "
    >
      <defs>
        <linearGradient id="lg-o578w6yh81n" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#e56b00"></stop>
          <stop offset="1" stop-color="#ffd54c"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          opacity="0.4"
          fill="url(#lg-o578w6yh81n)"
          d="M 0 0 L 0 483.15 Q 153.6 464.97 307.2 444.97 T 614.4 340.43 T 921.6 307.87 T 1228.8 356.83 T 1536 282.94 L 1536 0 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
        M 0 0 L 0 483.15 Q 153.6 464.97 307.2 444.97 T 614.4 340.43 T 921.6 307.87 T 1228.8 356.83 T 1536 282.94 L 1536 0 Z;
        M 0 0 L 0 488.423 Q 153.6 423.88 307.2 399.159 T 614.4 417.02 T 921.6 325.007 T 1228.8 353.998 T 1536 278.765 L 1536 0 Z;
        M 0 0 L 0 511.17 Q 153.6 438.853 307.2 417.506 T 614.4 351.648 T 921.6 361.298 T 1228.8 227.621 T 1536 178.912 L 1536 0 Z;
        M 0 0 L 0 446.388 Q 153.6 433.641 307.2 408.817 T 614.4 356.997 T 921.6 291.757 T 1228.8 233.212 T 1536 233.598 L 1536 0 Z;
        M 0 0 L 0 483.15 Q 153.6 464.97 307.2 444.97 T 614.4 340.43 T 921.6 307.87 T 1228.8 356.83 T 1536 282.94 L 1536 0 Z
      "
          />
        </path>
        <path
          opacity="0.4"
          fill="url(#lg-o578w6yh81n)"
          d="M 0 0 L 0 446.388 Q 153.6 433.641 307.2 408.817 T 614.4 356.997 T 921.6 291.757 T 1228.8 233.212 T 1536 233.598 L 1536 0 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
        M 0 0 L 0 446.388 Q 153.6 433.641 307.2 408.817 T 614.4 356.997 T 921.6 291.757 T 1228.8 233.212 T 1536 233.598 L 1536 0 Z;
        M 0 0 L 0 457.703 Q 153.6 503.262 307.2 479.042 T 614.4 319.734 T 921.6 348.609 T 1228.8 270.326 T 1536 220.425 L 1536 0 Z;
        M 0 0 L 0 488.423 Q 153.6 423.88 307.2 399.159 T 614.4 417.02 T 921.6 325.007 T 1228.8 353.998 T 1536 278.765 L 1536 0 Z;
        M 0 0 L 0 511.17 Q 153.6 438.853 307.2 417.506 T 614.4 351.648 T 921.6 361.298 T 1228.8 227.621 T 1536 178.912 L 1536 0 Z;
        M 0 0 L 0 446.388 Q 153.6 433.641 307.2 408.817 T 614.4 356.997 T 921.6 291.757 T 1228.8 233.212 T 1536 233.598 L 1536 0 Z
      "
          />
        </path>
        <path
          opacity="0.4"
          fill="url(#lg-o578w6yh81n)"
          d="M 0 0 L 0 457.703 Q 153.6 503.262 307.2 479.042 T 614.4 319.734 T 921.6 348.609 T 1228.8 270.326 T 1536 220.425 L 1536 0 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
        M 0 0 L 0 457.703 Q 153.6 503.262 307.2 479.042 T 614.4 319.734 T 921.6 348.609 T 1228.8 270.326 T 1536 220.425 L 1536 0 Z;
        M 0 0 L 0 511.17 Q 153.6 438.853 307.2 417.506 T 614.4 351.648 T 921.6 361.298 T 1228.8 227.621 T 1536 178.912 L 1536 0 Z;
        M 0 0 L 0 488.423 Q 153.6 423.88 307.2 399.159 T 614.4 417.02 T 921.6 325.007 T 1228.8 353.998 T 1536 278.765 L 1536 0 Z;
        M 0 0 L 0 483.15 Q 153.6 464.97 307.2 444.97 T 614.4 340.43 T 921.6 307.87 T 1228.8 356.83 T 1536 282.94 L 1536 0 Z;
        M 0 0 L 0 457.703 Q 153.6 503.262 307.2 479.042 T 614.4 319.734 T 921.6 348.609 T 1228.8 270.326 T 1536 220.425 L 1536 0 Z
      "
          />
        </path>
        <path
          opacity="0.4"
          fill="url(#lg-o578w6yh81n)"
          d="M 0 0 L 0 488.423 Q 153.6 423.88 307.2 399.159 T 614.4 417.02 T 921.6 325.007 T 1228.8 353.998 T 1536 278.765 L 1536 0 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
        M 0 0 L 0 488.423 Q 153.6 423.88 307.2 399.159 T 614.4 417.02 T 921.6 325.007 T 1228.8 353.998 T 1536 278.765 L 1536 0 Z;
        M 0 0 L 0 511.17 Q 153.6 438.853 307.2 417.506 T 614.4 351.648 T 921.6 361.298 T 1228.8 227.621 T 1536 178.912 L 1536 0 Z;
        M 0 0 L 0 446.388 Q 153.6 433.641 307.2 408.817 T 614.4 356.997 T 921.6 291.757 T 1228.8 233.212 T 1536 233.598 L 1536 0 Z;
        M 0 0 L 0 457.703 Q 153.6 503.262 307.2 479.042 T 614.4 319.734 T 921.6 348.609 T 1228.8 270.326 T 1536 220.425 L 1536 0 Z;
        M 0 0 L 0 488.423 Q 153.6 423.88 307.2 399.159 T 614.4 417.02 T 921.6 325.007 T 1228.8 353.998 T 1536 278.765 L 1536 0 Z
      "
          />
        </path>
        <path
          opacity="0.4"
          fill="url(#lg-o578w6yh81n)"
          d="M 0 0 L 0 511.17 Q 153.6 438.853 307.2 417.506 T 614.4 351.648 T 921.6 361.298 T 1228.8 227.621 T 1536 178.912 L 1536 0 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
        M 0 0 L 0 511.17 Q 153.6 438.853 307.2 417.506 T 614.4 351.648 T 921.6 361.298 T 1228.8 227.621 T 1536 178.912 L 1536 0 Z;
        M 0 0 L 0 446.388 Q 153.6 433.641 307.2 408.817 T 614.4 356.997 T 921.6 291.757 T 1228.8 233.212 T 1536 233.598 L 1536 0 Z;
        M 0 0 L 0 457.703 Q 153.6 503.262 307.2 479.042 T 614.4 319.734 T 921.6 348.609 T 1228.8 270.326 T 1536 220.425 L 1536 0 Z;
        M 0 0 L 0 488.423 Q 153.6 423.88 307.2 399.159 T 614.4 417.02 T 921.6 325.007 T 1228.8 353.998 T 1536 278.765 L 1536 0 Z;
        M 0 0 L 0 511.17 Q 153.6 438.853 307.2 417.506 T 614.4 351.648 T 921.6 361.298 T 1228.8 227.621 T 1536 178.912 L 1536 0 Z
      "
          />
        </path>
      </g>
    </svg>
  </div>
</template>

<script>
import axios from "axios";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import dummyLogo from "@/assets/img/logo_mtg.png";

import LoadingX from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

export default {
  components: { LoadingX },
  data() {
    return {
      isLoading: false,
      title: "Login Page",
      email: null,
      password: null,
      loggedIn: false,
      user: null,
      uri: null,
      token: null,
      imageUrl: dummyLogo,
      showPassword: false,
      // imageUrl: "http://36.37.86.196:7900/src/assets/img/logo_mtg.png",
      errorField: {
        email: false,
        password: false,
      },
    };
  },
  mounted() {
    //this.cekToken();
  },
  methods: {
    async postLogin() {
      var mythis = this;

      try {
        //mythis.$root.presentLoading();
        await axios
          .post(mythis.$root.apiHostJWT + "user/login", {
            email: mythis.email,
            password: mythis.password,
          })
          .then(async (res) => {
            localStorage.setItem("token", res.data.data.token);

            localStorage.setItem(
              "halaman",
              //this.$root.encryptData("cmpHalDashboard")
              this.$root.encryptData("cmpHalProfile")
            );
            sessionStorage.setItem("first", 1);

            const myObject = {
              userAvatar:
                // "http://178.1.7.230:8071/avatar/26954e5e29b5c77937e5098d3e817bb5.png",
                mythis.$root.appBaseUrl +
                "/public/26954e5e29b5c77937e5098d3e817bb5.png",
              userEmail: mythis.email,
            };
            localStorage.setItem("uObject", JSON.stringify(myObject));
            localStorage.setItem("registrasi", this.$root.encryptData("sudah"));

            // localStorage.setItem("email_pengguna", mythis.email);

            await mythis.$root.getProfile(localStorage.getItem("token"));
            await this.$root.stopLoading();
            toast.success("Login Successful", { theme: "colored" });

            await this.$root.sleep(2000);
            location.reload();
          })
          .catch(function (error) {
            //alert(error);
            mythis.$root.stopLoading();
            mythis.errorField.email = true;
            mythis.errorField.password = true;
            //console.log(error);
            if (error.response.data.code == 400) {
              toast.error(error.response.data.message, { theme: "colored" });
            } else {
              alert(error);
            }
          });
      } catch (e) {
        alert("[" + e + "]");
        alert("Connection to server failed.");
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async login() {
      this.$root.flagButtonLoading = true;
      // /await this.$root.sleep(3000);
      let status = await this.validation();
      //console.log(status);
      if (status) {
        //toast.success("masuk");
        await this.postLogin();
      }
      this.$root.flagButtonLoading = false;
    },
    async validation() {
      if (this.email == null || this.email == "") {
        toast.error("E-Mail cannot be empty", { theme: "colored" });
        this.errorField.email = true;
        return false;
      } else if (this.password == null || this.password == "") {
        toast.error("Password cannot be empty", { theme: "colored" });
        this.errorField.password = true;
        return false;
      } else {
        this.errorField.email = false;
        this.errorField.password = false;
        return true;
      }
    },
  },
};
</script>

<style scoped>
svg {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: block;
}
.form-control {
  border-color: #9f9f9f;
}
.form-control:focus {
  border-color: #77e2ff;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.fas {
  cursor: pointer;
}
.input-error {
  border: red 1px solid;
}
</style>
