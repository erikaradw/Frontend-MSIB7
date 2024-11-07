<template>
  <LoadingX
    v-model:active="$root.isLoading"
    :can-cancel="false"
    :is-full-page="true"
    :z-index="100000"
    loader="bars"
  />
  <notifications position="bottom right" width="500" />
  <div id="page-wrapper" v-if="isLogin == 1">
    <div
      id="page-container"
      :class="
        $root.hide_menu_status
          ? 'sidebar-no-animations sidebar-visible-lg sidebar-visible-xs sidebar-visible-sm sidebar-visible-md'
          : 'sidebar-no-animations'
      "
    >
      <component :is="_header"></component>
      <div id="main-container">
        <component :is="_logout"></component>
        <div id="container">
          <component :is="activeRoute"></component>
          <component :is="_footer"></component>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- <component :is="_header" :params="params"></component> -->
    <component :is="activeRoute"></component>
  </div>
</template>

<script>
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import db from "@/firebase/init.js";

import CryptoJS from "crypto-js";

import axios from "axios";

import { markRaw } from "vue";

import { defineAsyncComponent } from "vue";

// //jika belum ubah profil di sso
// import cmpHalProfilNotUpdate from "@/views/auth/_ProfilNotUpdate.vue";
// import cmpHalProfile from "@/views/pages/_profile.vue";

// import cmpHalForm from "@/views/pages/_form.vue";
// import cmpHalTable1 from "@/views/pages/_master1.vue";

// //master
// import cmpHalmUom from "@/views/pages/master/_mUom.vue";
// import cmpHalmType from "@/views/pages/master/_mType.vue";
// import cmpHalmTrCode from "@/views/pages/master/_mTrCode.vue";
// import cmpHalmWarehouse from "@/views/pages/master/_mWarehouse.vue";
// import cmpHalmCustomer from "@/views/pages/master/_mCustomer.vue";
// import cmpHalmProduct from "@/views/pages/master/_mProduct.vue";
// import cmpHalmBpItem from "@/views/pages/master/_mBpItem.vue";
// import cmpHalmCapacity from "@/views/pages/master/_mCapacity.vue";
// import cmpHalmRack from "@/views/pages/master/_mRack.vue";

// //log
// import cmpHalLogUsers from "@/views/pages/master/_logUsers.vue";

// //Transaction
// import cmpHalTrPutRequest from "@/views/pages/transaction/_trPutRequest.vue";
// import cmpHalSrLocate from "@/views/pages/transaction/_srLocate.vue";

const currentUrl = window.location.pathname;

import LoadingX from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import { Device } from "@capacitor/device";

import { getMessaging, getToken, onMessage } from "firebase/messaging";

import _logout from "@/views/auth/_logout.vue";
import _header from "@/views/auth/_header.vue";
import _footer from "@/views/auth/_footer.vue";
import _Login from "@/views/auth/_Login.vue";

import cmpHalDashboard from "@/views/pages/cmpHalDashboard.vue";
import cmpHalProfile from "@/views/pages/cmpHalProfile.vue";
import cmpHalDashboard1 from "@/views/pages/cmpHalDashboard.vue";
import cmpHalDashboard2 from "@/views/pages/cmpHalDashboard.vue";
import cmpHalDashboard3 from "@/views/pages/cmpHalDashboard.vue";
import cmpMasterDocStatus from "@/views/pages/test/cmpMasterDocStatus.vue";

import cmpMasterItemPriceHistory from "@/views/pages/master/cmpMasterItemPriceHistory.vue";
import cmpMasterM_Price from "@/views/pages/master/cmpMasterM_Price.vue";
import cmpMasterProduct from "@/views/pages/master/cmpMasterProduct.vue";
import cmpMasterBrand from "@/views/pages/master/cmpMasterBrand.vue";
import cmpMasterRegion from "@/views/pages/master/cmpMasterRegion.vue";
import cmpMasterArea from "@/views/pages/master/cmpMasterArea.vue";
import cmpMasterCabang from "@/views/pages/master/cmpMasterCabang.vue";
import cmpMasterOpsiCabang from "@/views/pages/master/cmpMasterOpsiCabang.vue";
import cmpMasterCustomer from "@/views/pages/master/cmpMasterCustomer.vue";
import cmpMasterKategori from "@/views/pages/master/cmpMasterKategori.vue";
import cmpHalTrend from "@/views/pages/master/cmpHalTrend.vue";
import cmpTrend_g from "@/views/pages/master/cmpTrend_g.vue";
import cmpHalPOCust from "@/views/pages/master/cmpHalPOCust.vue";
import cmpHalStockDetail from "@/views/pages/master/cmpHalStockDetail.vue";
import cmpHalSalesUnit from "@/views/pages/master/cmpHalSalesUnit.vue";

import cmpHalRoute from "@/views/pages/cmpHalRoute.vue";
// import cmpMasterUser from "@/views/pages/test/cmpMasterUser.vue";
// import cmpHalMasterUser from "@/views/pages/Muser/cmpHalMasterUser.vue";
// import cmpHalItemTonaseOpt from "@/views/pages/tonase/cmpHalItemTonaseOpt.vue";
// import cmpHalTonaseType from "@/views/pages/tonase/cmpHalTonaseType.vue";
// import cmpHalTonaseUnits from "@/views/pages/tonase/cmpHalTonaseUnits.vue";
// import cmpCounterPreference from "@/views/pages/master/cmpCounterPreference.vue";
// import cmpHalDiscount from "@/views/pages/master/cmpHalDiscount.vue";
// import cmpHalPrice from "@/views/pages/master/cmpHalPrice.vue";
// import cmpMasterCompany from "@/views/pages/master/cmpMasterCompany.vue";
// import cmpMasterItem from "@/views/pages/master/cmpMasterItem.vue";
// import cmpMasterItemInventory from "@/views/pages/master/cmpMasterItemInventory.vue";
// import cmpMasterItemOptDetail from "@/views/pages/master/cmpMasterItemOptDetail.vue";
// import cmpMasterItemOptInfo from "@/views/pages/master/cmpMasterItemOptInfo.vue";
// import cmpMasterItemOptSetting from "@/views/pages/master/cmpMasterItemOptSetting.vue";
// import cmpMasterM_Discount from "@/views/pages/master/cmpMasterM_Discount.vue";
// import cmpMasterWarehouse from "@/views/pages/master/cmpMasterWarehouse.vue";
// import cmpMasterWarehouseType from "@/views/pages/master/cmpMasterWarehouseType.vue";
// import cmpHalItemTonaseOpt from "@/views/pages/master/cmpHalItemTonaseOpt.vue";
// import cmpHalTonaseType from "@/views/pages/master/cmpHalTonaseType.vue";
// import cmpHalTonaseUnits from "@/views/pages/master/cmpHalTonaseUnits.vue";
// import cmpHalSTM from "@/views/pages/master/cmpHalSTM.vue";
// import cmpHalSTD from "@/views/pages/master/cmpHalSTD.vue";
// import cmpHalBasoba from "@/views/pages/master/cmpHalBasoba.vue";

//MENU DINAMIS GET DARI FOLDER - START
// const componentViews = import.meta.globEager("@/views/*.vue");
// const componentPages = import.meta.globEager("@/views/pages/**/*.vue");
// const componentAuth = import.meta.globEager("@/views/auth/*.vue");

// let routeComponent = {};
// Object.entries(componentViews).forEach((path, i) => {
//   let name = path[0].split("/").pop().replace(".vue", "");
//   routeComponent[name] = markRaw(path[1].default);
// });
// Object.entries(componentPages).forEach((path, i) => {
//   let name = path[0].split("/").pop().replace(".vue", "");
//   routeComponent[name] = markRaw(path[1].default);
// });
// Object.entries(componentAuth).forEach((path, i) => {
//   let name = path[0].split("/").pop().replace(".vue", "");
//   routeComponent[name] = markRaw(path[1].default);
// });
// //console.log("AAAAAAAAAAAAAA");
//console.log(routeComponent);
//MENU DINAMIS GET DARI FOLDER - END

const routeComponent = {
  cmpHalRoute: markRaw(cmpHalRoute),
  cmpHalDashboard: markRaw(cmpHalDashboard),
  cmpHalProfile: markRaw(cmpHalProfile),
  cmpHalDashboard1: markRaw(cmpHalDashboard1),
  cmpHalDashboard2: markRaw(cmpHalDashboard2),
  cmpHalDashboard3: markRaw(cmpHalDashboard3),
  cmpMasterDocStatus: markRaw(cmpMasterDocStatus),
  cmpMasterItemPriceHistory: markRaw(cmpMasterItemPriceHistory),
  cmpMasterM_Price: markRaw(cmpMasterM_Price),
  cmpMasterProduct: markRaw(cmpMasterProduct),
  cmpMasterBrand: markRaw(cmpMasterBrand),
  cmpMasterRegion: markRaw(cmpMasterRegion),
  cmpMasterArea: markRaw(cmpMasterArea),
  cmpMasterCabang: markRaw(cmpMasterCabang),
  cmpMasterOpsiCabang: markRaw(cmpMasterOpsiCabang),
  cmpMasterCustomer: markRaw(cmpMasterCustomer),
  cmpMasterKategori: markRaw(cmpMasterKategori),
  cmpHalTrend: markRaw(cmpHalTrend),
  cmpTrend_g: markRaw(cmpTrend_g),
  cmpHalPOCust: markRaw(cmpHalPOCust),
  cmpHalStockDetail: markRaw(cmpHalStockDetail),
  cmpHalSalesUnit: markRaw(cmpHalSalesUnit),
  // cmpHalMasterUser: markRaw(cmpHalMasterUser),
  // cmpMasterUser: markRaw(cmpMasterUser),
  // cmpHalItemTonaseOpt: markRaw(cmpHalItemTonaseOpt),
  // cmpHalTonaseType: markRaw(cmpHalTonaseType),
  // cmpHalTonaseUnits: markRaw(cmpHalTonaseUnits),
  // cmpCounterPreference: markRaw(cmpCounterPreference),
  // cmpHalDiscount: markRaw(cmpHalDiscount),
  // cmpHalPrice: markRaw(cmpHalPrice),
  // cmpMasterCompany: markRaw(cmpMasterCompany),
  // cmpMasterItem: markRaw(cmpMasterItem),
  // cmpMasterItemInventory: markRaw(cmpMasterItemInventory),
  // cmpMasterItemOptDetail: markRaw(cmpMasterItemOptDetail),
  // cmpMasterItemOptInfo: markRaw(cmpMasterItemOptInfo),
  // cmpMasterItemOptSetting: markRaw(cmpMasterItemOptSetting),
  // cmpMasterM_Discount: markRaw(cmpMasterM_Discount),
  // cmpMasterWarehouse: markRaw(cmpMasterWarehouse),
  // cmpMasterWarehouseType: markRaw(cmpMasterWarehouseType),
  // cmpHalItemTonaseOpt: markRaw(cmpHalItemTonaseOpt),
  // cmpHalTonaseType: markRaw(cmpHalTonaseType),
  // cmpHalTonaseUnits: markRaw(cmpHalTonaseUnits),
  // cmpHalSTM: markRaw(cmpHalSTM),
  // cmpHalSTD: markRaw(cmpHalSTD),
  // cmpHalBasoba: markRaw(cmpHalBasoba),

  Login: markRaw(_Login),
  _logout: markRaw(_logout),
  _header: markRaw(_header),
  _footer: markRaw(_footer),
};

// const routeComponent_Menu = {
//   // menu
//   cmpHalMaster: "MASTER",
//   cmpHalTransaction: "TRANSACTION",
//   cmpHalReport: "REPORT",

//   cmpHalKaryawan: "KARYAWAN",
//   cmpHalKehadiran: "KEHADIRAN",
//   cmpHalLiburNasional: "LIBUR NASIONAL",
//   cmpHalJadwalPerusahaan: "JADWAL PERUSAHAAN",
//   cmpHalJadwalKaryawan: "JADWAL KARYAWAN",
//   cmpHalPIC: "PIC",
//   cmpHalPerizinan: "PERIZINAN",

//   cmpHalItem: "ITEM",
//   cmpHalKartuStok: "KARTU STOK",
//   cmpHalMutasiStok: "MUTASI STOK",
//   cmpHalStockOpname: "STOCK OPNAME",
//   cmpHalCycleCount: "CYCLE COUNT",
//   cmpHalInbound: "INBOUND",
//   cmpHalOUtbound: "OUTBOUND",

//   cmpHalItemPrice: "ITEM PRICE",
//   cmpHalMasterMenuUser: "MENU LIST",

//   cmpHalDashboard: "Dashboard",
//   cmpHalForm: "Master Form",
//   cmpHalTable: "Master Table",
//   cmpHalProfile: "Master Profile",
//   cmpHalLogUsers: "Log Users",
//   cmpHalmUom: "Master Uom",
//   cmpHalmType: "Master Type",
//   cmpHalmTrCode: "Master Transaction Code",
//   cmpHalmWarehouse: "Master Warehouse",
//   cmpHalmCustomer: "Master Customer",
//   cmpHalmProduct: "Master Product",
//   cmpHalmBpItem: "Master BpItem",
//   cmpHalmCapacity: "Master Capacity",
//   cmpHalmRack: "Master Rack",
//   cmpHalTrPutRequest: "Transaction Put Request",
//   cmpHalSrLocate: "Rack Item Location",
// };

// const menuHeader_X = {
//   HRIS: {
//     // cmpHalMaster: {
//     //   cmpHalKaryawan: "KARYAWAN",
//     //   cmpHalLiburNasional: "LIBUR NASIONAL",
//     // },
//     cmpHalKehadiran: null,
//     cmpHalJadwalPerusahaan: null,
//     cmpHalJadwalKaryawan: null,
//     cmpHalPIC: null,
//     cmpHalPerizinan: null,
//   },

//   WMS: {
//     cmpHalMaster: {
//       cmpHalItem: null,
//       cmpHalItemPrice: null,
//     },
//     cmpHalTransaction: {
//       cmpHalInbound: null,
//       cmpHalOUtbound: null,
//     },
//     cmpHalReport: {
//       cmpHalKartuStok: null,
//       cmpHalMutasiStok: null,
//     },
//     cmpHalStockOpname: null,
//     cmpHalCycleCount: null,
//   },

//   SALES: {
//     cmpHalMaster: {
//       cmpHalItemPrice: null,
//     },
//     cmpHalReport: {
//       cmpHalSales: null,
//     },
//   },
//   MASTER: {
//     cmpHalMasterMenuUser: null,
//   },
//   // Master: {
//   //   //cmpHalForm: "cmpHalForm",
//   //   cmpHalTable: "cmpHalTable",
//   //   cmpHalmUom: "cmpHalmUom",
//   //   cmpHalmType: "cmpHalmType",
//   //   cmpHalmTrCode: "cmpHalmTrCode",
//   //   cmpHalmWarehouse: "cmpHalmWarehouse",
//   //   cmpHalmCustomer: "cmpHalmCustomer",
//   //   cmpHalmProduct: "cmpHalmProduct",
//   //   cmpHalmBpItem: "cmpHalmBpItem",
//   //   cmpHalmCapacity: "cmpHalmCapacity",
//   //   cmpHalmRack: "cmpHalmRack",
//   // },
//   // Transaction: {
//   //   cmpHalTrPutRequest: "cmpHalTrPutRequest",
//   //   cmpHalSrLocate: "cmpHalSrLocate",
//   // },
//   // Log: {
//   //   cmpHalLogUsers: "cmpHalLogUsers",
//   // },
// };

// const routeComponent_Menu = {
//   cmpHalUser: "USER",
//   cmpHalUserRoles: "USER ROLES",
//   cmpHalUserAccess: "USER ACCESS",
//   cmpHalMenuListGroup: "MENU LIST GROUP",
//   cmpHalMenuList: "MENU LIST",
// };
// const menuHeader_X = {
//   SETTING: {
//     cmpHalUser: null,
//     cmpHalUserRoles: null,
//     cmpHalUserAccess: null,
//     cmpHalMenuListGroup: null,
//     cmpHalMenuList: null,
//   },
// };

// const menuHeader_X_logo = {
//   // menu
//   WMSx: "gi gi-shopping_cart sidebar-nav-icon",
//   SALESx: "gi gi-money sidebar-nav-icon",
//   MASTERx: "gi gi-settings sidebar-nav-icon",
//   HRISx: "gi gi-group sidebar-nav-icon",
//   TRANSACTIONx: "gi gi-transfer sidebar-nav-icon",
//   VOIPx: "gi gi-phone_alt sidebar-nav-icon",
// };

export default {
  components: { LoadingX },
  data() {
    const apiHost = import.meta.env.VITE_API_HOST,
      apiHostJWT = import.meta.env.VITE_API_HOST_JWT,
      appHost = import.meta.env.VITE_APP_HOST,
      appID = import.meta.env.VITE_APP_ID,
      appBaseUrl = import.meta.env.VITE_APP_BASE_URL,
      appSsoUrl = import.meta.env.VITE_APP_SSO_URL,
      appSsoTokenStatus = import.meta.env.VITE_APP_SSO_TOKEN_STATUS,
      pagingTabel1 = import.meta.env.VITE_APP_PAGING_TABEL1,
      timerLoginDetik = import.meta.env.VITE_APP_TIMER_LOGIN_DETIK,
      secretCodeEnc = import.meta.env.VITE_APP_SECRET_CODE_ENC,
      appName = import.meta.env.VITE_APP_NAMA_APLIKASI,
      prefixApi = import.meta.env.VITE_APP_PREFIX_API,
      // menuHeader_logo = menuHeader_X_logo,
      // menuUserHtml = routeComponent_Menu,
      // menuHeader = menuHeader_X,
      apiHostEXPRESS_1 = import.meta.env.VITE_APP_BASE_URL_EXPRESS_VUE_1,
      apiHostAttendance = import.meta.env.VITE_API_HOST_ATTENDANCE,
      apiTokenFCM = import.meta.env.VITE_APP_FCM_WEB_PUSH_CERTIFICATE,
      apiTokenWA = import.meta.env.VITE_APP_FONNTE_TOKEN,
      apiFCMStatus = import.meta.env.VITE_APP_FCM_STATUS,
      menuUser = routeComponent;

    return {
      apiFCMStatus: apiFCMStatus,
      apiTokenFCM: apiTokenFCM,
      apiTokenWA: apiTokenWA,
      apiHostAttendance: apiHostAttendance,
      apiHostEXPRESS_1: apiHostEXPRESS_1,
      isLoading: false,
      pagingTabel1: pagingTabel1,
      halamanSekarang: localStorage.getItem("halaman"),
      userName:
        localStorage.getItem("userName") != "null"
          ? localStorage.getItem("userName")
          : "Selamat Datang.",
      appName: appName,
      apiHost: apiHost,
      appHost: appHost,
      prefixApi: prefixApi,
      appID: appID,
      apiHostJWT: apiHostJWT,
      appBaseUrl: appBaseUrl,
      appSsoUrl: appSsoUrl,
      appSsoTokenStatus: appSsoTokenStatus,

      menuUser: menuUser,
      // menuHeader_logo: menuHeader_logo,
      timerLoginDetik: timerLoginDetik,
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activeRoute: null,
      // headerLayout: markRaw(headerLayout),
      // logoutLayout: markRaw(cmpHalLogout),
      _header: routeComponent["_header"],
      _logout: routeComponent["_logout"],
      _footer: routeComponent["_footer"],
      params: null,
      cmpMenu: null,
      pagingTabel1: pagingTabel1,
      secretCodeEnc: secretCodeEnc,

      docFirebase: doc,
      getDocFirebase: getDoc,
      onSnapshotFirebase: onSnapshot,
      updateDocFirebase: updateDoc,
      dbFirebase: db,

      users: {
        doc1: "doc1",
        notification: "notification",
      },

      flagFirebaseNotif: false,
      flagButtonLoading: false,

      // menuHeader: menuHeader,
      // menuUserHtml: menuUserHtml,
      // menuHeader: null,
      // menuUserHtml: {},
      // menuHeader_status: null,

      menuHeader: {
        "NAMA MENU": {
          MASTER: {
            cmpMasterProduct: "PRODUCT",
            cmpMasterKategori: "KATEGORI",
            cmpMasterCabang: "CABANG",
            cmpMasterArea: "AREA",
            cmpMasterRegion: "REGION",
          //   cmpMasterBrand: "BRAND",
          //   cmpMasterM_Price: "PRICE",
          //   cmpMasterItemPriceHistory: "ITEM PRICE HISTORY",
          //   cmpMasterRegion: "REGION",
          //   cmpMasterArea: "AREA",
          //   cmpMasterCustomer: "CUSTOMER",
          // cmpMasterOpsiCabang: "OPSI CABANG",
           },
          "UPLOAD DATA": {
            cmpHalSalesUnit: "SALES",
            cmpHalStockDetail: "STOCK DETAIL",
            cmpHalPOCust: "PO CUSTOMER",
            
          },
          TREND: {
            cmpTrend_g: "TREND",
            cmpHalTrend: "TREND SALES",
          },
        },
      },

      // cmpHalSTD: "STOCK DETAIL",
      // cmpHalBasoba: "PO CUSTOMER",
      // cmpMasterItemOptInfo: 'ITEM OPTION INFO',
      // cmpMasterItemOptSetting: 'ITEM OPTION SETTING',
      // cmpHalSTD: "STOCK DETAIL",
      // cmpHalBasoba: "PO CUSTOMER",
      // cmpMasterItemOptInfo: 'ITEM OPTION INFO',
      // cmpMasterItemOptSetting: 'ITEM OPTION SETTING',

      // cmpHalSTD: "STOCK DETAIL",
      // cmpHalBasoba: "PO CUSTOMER",

      // cmpMasterItemOptInfo: 'ITEM OPTION INFO',
      // cmpMasterItemOptSetting: 'ITEM OPTION SETTING',
      // "UPLOAD MASTER": {

      //   // cmpMasterItem: 'ITEM',
      //   // cmpMasterItemInventory: 'ITEM INVENTORY',
      //   // cmpMasterItemOptDetail: 'ITEM OPTION DETAIL',
      //   // cmpMasterItemOptInfo: 'ITEM OPTION INFO',
      //   // cmpMasterItemOptSetting: 'ITEM OPTION SETTING',
      // },

      // cmpMasterItem: 'ITEM',
      // cmpMasterItemInventory: 'ITEM INVENTORY',
      // cmpMasterItemOptDetail: 'ITEM OPTION DETAIL',
      // cmpMasterItemOptInfo: 'ITEM OPTION INFO',
      // cmpMasterItemOptSetting: 'ITEM OPTION SETTING',

      // ITEM: {
      //   cmpMasterItem: 'ITEM',
      //   cmpMasterItemInventory: 'ITEM INVENTORY',
      //   cmpMasterItemOptDetail: 'ITEM OPTION DETAIL',
      //   cmpMasterItemOptInfo: 'ITEM OPTION INFO',
      //   cmpMasterItemOptSetting: 'ITEM OPTION SETTING',
      // },
      // PRICE: {
      //   cmpMasterM_Price: 'PRICE',
      //   cmpHalPrice: 'ITEM PRICE',
      //   cmpMasterItemPriceHistory: 'ITEM PRICE HISTORY',
      //   cmpMasterM_Discount: 'DISCOUNT',
      //   cmpHalDiscount: 'ITEM DISCOUNT',
      // },
      // TONASE: {
      //   cmpHalItemTonaseOpt: 'ITEM TONASE OPTION',
      //   cmpHalTonaseType: 'TONASE TYPE',
      //   cmpHalTonaseUnits: 'TONASE UNITS',
      // },
      // WAREHOUSE: {
      //   cmpMasterWarehouse: 'WAREHOUSE',
      //   cmpMasterWarehouseType: 'WAREHOUSE TYPE',
      // },
      // COMPANY: {
      //   cmpMasterCompany: 'COMPANY',
      //   cmpCounterPreference: 'COUNTER PREFERENCE',
      // },

      // cmpMasterDocStatus: "MENU TEST 1",
      // cmpMasterUser: "Master User",

      // "SUB MENU": {
      //   cmpHalDashboard1: "DASHBOARD1",
      //   cmpHalDashboard2: "DASHBOARD2",
      //   cmpHalDashboard3: "DASHBOARD3",
      // },
      // TONASE: {
      //   cmpHalItemTonaseOpt: "Item Tonase OPT",
      //   cmpHalTonaseType: "Tonase Type",
      //   cmpHalTonaseUnits: "Tonase Units",
      // },

      // cmpHalSTD: "STOCK DETAIL",
      // cmpHalBasoba: "PO CUSTOMER",
      // cmpMasterItemOptInfo: 'ITEM OPTION INFO',
      // cmpMasterItemOptSetting: 'ITEM OPTION SETTING',
      menuUserHtml: {
        // cmpMasterDocStatus: "MENU TEST 1",
        // cmpHalDashboard1: "DASHBOARD1",
        // cmpHalDashboard2: "DASHBOARD2",
        // cmpHalDashboard3: "DASHBOARD3",
        // cmpHalItemTonaseOpt: "ITEM TONASE OPTION",
        // cmpHalTonaseType: "TONASE TYPE",
        // cmpHalTonaseUnits: "TONASE UNITS",
        // cmpCounterPreference: "COUNTER PREFERENCE",
        // cmpHalDiscount: "ITEM DISCOUNT",
        // cmpHalPrice: "ITEM PRICE",
        // cmpMasterCompany: "COMPANY",
        // cmpMasterItem: "ITEM",
        // cmpMasterItemInventory: "ITEM INVENTORY",
        // cmpMasterItemOptDetail: "ITEM OPTION DETAIL",
        // cmpMasterItemOptInfo: "ITEM OPTION INFO",
        // cmpMasterItemOptSetting: "ITEM OPTION SETTING",
        // cmpMasterM_Discount: "DISCOUNT",
        // cmpMasterWarehouse: "WAREHOUSE",
        cmpMasterItemPriceHistory: "ITEM PRICE HISTORY",
        cmpMasterM_Price: "PRICE",
        cmpMasterProduct: "PRODUCT",
        cmpMasterBrand: "BRAND",
        cmpMasterCabang: "CABANG",
        cmpMasterOpsiCabang: "OPSI CABANG",
        cmpMasterCustomer: "CUSTOMER",
        cmpMasterKategori: "KATEGORI",
        cmpHalTrend: "TREND SALES",
        cmpMasterArea: "AREA",
        cmpMasterRegion: "REGION",
        cmpTrend_g: "TREND",
        cmpHalPOCust: "PO CUSTOMER",
        cmpHalStockDetail: "STOCK DETAIL",
        cmpHalSalesUnit: "SALES",
        // cmpMasterWarehouseType: "WAREHOUSE TYPE",
        // cmpHalSTM: "SALES UNIT",
        // cmpHalSTD: "STOCK DETAIL",
        // cmpHalBasoba: "PO CUSTOMER",
      },
      menuHeader_status: {
        MASTER: false,
        "NAMA MENU": false,
        "SUB MENU": false,
      },

      // accessRoles: {},
      accessRoles: {
        cmpMasterDocStatus: {
          create: true,
          update: true,
          delete: true,
        },
        // cmpHalMasterUser: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpMasterUser: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpHalItemTonaseOpt: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpHalSTM: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpHalSTD: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpHalBasoba: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        cmpHalTrend: {
          create: true,
          update: true,
          delete: true,
        },
        cmpTrend_g: {
          create: true,
          update: true,
          delete: true,
        },
        cmpHalPOCust: {
          create: true,
          update: true,
          delete: true,
        },
        cmpHalStockDetail: {
          create: true,
          update: true,
          delete: true,
        },
        cmpHalSalesUnit: {
          create: true,
          update: true,
          delete: true,
        },
        // cmpHalTonaseType: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpHalTonaseUnits: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpCounterPreference: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpHalDiscount: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpHalPrice: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpMasterCompany: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpMasterItem: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpMasterItemInventory: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpMasterItemOptDetail: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpMasterItemOptInfo: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        // cmpMasterItemOptSetting: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        cmpMasterItemPriceHistory: {
          create: true,
          update: true,
          delete: true,
        },
        // cmpMasterM_Discount: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        cmpMasterM_Price: {
          create: true,
          update: true,
          delete: true,
        },
        // cmpMasterWarehouse: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
        cmpMasterProduct: {
          create: true,
          update: true,
          delete: true,
        },
        cmpMasterBrand: {
          create: true,
          update: true,
          delete: true,
        },
        cmpMasterRegion: {
          create: true,
          update: true,
          delete: true,
        },
        cmpMasterArea: {
          create: true,
          update: true,
          delete: true,
        },
        cmpMasterCabang: {
          create: true,
          update: true,
          delete: true,
        },
        cmpMasterOpsiCabang: {
          create: true,
          update: true,
          delete: true,
        },
        cmpMasterCustomer: {
          create: true,
          update: true,
          delete: true,
        },
        cmpMasterKategori: {
          create: true,
          update: true,
          delete: true,
        },
        // cmpMasterWarehouseType: {
        //   create: true,
        //   update: true,
        //   delete: true,
        // },
      },

      profile_status: false,
      hide_menu_status: true,

      judulHalaman: "",
      ref: "",

      device_info: "",
      userid: 0,

      token_firebase: "",

      notifikasi_total: 0,
      notifikasi_detail: {},
    };
  },
  async created() {
    this.getNotifFirebase();
    Notification.requestPermission()
      .then((permission) => {
        console.log(`Permission: ${permission}`);
        if (permission == "granted") {
          if (this.apiFCMStatus == 1) {
            this.setup_FCM();
          }
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
    let uObject = localStorage.getItem("uObject");
    // if (uObject != null) {
    //   await this.getMenu();
    // }
  },
  async mounted() {
    this.activePage();
    document.getElementById("BG_flag").remove();
    document.head.innerHTML +=
      '<link href="/src/assets/css/themes/' +
      localStorage.getItem("themes") +
      '" rel="stylesheet" id="BG_flag"/>';
  },
  methods: {
    setup_FCM() {
      // Get registration token. Initially this makes a network call, once retrieved
      // subsequent calls to getToken will return from cache.
      const messaging = getMessaging();

      onMessage(messaging, (payload) => {
        console.log("depan");
        console.log(payload);
        const notificationTitle = payload.data.title;
        const notificationOptions = {
          body: payload.data.body + "",
          // icon: "/logo_mtg_firebase.png",
        };
        new Notification(notificationTitle, notificationOptions);
      });
      getToken(messaging, {
        vapidKey: this.$root.apiTokenFCM,
      })
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            console.log("TOKENNYA : " + currentToken);
            this.token_firebase = currentToken;

            Device.getInfo().then((result) => {
              console.log(result);
              console.log(JSON.stringify(result));

              var di = JSON.stringify(result);

              const obj = JSON.parse(localStorage.getItem("uObject"));
              if (obj != null) {
                // this.$root.saveTokenFCM(
                //   this.$root.token_firebase,
                //   di,
                //   obj.userEmail
                // );
              }
            });
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
    },
    async changeColorBG(themes) {
      this.$root.presentLoading();

      document.getElementById("BG_flag").innerHTML =
        '<link href="/src/assets/css/themes/' +
        themes +
        '" rel="stylesheet" id="BG_flag"/>';
      // document.getElementById("BG_flag").remove();
      // document.head.innerHTML +=
      //   '<link href="/src/assets/css/themes/' +
      //   themes +
      //   '" rel="stylesheet" id="BG_flag"/>';

      // await this.$root.sleep(1000);
      localStorage.setItem("themes", themes);
      this.$root.stopLoading();
    },
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    get_id_user(unique) {
      if (unique == null || unique == undefined) {
        return;
      }
      var idx = this.$root.decryptData(unique);
      const myArray = idx.split("ABCDEFG");
      let word = myArray[1];
      return word;
    },
    hide_menu_status_open() {
      this.hide_menu_status = !this.hide_menu_status;
    },
    status_profil_open() {
      this.profile_status = !this.profile_status;
    },
    status_menu_open(header_menu) {
      this.menuHeader_status[header_menu] =
        !this.menuHeader_status[header_menu];
    },
    async sendNotifFirebase(header, body) {
      //return false;

      var mythis = this;
      //console.log("update");
      const fireBaseTime = new Date();
      Object.keys(mythis.$root.users).forEach(async function (key) {
        await mythis.$root.updateDocFirebase(
          mythis.$root.docFirebase(
            mythis.$root.dbFirebase,
            // "users",
            "_id",
            mythis.$root.users[key]
          ),
          // {
          //   header_pesan: header,
          //   body_pesan: body,
          //   update_at_pesan: fireBaseTime,
          // }
          {
            header: header,
            body: body,
            lastSend: fireBaseTime,
          }
        );
      });
    },
    async getNotifFirebase() {
      // register realtime listener
      // for changes on 'GB' document
      // onSnapshot(doc(db, "users", "doc1"), (snap) => {
      //   if (this.flagFirebaseNotif == false) {
      //     this.flagFirebaseNotif = true;
      //     return false;
      //   }
      onSnapshot(doc(db, "_id", "notification"), (snap) => {
        if (this.flagFirebaseNotif == false) {
          this.flagFirebaseNotif = true;
          return false;
        }

        //console.log(snap.data());
        // this.header_pesan = snap.data().header_pesan;
        // this.body_pesan = snap.data().body_pesan;
        // this.update_at_pesan = snap.data().update_at_pesan;
        this.header_pesan = snap.data().header;
        this.body_pesan = snap.data().body;
        this.update_at_pesan = snap.data().lastSend;

        if (this.header_pesan == "notif_in_apps") {
          let uObject = JSON.parse(localStorage.getItem("uObject"));
          this.getNotifDetail(uObject.userEmail);
        } else {
          this.$notify({
            title: this.header_pesan,
            text: this.body_pesan,
            closeOnClick: true,
            pauseOnHover: true,
            duration: 1800000,
          });
        }
      });
    },
    goto: function (comp, p) {
      var that = this;

      that.judulHalaman = "";

      that.$root.profile_status = false;
      if (typeof p != "undefined") {
        this.params = p;
      }
      //localStorage.setItem("halaman", comp);
      localStorage.setItem("halaman", this.encryptData(comp));
      if (comp != "cmpHalDashboard") {
        sessionStorage.removeItem("first");
      }

      const tokenx = localStorage.getItem("token");
      that.cmpMenu = comp;
      that.activeRoute = that.menuUser[comp];
      that.halamanSekarang = that.cmpMenu;
    },
    async presentLoading() {
      this.isLoading = true;
    },
    async stopLoading() {
      this.isLoading = false;
    },
    activePage: function () {
      console.log(this.decryptData(localStorage.getItem("halaman")));
      let tmpactiveRoute =
        localStorage.getItem("token") != null
          ? localStorage.getItem("halaman") == null ||
            localStorage.getItem("halaman") == "" ||
            localStorage.getItem("halaman") == undefined
            ? this.menuUser["cmpHalDashboard"]
            : this.menuUser[this.decryptData(localStorage.getItem("halaman"))]
          : this.menuUser["cmpHalRoute"];

      this.activeRoute = tmpactiveRoute;
    },
    encryptData(x) {
      // hash the name with any algorithm
      const data = CryptoJS.AES.encrypt(x, this.secretCodeEnc).toString();
      return data;
    },

    decryptData(y) {
      // decrypt the data and convert to string
      if (y == undefined) return false;
      const data = CryptoJS.AES.decrypt(y, this.secretCodeEnc).toString(
        CryptoJS.enc.Utf8
      );
      return data;
    },
  },
};
</script>
