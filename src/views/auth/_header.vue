<template>
  <div id="container" v-if="isLogin == 1">
    <!-- Main Sidebar -->
    <div id="sidebar">
      <!-- Wrapper for scrolling functionality -->
      <div id="sidebar-scroll">
        <!-- Sidebar Content -->
        <div class="sidebar-content">
          <!-- Brand -->
          <a
            href="javascript:void(0);"
            class="sidebar-brand"
            style="pointer-events: none"
          >
            <img :src="imageUrl" alt="avatar" class="widget-image" width="50" />
            <!-- <span class="sidebar-nav-mini-hide"
              >&nbsp;{{ this.$root.appName }}</span
            > -->
          </a>

          <!-- Sidebar Navigation -->
          <ul class="sidebar-nav">
            <template v-if="isRegistrasi == 'sudah'">
              <li>
                <template
                  v-if="this.$root.halamanSekarang == 'cmpHalDashboard'"
                >
                  <a
                    href="javascript:void(0);"
                    @click="$root.goto('cmpHalDashboard')"
                    class="active"
                    ><i class="gi gi-stopwatch sidebar-nav-icon"></i
                    ><span class="sidebar-nav-mini-hide">DASHBOARD</span></a
                  >
                </template>
                <template v-else>
                  <a
                    href="javascript:void(0);"
                    @click="$root.goto('cmpHalDashboard')"
                    ><i class="gi gi-stopwatch sidebar-nav-icon"></i
                    ><span class="sidebar-nav-mini-hide">DASHBOARD</span></a
                  >
                </template>
              </li>
              <li v-for="(value, key, index) in $root.menuHeader" :key="key">
                <a
                  href="javascript:void(0);"
                  :class="
                    $root.menuHeader_status[key]
                      ? 'sidebar-nav-menu open'
                      : 'sidebar-nav-menu'
                  "
                  @click="$root.status_menu_open(key)"
                  ><i
                    class="fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide"
                  ></i
                  ><i :class="menuHeader_logo[key]"></i
                  ><span class="sidebar-nav-mini-hide">{{ key }} </span></a
                >
                <ul
                  :style="
                    $root.menuHeader_status[key]
                      ? 'display: block;'
                      : 'display: none;'
                  "
                >
                  <li v-for="(value2, key2, index2) in value" :key="key2">
                    <template
                      v-if="typeof value2 === 'object' && value2 !== null"
                    >
                      <a
                        href="javascript:void(0);"
                        :class="
                          $root.menuHeader_status[key2]
                            ? 'sidebar-nav-menu open'
                            : 'sidebar-nav-menu'
                        "
                        @click="$root.status_menu_open(key2)"
                        ><i class="fa fa-angle-left sidebar-nav-indicator"></i
                        >{{ key2 }}
                      </a>
                      <ul
                        :style="
                          $root.menuHeader_status[key2]
                            ? 'display: block;'
                            : 'display: none;'
                        "
                      >
                        <li
                          v-for="(value3, key3, index3) in value2"
                          :key="key3"
                        >
                          <template
                            v-if="typeof value3 === 'object' && value3 !== null"
                          >
                            <a
                              href="javascript:void(0);"
                              :class="
                                $root.menuHeader_status[key3]
                                  ? 'sidebar-nav-menu open'
                                  : 'sidebar-nav-menu'
                              "
                              @click="$root.status_menu_open(key3)"
                              ><i
                                class="fa fa-angle-left sidebar-nav-indicator"
                              ></i
                              >{{ key3 }}
                            </a>
                            <ul
                              :style="
                                $root.menuHeader_status[key3]
                                  ? 'display: block;'
                                  : 'display: none;'
                              "
                            >
                              <li
                                v-for="(value4, key4, index4) in value3"
                                :key="key4"
                              >
                                <template
                                  v-if="
                                    typeof value4 === 'object' &&
                                    value4 !== null
                                  "
                                >
                                  <a
                                    href="javascript:void(0);"
                                    :class="
                                      $root.menuHeader_status[key4]
                                        ? 'sidebar-nav-menu open'
                                        : 'sidebar-nav-menu'
                                    "
                                    @click="$root.status_menu_open(key4)"
                                    ><i
                                      class="fa fa-angle-left sidebar-nav-indicator"
                                    ></i
                                    >{{ key4 }}
                                  </a>
                                  <ul
                                    :style="
                                      $root.menuHeader_status[key4]
                                        ? 'display: block;padding-left: 25px;'
                                        : 'display: none;padding-left: 25px;'
                                    "
                                  ></ul
                                ></template>
                                <template v-else>
                                  <template v-if="key4 != 'cmpHalProfile'">
                                    <template
                                      v-if="this.$root.halamanSekarang == key4"
                                    >
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          @click="$root.goto(key4)"
                                          class="active"
                                          >{{ menuUserHtml[key4] }}
                                        </a>
                                      </li>
                                    </template>
                                    <template v-else>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          @click="$root.goto(key4)"
                                          >{{ menuUserHtml[key4] }}
                                        </a>
                                      </li>
                                    </template>
                                  </template>
                                </template>
                              </li>
                            </ul></template
                          >
                          <template v-else>
                            <template v-if="key3 != 'cmpHalProfile'">
                              <template
                                v-if="this.$root.halamanSekarang == key3"
                              >
                                <a
                                  href="javascript:void(0);"
                                  @click="$root.goto(key3)"
                                  class="active"
                                  >{{ menuUserHtml[key3] }}
                                </a>
                              </template>
                              <template v-else>
                                <a
                                  href="javascript:void(0);"
                                  @click="$root.goto(key3)"
                                  >{{ menuUserHtml[key3] }}
                                </a>
                              </template>
                            </template>
                          </template>
                        </li>
                      </ul>
                    </template>
                    <template v-else>
                      <template v-if="key2 != 'cmpHalProfile'">
                        <template v-if="this.$root.halamanSekarang == key2">
                          <a
                            href="javascript:void(0);"
                            @click="$root.goto(key2)"
                            class="active"
                            >{{ menuUserHtml[key2] }}
                          </a>
                        </template>
                        <template v-else>
                          <a
                            href="javascript:void(0);"
                            @click="$root.goto(key2)"
                            >{{ menuUserHtml[key2] }}
                          </a>
                        </template>
                      </template>
                    </template>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
          <!-- END Sidebar Navigation -->
        </div>
        <!-- END Sidebar Content -->
      </div>
      <!-- END Wrapper for scrolling functionality -->
    </div>
    <!-- END Main Sidebar -->
  </div>
</template>

<script>
//let loader = useLoading();
import dummyLogo from "@/assets/img/logo_mtg.png";

export default {
  //   props: {
  //     // menu: {
  //     //     default:null
  //     // }
  //   },
  data() {
    return {
      menu: ["header"],
      userName: null,
      vModelAvatar: null,
      menuUser: null,
      menuUserHtml: null,
      menuHeader: null,
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      isRegistrasi: null,
      timestamp: "",
      menuHeader_logo: "",
      monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Ags",
        "Sept",
        "Okt",
        "Nov",
        "Des",
      ],
      imageUrl: dummyLogo,
    };
  },
  mounted() {
    // alert("AAAAAAAAAAAA");
    console.log(this.$root.menuUserHtml);
    this.menuUser = this.$root.menuUser;
    this.menuUserHtml = this.$root.menuUserHtml;
    // this.menuUserHtml = this.$root.menuUserHtml;
    // this.menuHeader = this.$root.menuHeader;
    // this.menuHeader_logo = this.$root.menuHeader_logo;

    //console.log(this.menuHeader);
    if (localStorage.getItem("registrasi") != null) {
      this.isRegistrasi = this.$root.decryptData(
        localStorage.getItem("registrasi")
      );

      this.userName = this.$root.decryptData(localStorage.getItem("name"));
    }

    if (localStorage.getItem("halaman") != null) {
      this.$root.halamanSekarang = this.$root.decryptData(
        localStorage.getItem("halaman")
      );
    }

    if (localStorage.getItem("uObject") != null) {
      let uObject = JSON.parse(localStorage.getItem("uObject"));
      this.vModelAvatar = uObject.userAvatar;
      //this.userName = pObject.userName;
    }
  },
  created() {
    // setInterval(() => {
    //   this.getNow();
    // }, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getDate() +
        " " +
        //this.monthNames[today.getMonth() + 1] +
        this.monthNames[today.getMonth()] +
        " " +
        today.getFullYear();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
};
</script>

<style scoped></style>
