//import createApp from Vue
import { createApp } from "vue";

//import component App
import App from "./App.vue";
import VueApexCharts from 'vue3-apexcharts';

import CmpInputText from "@/components/inputText/inputText.vue";
// import CmpSelect2 from "@/components/select2/select2.vue";

//importsweet alert
import swal from "sweetalert2";
window.Swal = swal;

import moment from "moment-timezone";
moment.tz.setDefault("Asia/Jakarta");

import { VueCsvImportPlugin } from "vue-csv-import";
import Notifications from "@kyvg/vue3-notification";

import LoadingX from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import vSelect from "vue-select"; //import vue-select
import "vue-select/dist/vue-select.css"; //import css vue-select
import "@/assets/css/custom-vue-select.css";

// date picker
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "@/assets/css/custom-datepicker.css";

//create App Vue
const app = createApp(App);

app.component("VueDatePicker", VueDatePicker);
app.component("CmpInputText", CmpInputText);
app.component("v-select", vSelect);
app.component("LoadingX", LoadingX);
app.use(Notifications);
app.use(VueCsvImportPlugin);

app.use(VueApexCharts);
app.component('apexchart', VueApexCharts);

app.mount("#app");
