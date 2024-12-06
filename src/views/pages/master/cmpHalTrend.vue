<template>
  <!---------------------------- Modal -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <div
    :class="modal ? 'modal fade in' : 'modal fade'"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    data-keyboard="false"
    data-backdrop="true"
    :style="modal ? 'display: block;' : 'display: none;'"
  >
    <div class="modal-dialog2 modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          {{ flagButtonAdd ? "ADD" : "UPDATE" }} DATA {{ $root.judulHalaman }}
          <button
            id="closeModal"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            :disabled="$root.flagButtonLoading"
            @click="show_modal()"
          >
            <span aria-hidden="true">X</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- <pre>{{ todo }}</pre> -->
          <!-- Wizards Row -->
          <!-- END Wizards Row -->
        </div>

        <div class="modal-footer">
          <div class="form-group form-actions">
            <div class="col-xs-12">
              <button
                v-if="flagButtonAdd"
                @click="saveTodo()"
                type="button"
                class="btn btn-sm btn-primary pull-left"
                :disabled="
                  $root.flagButtonLoading ||
                  todo.dist_code == null ||
                  todo.dist_code == '' ||
                  todo.chnl_code == null ||
                  todo.chnl_code == '' ||
                  todo.area_name == null ||
                  todo.area_name == '' ||
                  todo.brand_name == null ||
                  todo.brand_name == '' ||
                  todo.nama_cabang == null ||
                  todo.nama_cabang == '' ||
                  todo.status_product == null ||
                  todo.status_product == '' ||
                  todo.kategori == null ||
                  todo.kategori == '' ||
                  todo.region_name == null ||
                  todo.region_name == '' ||
                  todo.item_name == null ||
                  todo.item_name == '' ||
                  todo.item_code == null ||
                  todo.item_code == ''
                "
              >
                <i
                  v-if="$root.flagButtonLoading"
                  class="fa fa-spinner fa-spin text-default"
                ></i>
                SAVE DATA
              </button>

              <button
                v-if="!flagButtonAdd"
                @click="editTodo()"
                type="button"
                class="btn btn-sm btn-primary pull-left"
                :disabled="
                  $root.flagButtonLoading ||
                  todo.dist_code == null ||
                  todo.dist_code == '' ||
                  todo.chnl_code == null ||
                  todo.chnl_code == '' ||
                  todo.area_name == null ||
                  todo.area_name == '' ||
                  todo.brand_name == null ||
                  todo.brand_name == '' ||
                  todo.nama_cabang == null ||
                  todo.nama_cabang == '' ||
                  todo.status_product == null ||
                  todo.status_product == '' ||
                  todo.kategori == null ||
                  todo.kategori == '' ||
                  todo.region_name == null ||
                  todo.region_name == '' ||
                  todo.item_name == null ||
                  todo.item_name == '' ||
                  todo.item_code == null ||
                  todo.item_code == ''
                "
              >
                <i
                  v-if="$root.flagButtonLoading"
                  class="fa fa-spinner fa-spin text-default"
                ></i>
                UPDATE DATA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---------------------------- Modal -->

  <!-- Page content -->
  <div id="page-content" v-if="isLogin == 1" style="min-height: 850px">
    <!-- END Visible Main Sidebar Header -->

    <!-- Block -->
    <div class="block">
      <!-- Block Title -->
      <div class="block-title">
        <h2>
          <strong>TREND SALES {{ $root.judulHalaman }}</strong>
        </h2>
      </div>
      <!-- END Block Title -->

      <div class="block-content">
        <!------------------------>
        <!-- Button trigger modal -->

        <div class="row row-cols-2">
          <div class="col-md-12">
            <div class="col-md-6">
              <div>
                <label for="select-item">DISTRIBUTOR</label>
              </div>
              <v-select
                id="select-dist_code"
                variant="outlined"
                label="dist_code"
                name="dist_code"
                :options="dataDistCode"
                placeholder="Select Dist Code"
                v-model="selectedDistCode"
                @update:modelValue="onChangeDistCodeHandler"
              ></v-select>
            </div>
            <div class="col-md-6">
              <div>
                <label for="select-item">CHANNEL</label>
              </div>
              <v-select
                id="select-chnl_code"
                variant="outlined"
                label="chnl_code"
                name="chnl_code"
                :options="dataChannel"
                placeholder="Select Channel"
                v-model="selectedChannel"
                @update:modelValue="onChangeChannelHandler"
              ></v-select>
            </div>
          </div>
        </div>

        <br />
        <div class="row row-cols-2">
          <div class="col-md-12">
            <div class="col-md-6">
              <div>
                <label for="select-item">REGION</label>
              </div>
              <v-select
                id="select-region_name"
                variant="outlined"
                label="region_name"
                name="region_name"
                :options="dataRegionName"
                placeholder="Select Region Code"
                v-model="selectedRegionName"
                @update:modelValue="onChangeRegionNameHandler"
              ></v-select>
            </div>
            <div class="col-md-6">
              <div>
                <label for="select-item">BRANCH</label>
              </div>
              <v-select
                id="select-nama_cabang"
                variant="outlined"
                label="nama_cabang"
                name="nama_cabang"
                :options="dataBranch"
                placeholder="Select Branch"
                v-model="selectedBranch"
                @update:modelValue="onChangeBranchHandler"
              ></v-select>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div class="row row-cols-2">
          <div class="col-md-12">
            <div class="col-md-6">
              <div>
                <label for="select-item">BRAND</label>
              </div>
              <v-select
                id="select-brand_name"
                variant="outlined"
                label="brand_name"
                name="brand_name"
                :options="dataBrand"
                placeholder="Select Brand"
                v-model="selectedBrand"
                @update:modelValue="onChangeBrandHandler"
              ></v-select>
            </div>

            <div class="col-md-6">
              <div>
                <label for="select-item">STATUS PRODUCT</label>
              </div>
              <v-select
                id="select-status_product"
                variant="outlined"
                label="status_product"
                name="status_product"
                :options="dataStatusProduct"
                placeholder="Select Status Product"
                v-model="selectedStatusProduct"
                @update:modelValue="onChangeStatusProductHandler"
              ></v-select>
            </div>

            <div class="row row-cols-2">
              <div class="col-md-12">
                <br />
                <div class="col-md-6">
                  <div>
                    <label for="select-item">YEAR PERIODE</label>
                  </div>
                  <v-select
                    id="select-tahun"
                    variant="outlined"
                    label="tahun"
                    name="tahun"
                    :options="dataYearPeriode"
                    placeholder="Select Year Periode"
                    v-model="selectedYearPeriode"
                    @update:modelValue="onChangeYearPeriodeHandler"
                  ></v-select>
                </div>
                <div class="col-md-6">
                  <div class="month-container">
                    <label for="bulan" class="select-item">MONTH PERIODE</label>
                    <div class="month-dropdown-wrapper">
                      <select
                        v-model="selectedMonth"
                        id="bulan"
                        class="month-dropdown"
                      >
                        <option
                          v-for="bulan in bulanOptions"
                          :key="bulan.value"
                          :value="bulan.value"
                        >
                          {{ bulan.name }}
                        </option>
                      </select>
                      <i class="fas fa-chevron-down month-dropdown-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="centered-button-wrapper">
          <button
            @click="refreshTable"
            class="btn btn-primary btn-sm pull-left"
          >
            SHOW DATA
          </button>

          <button
            class="btn btn-info"
            v-if="status_table"
            @click="exportDetailToXLS"
          >
            <i class="fas fa-file-excel"></i> Export Excel
          </button>

          <!-- <div class="button-container">
            <download-excel
              v-if="status_table"
              class="button"
              :data="json_data"
              :fields="json_fields"
              :worksheet="nama_sheetnya"
              :name="nama_excelnya"
              :before-generate="startDownload"
              :before-finish="finishDownload"
              type="xlsx"
            >
              <button
                class="btn btn-sm btn-info pull-left"
                @click="download_excel_xyz()"
              >
                <i class="fas fa-file-excel"></i>Export Excel
              </button>
            </download-excel>
          </div> -->

          <!-- <button
            class="btn btn-sm btn-primary pull-right"
            @click="exportPdf()"
          >
            <i class="fas fa-file-pdf"></i>Export PDF
          </button> -->
          <!-- <button
            class="btn btn-sm btn-primary"
            data-toggle="tooltip"
            title="Process"
            @click=""
          >
            <i class=""></i> PROCESS
          </button> -->
          <!-- <button
            class="btn btn-sm btn-danger pull-right"
            data-toggle="tooltip"
            title="Delete All Data"
            @click="deleteAllData"
          >
            <i class="fa fa-trash"></i> Delete All Data
          </button> -->
        </div>
        <table class="table-trend2" hidden v-if="tableTrend.length > 0">
          <thead>
            <tr>
              <th>No</th>
              <th>DISTRIBUTOR</th>
              <th>CHANNEL</th>
              <th>REGION</th>
              <th>AREA</th>
              <th>CABANG</th>
              <th>PARENT CODE</th>
              <th>ITEM CODE</th>
              <th>SKU</th>
              <th>BRAND</th>
              <th>KATEGORI</th>
              <th>STATUS PRODUCT</th>
              <!-- <th>YOP</th> -->
              <th>MONTH 1</th>
              <th>MONTH 2</th>
              <th>MONTH 3</th>
              <th>MONTH 4</th>
              <th>MONTH 5</th>
              <th>MONTH 6</th>
              <th>MONTH 7</th>
              <th>MONTH 8</th>
              <th>MONTH 9</th>
              <th>MONTH 10</th>
              <th>MONTH 11</th>
              <th>MONTH 12</th>
              <th>YEARLY AVERAGE UNIT</th>
              <th>YEARLY AVERAGE VALUE</th>
              <th>AVERAGE 9 MONTH UNIT</th>
              <th>AVERAGE 9 MONTH VALUE</th>
              <th>AVERAGE 6 MONTH UNIT</th>
              <th>AVERAGE 6 MONTH VALUE</th>
              <th>AVERAGE 3 MONTH UNIT</th>
              <th>AVERAGE 3 MONTH VALUE</th>
              <th>AVERAGE SALES</th>
              <th>PURCHASE SUGGESTION</th>
              <th>PURCHASE VALUE</th>
              <th>STOCK ON HAND UNIT</th>
              <th>DOI 3 MONTH</th>
              <th>STATUS TREND</th>
              <th>DELTA</th>
              <th>QTY PO</th>
              <th>QTY SC REG</th>
              <th>SERVICE LEVEL</th>
              <th>PIC</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in tableTrend" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.dist_code }}</td>
              <td>{{ item.chnl_code }}</td>
              <td>{{ item.region_name }}</td>
              <td>{{ item.area_name }}</td>
              <td>{{ item.nama_cabang }}</td>
              <td>{{ item.parent_code }}</td>
              <td>{{ item.item_code }}</td>
              <td>{{ item.item_name }}</td>
              <td>{{ item.brand_name }}</td>
              <td>{{ item.kategori }}</td>
              <td>{{ item.status_product }}</td>
              <!-- <td>{{ item.tahun }}</td> -->
              <td>{{ item.month_1 }}</td>
              <td>{{ item.month_2 }}</td>
              <td>{{ item.month_3 }}</td>
              <td>{{ item.month_4 }}</td>
              <td>{{ item.month_5 }}</td>
              <td>{{ item.month_6 }}</td>
              <td>{{ item.month_7 }}</td>
              <td>{{ item.month_8 }}</td>
              <td>{{ item.month_9 }}</td>
              <td>{{ item.month_10 }}</td>
              <td>{{ item.month_11 }}</td>
              <td>{{ item.month_12 }}</td>
              <td>{{ item.yearly_average_unit }}</td>
              <td>{{ item.yearly_average_value }}</td>
              <td>{{ item.average_9_month_unit }}</td>
              <td>{{ item.average_9_month_value }}</td>
              <td>{{ item.average_6_month_unit }}</td>
              <td>{{ item.average_6_month_value }}</td>
              <td>{{ item.average_3_month_unit }}</td>
              <td>{{ item.average_3_month_value }}</td>
              <td>{{ item.average_sales }}</td>
              <td>{{ item.purchase_suggestion }}</td>
              <td>{{ item.purchase_value }}</td>
              <td>{{ item.stock_on_hand_unit }}</td>
              <td>{{ item.doi_3_month }}</td>
              <td>{{ item.status_trend }}</td>
              <td>{{ item.delta }}</td>
              <td>{{ item.qty_po }}</td>
              <td>{{ item.qty_sc_reg }}</td>
              <td>{{ item.service_level }}</td>
              <td>{{ item.pic }}</td>
            </tr>
          </tbody>
        </table>

        <!-- :disabled="todo.dist_code == ''" -->
        <!------------------------>
        <div id="wrapper2"></div>
        <div id="box"></div>
      </div>
      <!-- Block Content -->
      <!-- END Block Content -->
    </div>
    <!-- END Block -->
  </div>
</template>

<script>
import axios from "axios";
import * as XLSX from "xlsx";
import { markRaw } from "vue";
import { Grid, h, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { idID } from "gridjs/l10n";

import loadingBar from "@/assets/img/Moving_train.gif";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import JsonExcel from "vue-json-excel3";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default {
  components: {
    // CmpSelect2,
    // LoadingX,
    // CmpInputText,
    // CmpInputText,
    downloadExcel: JsonExcel,
  },
  data() {
    return {
      tableTrend: [],
      bulanOptions: [
        { value: 1, name: "Januari" },
        { value: 2, name: "Februari" },
        { value: 3, name: "Maret" },
        { value: 4, name: "April" },
        { value: 5, name: "Mei" },
        { value: 6, name: "Juni" },
        { value: 7, name: "Juli" },
        { value: 8, name: "Agustus" },
        { value: 9, name: "September" },
        { value: 10, name: "Oktober" },
        { value: 11, name: "November" },
        { value: 12, name: "Desember" },
      ],
      selectedMonth: "1", // Default bulan yang dipilih
      orderedMonths: [],

      access_page: this.$root.decryptData(localStorage.getItem("halaman")),
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      grid: new Grid(),
      // grid2: new Grid(),
      errorField: {
        dist_code: false,
        chnl_code: false,
        region_name: false,
        area_name: false,
        nama_cabang: false,
        parent_code: false,
        item_code: false,
        item_name: false,
        brand_name: false,
        kategori: false,
        status_product: false,
        month_1: false,
        month_2: false,
        month_3: false,
        month_4: false,
        month_5: false,
        month_6: false,
        month_7: false,
        month_8: false,
        month_9: false,
        month_10: false,
        month_11: false,
        month_12: false,
        yearly_average_unit: false,
        yearly_average_value: false,
        average_9_month_unit: false,
        average_9_month_value: false,
        average_6_month_unit: false,
        average_6_month_value: false,
        average_3_month_unit: false,
        average_3_month_value: false,
        average_sales: false,
        purchase_suggestion: false,
        purchase_value: false,
        stock_on_hand_unit: false,
        doi_3_month: false,
        status_trend: false,
        delta: false,
        qty_po: false,
        qty_sc_reg: false,
        service_level: false,
        pic: false,
      },

      userid: 0,
      status_table: false,

      modal: false,

      todo: {
        dist_code: "",
        chnl_code: "",
        region_name: "",
        area_name: "",
        nama_cabang: "",
        parent_code: "",
        item_code: "",
        item_name: "",
        brand_name: "",
        kategori: "",
        status_product: "",
        month_1: "",
        month_2: "",
        month_3: "",
        month_4: "",
        month_5: "",
        month_6: "",
        month_7: "",
        month_8: "",
        month_9: "",
        month_10: "",
        month_11: "",
        month_12: "",
        yearly_average_unit: "",
        yearly_average_value: "",
        average_9_month_unit: "",
        average_9_month_value: "",
        average_6_month_unit: "",
        average_6_month_value: "",
        average_3_month_unit: "",
        average_3_month_value: "",
        average_sales: "",
        purchase_suggestion: "",
        purchase_value: "",
        stock_on_hand_unit: "",
        doi_3_month: "",
        status_trend: "",
        delta: "",
        qty_po: "",
        qty_sc_reg: "",
        service_level: "",
        pic: "",
      },

      watch: {
        selectedMonth() {
          this.updateOrderedMonths();
        },
      },

      flagButtonAdd: true,
      csv: null,

      dataTrend: [],
      dataRegionName: [],
      dataBrand: [],
      dataBranch: [],
      dataDistCode: [],
      dataChannel: [],
      dataStatusProduct: [],
      dataYearPeriode: [],
      dataMonthPeriode: [],

      selectedDistCode: {},
      selectedRegionName: {},
      selectedBranch: {},
      selectedChannel: {},
      selectedBrand: {},
      selectedStatusProduct: {},
      selectedYearPeriode: {},
      selectedMonthPeriode: {},

      dataImportCsv: {
        dist_code: {
          label: "dist_code",
          required: true,
        },
        chnl_code: {
          label: "chnl_code",
          required: true,
        },
        region_name: {
          label: "region_name",
          required: true,
        },
        area_name: {
          label: "area_name",
          required: true,
        },
        nama_cabang: {
          label: "nama_cabang",
          required: true,
        },
        parent_code: {
          label: "parent_code",
          required: true,
        },
        item_code: {
          label: "item_code",
          required: true,
        },
        item_name: {
          label: "item_name",
          required: true,
        },
        brand_name: {
          label: "brand_name",
          required: true,
        },
        kategori: {
          label: "kategori",
          required: true,
        },
        status_product: {
          label: "status_product",
          required: true,
        },
        month_1: {
          label: "month_1",
          required: true,
        },
        month_2: {
          label: "month_2",
          required: true,
        },
        month_3: {
          label: "month_3",
          required: true,
        },
        month_4: {
          label: "month_4",
          required: true,
        },
        month_5: {
          label: "month_5",
          required: true,
        },
        month_6: {
          label: "month_6",
          required: true,
        },
        month_7: {
          label: "month_7",
          required: true,
        },
        month_8: {
          label: "month_8",
          required: true,
        },
        month_9: {
          label: "month_9",
          required: true,
        },
        month_10: {
          label: "month_10",
          required: true,
        },
        month_11: {
          label: "month_11",
          required: true,
        },
        month_12: {
          label: "month_12",
          required: true,
        },
        yearly_average_unit: {
          label: "yearly_average_unit",
          required: false,
        },
        yearly_average_value: {
          label: "yearly_average_value",
          required: false,
        },
        average_9_month_unit: {
          label: "average_9_month_unit",
          required: false,
        },
        average_9_month_value: {
          label: "average_9_month_value",
          required: false,
        },
        average_6_month_unit: {
          label: "average_6_month_unit",
          required: false,
        },
        average_6_month_value: {
          label: "average_6_month_value",
          required: false,
        },
        average_3_month_unit: {
          label: "average_3_month_unit",
          required: false,
        },
        average_3_month_value: {
          label: "average_3_month_value",
          required: false,
        },
        doi_3_month: {
          label: "doi_3_month",
          required: false,
        },
        status_trend: {
          label: "status_trend",
          required: false,
        },
        delta: {
          label: "delta",
          required: false,
        },
        pic: {
          label: "pic",
          required: false,
        },
        average_sales: {
          label: "average_sales",
          required: false,
        },
        purchase_suggestion: {
          label: "purchase_suggestion",
          required: false,
        },
        purchase_value: {
          label: "purchase_value",
          required: false,
        },
      },
      monthlySalesData: [],
      loading: false, // Indikator loading saat data di-fetch
      error: null,

      data_x_tabel: [],
      data_x_excel: [],
      nama_excelnya: "",
      nama_sheetnya: "Trend Sales",
      json_data: [],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
      json_fields: {
        DistCode: "DistCode",
        Channel: "Channel",
        Region: "Region",
        Area: "Area",
        Cabang: "Cabang",
        ParentCode: "ParentCode",
        ItemCode: "ItemCode",
        SKU: "SKU",
        Brand: "Brand",
        Kategori: "Kategori",
        StatusProduct: "StatusProduct",
        month_1: "month_1",
        month_2: "month_2",
        month_3: "month_3",
        month_4: "month_4",
        month_5: "month_5",
        month_6: "month_6",
        month_7: "month_7",
        month_8: "month_8",
        month_9: "month_9",
        month_10: "month_10",
        month_11: "month_11",
        month_12: "month_12",
        YearlyAverageUnit: "YearlyAverageUnit",
        YearlyAverageValue: "YearlyAverageValue",
        Average9BulanUnit: "Average9BulanUnit",
        Average9BulanValue: "Average9BulanValue",
        Average6BulanUnit: "Average6BulanUnit",
        Average6BulanValue: "Average6BulanValue",
        Average3BulanUnit: "Average3BulanUnit",
        Average3BulanValue: "Average3BulanValue",
        AverageSales: "AverageSales",
        PurchaseSuggestion: "PurchaseSuggestion",
        PurchaseValue: "PurchaseValue",
        StockOnHandUnit: "StockOnHandUnit",
        Doi3Month: "Doi3Month",
        StatusTrend: "StatusTrend",
        Delta: "Delta",
        QtyPo: "QtyPo",
        QtyScReg: "QtyScReg",
        ServiceLevel: "ServiceLevel",
        PIC: "PIC",
      },
      newlimit: 10,

      status_download: 0,
    };
  },
  async mounted() {
    this.updateOrderedMonths();
    // await this.$root.refreshToken(localStorage.getItem("token"));
    //this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
    await this.getAllDatas();
    // await this.getTrendTable();
  },
  methods: {
    async getTrendTable() {
      var mythis = this;

      let offset = 0;
      const limit = 100;
      this.tableTrend = []; // Menyimpan semua data hasil looping

      //http://localhost:8002/
      //http://178.1.7.230:8207
      try {
        while (offset < 30000) {
          const response = await axios.get(
            // `http://localhost:8002/si/monthly-sales-data?limit=${limit}&offset=${offset}`+`${
            this.$root.apiHost +
              this.$root.prefixApi +
              "monthly-sales-data-download" +
              `?limit=${limit}&offset=${offset}` +
              `${
                this.selectedDistCode.dist_code != undefined &&
                this.selectedDistCode.dist_code != "All"
                  ? "&dist_code=" + this.selectedDistCode.dist_code
                  : "&dist_code="
              }${
                this.selectedRegionName.region_name != undefined &&
                this.selectedRegionName.region_name != "All"
                  ? "&region_name=" + this.selectedRegionName.region_name
                  : "&region_name="
              }${
                this.selectedBranch.nama_cabang != undefined &&
                this.selectedBranch.nama_cabang != "All"
                  ? "&branch=" + this.selectedBranch.kode_cabang
                  : "&branch="
              }${
                this.selectedChannel.chnl_code != undefined &&
                this.selectedChannel.chnl_code != "All"
                  ? "&chnl_code=" + this.selectedChannel.chnl_code
                  : "&chnl_code="
              }${
                this.selectedBrand.brand_name != undefined &&
                this.selectedBrand.brand_name != "All"
                  ? "&brand_name=" + this.selectedBrand.brand_name
                  : "&brand_name="
              }${
                this.selectedStatusProduct.status_product != undefined &&
                this.selectedStatusProduct.status_product != "All"
                  ? "&status_product=" +
                    this.selectedStatusProduct.status_product
                  : "&status_product="
              }${
                this.selectedYearPeriode.tahun != undefined &&
                this.selectedYearPeriode.tahun != "All"
                  ? "&tahun=" + this.selectedYearPeriode.tahun
                  : "&tahun="
              }${
                this.selectedMonth != undefined && this.selectedMonth != "All"
                  ? "&selected_month=" + this.selectedMonth
                  : "&selected_month="
              }`
          );
          const results = response.data.results;

          // Menggabungkan hasil dari setiap pemanggilan ke `this.tableTrend`
          this.tableTrend = [...this.tableTrend, ...results];

          // Tambahkan offset sebesar limit setiap kali iterasi
          offset += limit;

          // Check jika data hasil response kosong, maka hentikan proses
          if (results.length === 0) {
            this.status_download = 1;
            break;
          }
        }

        console.log("Total data fetched:", this.tableTrend.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async exportDetailToXLS() {
      try {
        this.$root.presentLoading();

        await this.getTrendTable();
        console.log(this.tableTrend);

        this.$root.stopLoading();

        const tables = document.querySelector(".table-trend2");
        const wb = XLSX.utils.table_to_book(tables, {
          sheet: "Sheet JS",
          bookType: "xls",
        });
        XLSX.writeFile(wb, "TrendSales.xls");

        // this.$root.loader = true;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    createPaginationControl(grid) {
      const paginationWrapper = document.querySelector(".gridjs-pagination");
      if (paginationWrapper) {
        const rowsPerPageContainer = document.createElement("div");
        rowsPerPageContainer.style.display = "inline-block";
        rowsPerPageContainer.style.marginLeft = "10px";

        const label = document.createElement("span");
        label.textContent = "Rows per page: ";
        label.style.marginRight = "5px";

        const select = document.createElement("select");
        select.style.padding = "5px";
        select.style.border = "1px solid #ccc";
        select.style.borderRadius = "4px";

        const options = [10, 20, 50, 100];
        options.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          select.appendChild(option);
        });

        // Event listener untuk mengubah jumlah rows per halaman
        select.addEventListener("change", async (event) => {
          const newLimit = parseInt(event.target.value, 10);
          this.newlimit = newLimit;
          this.refreshTable();
        });

        rowsPerPageContainer.appendChild(label);
        rowsPerPageContainer.appendChild(select);
        paginationWrapper.appendChild(rowsPerPageContainer);
      }
    },
    updateOrderedMonths() {
      const startIndex = this.bulanOptions.indexOf(this.selectedMonth);
      this.orderedMonths = [
        ...this.bulanOptions.slice(startIndex),
        ...this.bulanOptions.slice(0, startIndex),
      ];
      this.fetchDataByMonth(); // Panggil fungsi untuk memperbarui data
    },
    fetchDataByMonth() {
      // Misal kita pakai axios untuk request data ke server
      axios
        .get(`/si/monthly-sales-data=${this.selectedMonth}`)
        .then((response) => {
          this.tableData = response.data; // Sesuaikan dengan data yang Anda butuhkan
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },

    async deleteAllData() {
      var mythis = this;
      Swal.fire({
        title: "Delete All Data",
        text: "Are you sure? This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete all",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          mythis.$root.presentLoading();
          const config = {
            data: {
              fileUpload: "form satuan",
              userid: mythis.userid,
            },
          };
          try {
            const response = await axios.delete(
              mythis.$root.apiHost + mythis.$root.prefixApi + "trenddelete",
              config
            );
            mythis.$root.stopLoading();
            if (response.data.status) {
              Swal.fire(
                "Deleted!",
                `All data has been deleted. ${response.data.deleted_rows} rows were deleted.`,
                "success"
              );
              mythis.refreshTable();
            } else {
              Swal.fire(
                "Error",
                response.data.message || "Failed to delete all data",
                "error"
              );
            }
          } catch (error) {
            mythis.$root.stopLoading();
            console.error("Error deleting all data:", error);
            let errorMessage = "An error occurred while deleting data";
            if (error.response) {
              errorMessage = error.response.data.message || errorMessage;
            }
            Swal.fire("Error", errorMessage, "error");
          }
        }
      });
    },
    formatNumber(num) {
      let number = parseInt(num);
      let formattedNumber = number.toLocaleString("id-ID");
      return formattedNumber;
    },
    // formatPercentage(value) {
    //   return `${Math.round(value)}%`;
    // },
    async fetchMonthlySalesData() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(
          this.$root.apiHost + this.$root.prefixApi + "monthly-sales-data"
        ); // Ganti dengan URL API Anda
        this.monthlySalesData = response.data;
      } catch (error) {
        console.error("Error fetching monthly sales data:", error);
        this.error = "Failed to fetch data. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
    async getAllDatas() {
      this.isFetching = false;

      const urlGetTrend =
        this.$root.apiHost + this.$root.prefixApi + "M_CabangAll";
      const { data } = await axios.get(urlGetTrend);
      console.log(data, "DATAAA");
      this.dataTrend = [
        {
          dist_code: "All",
          region_name: "All",
          nama_cabang: "All",
        },
        ...data.data,
      ];

      const uniqueDistCodes = [];
      this.dataDistCode = this.dataTrend.filter((item) => {
        if (!uniqueDistCodes.includes(item.dist_code)) {
          uniqueDistCodes.push(item.dist_code);
          return true;
        }
        return false;
      });

      const uniqueRegionCodes = [];
      this.dataRegionName = this.dataTrend.filter((item) => {
        if (!uniqueRegionCodes.includes(item.region_name)) {
          uniqueRegionCodes.push(item.region_name);
          return true;
        }
        return false;
      });

      const uniqueBranchs = [];
      this.dataBranch = this.dataTrend.filter((item) => {
        if (!uniqueBranchs.includes(item.nama_cabang)) {
          uniqueBranchs.push(item.nama_cabang);
          return true;
        }
        return false;
      });

      const urlGetChannel =
        this.$root.apiHost + this.$root.prefixApi + "ChannelAll";
      const { data: channelData } = await axios.get(urlGetChannel);
      console.log(channelData, "CHANNEL DATA");

      if (channelData && channelData.data) {
        const uniqueChannels = [];
        this.dataChannel = [
          { chnl_code: "All" }, // Add default "All" option
          ...channelData.data.filter((item) => {
            if (!uniqueChannels.includes(item.chnl_code)) {
              uniqueChannels.push(item.chnl_code);
              return true;
            }
            return false;
          }),
        ];

        const uniqueYearPeriodes = [];
        this.dataYearPeriode = [
          // { tahun: "All" }, // Add default "All" option
          { tahun: new Date().getFullYear() },
          { tahun: new Date().getFullYear() - 1 },
          { tahun: new Date().getFullYear() - 2 },
          { tahun: new Date().getFullYear() - 3 },
          // {tahun: new Date().getFullYear() + 1},
          // {tahun: new Date().getFullYear() + 2},
          // ...channelData.data.filter((item) => {
          //   if (item.tahun && !uniqueYearPeriodes.includes(item.tahun)) {
          //     uniqueYearPeriodes.push(item.tahun);
          //     return true;
          //   }
          //   return false;
          // }),
        ];
      } else {
        console.warn("No channel or year data found.");
        this.dataChannel = [{ chnl_code: "All" }];
        this.dataYearPeriode = [{ tahun: "All" }];
      }
      const urlGetProduct =
        this.$root.apiHost + this.$root.prefixApi + "ProductAll";
      const { data: productData } = await axios.get(urlGetProduct);
      console.log(productData, "PRODUCT DATA");

      if (productData && productData.data) {
        const uniqueBrands = [];
        this.dataBrand = [
          { brand_name: "All" }, // Add default "All" option
          ...productData.data.filter((item) => {
            if (item.brand_name && !uniqueBrands.includes(item.brand_name)) {
              uniqueBrands.push(item.brand_name);
              return true;
            }
            return false;
          }),
        ];

        const uniqueStatusProducts = [];
        this.dataStatusProduct = [
          { status_product: "All" }, // Add default "All" option
          ...productData.data.filter((item) => {
            if (
              item.status_product &&
              !uniqueStatusProducts.includes(item.status_product)
            ) {
              uniqueStatusProducts.push(item.status_product);
              return true;
            }
            return false;
          }),
        ];
      } else {
        console.warn("No brand or status product data found.");
        this.dataBrand = [{ brand_name: "All" }];
        this.dataStatusProduct = [{ status_product: "All" }];
      }
      console.log(this.dataDistCode, "data DistCode");
      console.log(this.dataRegionName, "data region_name");
      console.log(this.dataBranch, "data branch");
      console.log(this.dataChannel, "data chnl_code");
      console.log(this.dataBrand, "data brand_name");
      console.log(this.dataStatusProduct, "data status_product");
      console.log(this.dataYearPeriode, "data tahun");

      this.selectedBranch = this.dataTrend[0];
      this.selectedDistCode = this.dataTrend[0];
      this.selectedRegionName = this.dataTrend[0];
      this.selectedChannel = this.dataChannel[0];
      this.selectedStatusProduct = this.dataStatusProduct[0];
      this.selectedBrand = this.dataBrand[0];
      this.selectedYearPeriode = this.dataYearPeriode[0];

      this.isFetching = false;
      //this.refreshTable();
    },

    searchData() {
      axios
        .get("trend", {
          params: {
            dist_code: this.todo.dist_code,
            region_name: this.todo.region_name,
            area_name: this.todo.area_name,
            nama_cabang: this.todo.nama_cabang,
            branch: this.todo.branch,
            chnl_code: this.todo.chnl_code,
            brand_name: this.todo.brand_name,
            status_product: this.todo.status_product,
            tahun: this.todo.tahun,
            month_1: this.todo.month_1,
            month_2: this.todo.month_2,
            month_3: this.todo.month_3,
            month_4: this.todo.month_4,
            month_5: this.todo.month_5,
            month_6: this.todo.month_6,
            month_7: this.todo.month_7,
            month_8: this.todo.month_8,
            month_9: this.todo.month_9,
            month_10: this.todo.month_10,
            month_11: this.todo.month_11,
            month_12: this.todo.month_12,
            yearly_average_unit: this.todo.yearly_average_unit,
            yearly_average_value: this.todo.yearly_average_value,
            average_9_month_unit: this.todo.average_9_month_unit,
            average_9_month_value: this.todo.average_9_month_value,
            average_6_month_unit: this.todo.average_6_month_unit,
            average_6_month_value: this.todo.average_6_month_value,
            average_3_month_unit: this.todo.average_3_month_unit,
            average_3_month_value: this.todo.average_3_month_value,
            average_sales: this.todo.average_sales,
            purchase_suggestion: this.todo.purchase_suggestion,
            purchase_value: this.todo.purchase_value,
            stock_on_hand_unit: this.todo.stock_on_hand_unit,
            doi_3_month: this.todo.doi_3_month,
            status_trend: this.todo.status_trend,
            delta: this.todo.delta,
            qty_po: this.todo.qty_po,
            qty_sc_reg: this.todo.qty_sc_reg,
            service_level: this.todo.service_level,
            pic: this.todo.pic,
          },
        })
        .then((response) => {
          // handle success response
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Handle file upload logic here
        const formData = new FormData();
        formData.append("file", file);
        this.uploadFile(formData);
      }
    },
    async uploadFile(formData) {
      try {
        await axios.post("/api/import", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("File uploaded successfully");
      } catch (error) {
        console.error("File upload failed:", error);
        alert("File upload failed");
      }
    },

    async onChangeDistCodeHandler(e) {
      // this.todo.dist_code = e.dist_code;
      this.todo.dist_code = this.selectedDistCode;
      const url =
        this.$root.apiHost +
        this.$root.prefixApi +
        "cabangdistcode?dist_code=" +
        e.dist_code;
      const res = await axios.get(url);
      const data = res.data.data;
      this.dataBranch = [];

      const uniqueBranchs = [];
      this.dataBranch = data.filter((item) => {
        if (!uniqueBranchs.includes(item.nama_cabang)) {
          uniqueBranchs.push(item.nama_cabang);
          return true;
        }
        return false;
      });

      console.log(this.dataBranch);
      // data.forEach(element => {
      //   this.dataBranch.push({
      //     code: element.kode_cabang,
      //     label: element.nama_cabang,
      //   });
      // });
      // this.refreshTable();
    },

    onChangeRegionNameHandler(e) {
      this.todo.region_name = this.selectedRegionName;
    },

    onChangeBranchHandler(e) {
      this.todo.nama_cabang = e.nama_cabang;
    },

    onChangeChannelHandler(e) {
      this.todo.chnl_code = this.selectedChannel;
    },

    onChangeBrandHandler(e) {
      this.todo.brand_name = this.selectedBrand;
    },

    onChangeStatusProductHandler(e) {
      this.todo.status_product = this.selectedStatusProduct;
    },
    onChangeYearPeriodeHandler(e) {
      this.todo.tahun = this.selectedYearPeriode;
    },

    mySelectEvent() {
      this.todo.roles = this.tmp.cboRoles.code;
    },
    resetForm() {
      var mythis = this;
      Object.keys(mythis.errorField).forEach(function (key) {
        mythis.errorField[key] = false;
        mythis.todo[key] = "";
        //mythis.todo2[key] = "";
      });
    },
    refreshTable() {
      var mythis = this;
      mythis.status_table = false;
      //////////////////////////////
      $("#wrapper2").remove();
      var e = $('<div id="wrapper2"></div>');
      $("#box").append(e);
      this.getTable();
      //////////////////////////////
    },
    saveTodo() {
      var mythis = this;

      Swal.fire({
        title: "Create Master Trend",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          /////////////////////////////////////////////////////////////////////
          // mythis.$root.presentLoading();
          mythis.$root.flagButtonLoading = true;
          // const AuthStr = "bearer " + localStorage.getItem("token");
          // const config = {
          //   headers: {
          //     Authorization: AuthStr,
          //   },
          // };
          const config = "";
          var url = mythis.$root.apiHost + mythis.$root.prefixApi + "trend";
          axios
            .post(
              url,
              {
                dist_code: mythis.todo.dist_code,
                chnl_code: mythis.todo.chnl_code,
                region_name: mythis.todo.region_name,
                area_name: mythis.todo.area_name,
                nama_cabang: mythis.todo.nama_cabang,
                parent_code: mythis.todo.parent_code,
                item_code: mythis.todo.item_code,
                item_name: mythis.todo.item_name,
                brand_name: mythis.todo.brand_name,
                kategori: mythis.todo.kategori,
                status_product: mythis.todo.status_product,
                tahun: mythis.todo.tahun,
                month_1: mythis.todo.month_1,
                month_2: mythis.todo.month_2,
                month_3: mythis.todo.month_3,
                month_4: mythis.todo.month_4,
                month_5: mythis.todo.month_5,
                month_6: mythis.todo.month_6,
                month_7: mythis.todo.month_7,
                month_8: mythis.todo.month_8,
                month_9: mythis.todo.month_9,
                month_10: mythis.todo.month_10,
                month_11: mythis.todo.month_11,
                month_12: mythis.todo.month_12,
                yearly_average_unit: mythis.todo.yearly_average_unit,
                yearly_average_value: mythis.todo.yearly_average_value,
                average_9_month_unit: mythis.todo.average_9_month_unit,
                average_9_month_value: mythis.todo.average_9_month_value,
                average_6_month_unit: mythis.todo.average_6_month_unit,
                average_6_month_value: mythis.todo.average_6_month_value,
                average_3_month_unit: mythis.todo.average_3_month_unit,
                average_3_month_value: mythis.todo.average_3_month_value,
                average_sales: mythis.todo.average_sales,
                purchase_suggestion: mythis.todo.purchase_suggestion,
                purchase_value: mythis.todo.purchase_value,
                stock_on_hand_unit: mythis.todo.stock_on_hand_unit,
                doi_3_month: mythis.todo.doi_3_month,
                status_trend: mythis.todo.status_trend,
                delta: mythis.todo.delta,
                qty_po: mythis.todo.qty_po,
                qty_sc_reg: mythis.todo.qty_sc_reg,
                service_level: mythis.todo.service_level,
                pic: mythis.todo.pic,
                userid: mythis.userid,
              },
              config
            )
            .then((res) => {
              Swal.fire("Created!", res.data.message, "success");
              //mythis.$root.stopLoading();
              mythis.$root.flagButtonLoading = false;
              mythis.resetForm();
              mythis.show_modal();
              mythis.refreshTable();
            })
            .catch(function (error) {
              mythis.$root.flagButtonLoading = false;
              if (error.response) {
                //console.log(error.response.data);
                if (error.response.status == 422) {
                  mythis.errorList = error.response.data;
                  // mythis.$root.loader = false;
                  if (Object.keys(mythis.errorList).length > 0) {
                    //refresh semua menjadi false
                    Object.keys(mythis.errorField).forEach(function (key) {
                      mythis.errorField[key] = false;
                    });
                    //membuat jika error jadi true
                    Object.keys(mythis.errorList).forEach(function (key) {
                      toast.error(mythis.errorList[key], { theme: "colored" });

                      // const myArray = key.split(".");
                      // mythis.errorField[myArray[1]] = true;
                      mythis.errorField[key] = true;
                    });
                  }
                } else {
                  toast.error(error.response.data.message, {
                    theme: "colored",
                  });
                }
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log("Error", error.message);
              }
            });
          /////////////////////////////////////////////////////////////////////
        }
      });
    },
    saveTodoBulky() {
      var mythis = this;

      Swal.fire({
        title: "Create Master Trend",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          /////////////////////////////////////////////////////////////////////
          mythis.$root.presentLoading();
          mythis.$root.flagButtonLoading = true;
          // const AuthStr = "bearer " + localStorage.getItem("token");
          // const config = {
          //   headers: {
          //     Authorization: AuthStr,
          //   },
          // };
          const config = "";
          var url =
            mythis.$root.apiHost + mythis.$root.prefixApi + "trendBulky";
          axios
            .post(
              url,
              {
                csv: mythis.csv,
                userid: mythis.userid,
              },
              config
            )
            .then((res) => {
              Swal.fire("Created!", res.data.message, "success");
              mythis.$root.stopLoading();
              mythis.$root.flagButtonLoading = false;
              mythis.resetForm();
              // mythis.show_modal();
              mythis.csv = null;
              mythis.refreshTable();
            })
            .catch(function (error) {
              mythis.$root.flagButtonLoading = false;
              if (error.response) {
                //console.log(error.response.data);
                if (error.response.status == 422) {
                  mythis.errorList = error.response.data;
                  // mythis.$root.loader = false;
                  if (Object.keys(mythis.errorList).length > 0) {
                    //refresh semua menjadi false
                    Object.keys(mythis.errorField).forEach(function (key) {
                      mythis.errorField[key] = false;
                    });
                    //membuat jika error jadi true
                    Object.keys(mythis.errorList).forEach(function (key) {
                      toast.error(mythis.errorList[key], { theme: "colored" });

                      // const myArray = key.split(".");
                      // mythis.errorField[myArray[1]] = true;
                      mythis.errorField[key] = true;
                    });
                  }
                } else {
                  toast.error(error.response.data.message, {
                    theme: "colored",
                  });
                }
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log("Error", error.message);
              }
            });
          /////////////////////////////////////////////////////////////////////
        }
      });
    },
    padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    },
    formatDate(date) {
      return (
        [
          date.getFullYear(),
          this.padTo2Digits(date.getMonth() + 1),
          this.padTo2Digits(date.getDate()),
        ].join("-") +
        " " +
        [
          this.padTo2Digits(date.getHours()),
          this.padTo2Digits(date.getMinutes()),
          this.padTo2Digits(date.getSeconds()),
        ].join(":")
      );
    },
    async getDataExportExcel() {
      var mythis = this;
      mythis.$root.presentLoading();
      var nn = 0;
      var count = 1;
      var limitx = 10000;
      var offsetx = 0;
      var baris = 0;

      var nomor_x = 1;
      var br_pdf = 0;
      var br_flag = 0;
      var br_string = "";
      var html = "";

      var baris_excel = 0;
      // mythis.json_data = [];
      mythis.data_x_excel = [];

      while (count > 0) {
        offsetx = limitx * nn;

        const reqData = await axios({
          method: "get",
          url:
            mythis.$root.apiHost +
            "si/monthly-sales-data?offset=" +
            offsetx +
            "&limit=" +
            limitx +
            (this.selectedDistCode.dist_code != undefined &&
            this.selectedDistCode.dist_code != "All"
              ? "&dist_code=" + this.selectedDistCode.dist_code
              : "&dist_code=") +
            (this.selectedBranch.kode_cabang != undefined &&
            this.selectedBranch.kode_cabang != "All"
              ? "&branch=" + this.selectedBranch.kode_cabang
              : "&branch=") +
            (this.selectedChannel.chnl_code != undefined &&
            this.selectedChannel.chnl_code != "All"
              ? "&chnl_code=" + this.selectedChannel.chnl_code
              : "&chnl_code=") +
            (this.selectedRegionName.region_name != undefined &&
            this.selectedRegionName.region_name != "All"
              ? "&region_name=" + this.selectedRegionName.region_name
              : "&region_name=") +
            (this.selectedBrand.brand_name != undefined &&
            this.selectedBrand.brand_name != "All"
              ? "&brand_name=" + this.selectedBrand.brand_name
              : "&brand_name=") +
            (this.selectedStatusProduct.status_product != undefined &&
            this.selectedStatusProduct.status_product != "All"
              ? "&status_product=" + this.selectedStatusProduct.status_product
              : "&status_product=") +
            (this.selectedYearPeriode.tahun != undefined &&
            this.selectedYearPeriode.tahun != "All"
              ? "&tahun=" + this.selectedYearPeriode.tahun
              : "&tahun="),
          // "&branch=" +
          // this.selectedBranch.kode_cabang +
          // "&chnl_code=" +
          // this.selectedChannel.chnl_code +
          // "&region_name=" +
          // this.selectedRegionName.region_name +
          // "&brand_name=" +
          // this.selectedBrand.brand_name +
          // "&status_product=" +
          // this.selectedStatusProduct.status_product +
          // "&tahun="
          // this.selectedYearPeriode.tahun
        });

        console.log(reqData);

        const resData = reqData.data;
        console.log(resData.results.length);
        if (resData.results.length == 0) {
          count = 0;
        }

        Object.keys(resData.results).forEach(function (key) {
          const countries_x = {
            nomor: nomor_x,

            DistCode: " " + resData.results[key].dist_code,
            Channel: resData.results[key].chnl_code,
            Region: resData.results[key].region_name,
            Area: resData.results[key].area_name,
            Cabang: resData.results[key].nama_cabang,
            ParentCode: resData.results[key].parent_code,
            ItemCode: resData.results[key].item_code,
            SKU: resData.results[key].item_name,
            Brand: resData.results[key].brand_name,
            Kategori: resData.results[key].kategori,
            StatusProduct: resData.results[key].status_product,
            // YOP: resData.results[key].tahun,
            month_1: resData.results[key].month_1,
            month_2: resData.results[key].month_2,
            month_3: resData.results[key].month_3,
            month_4: resData.results[key].month_4,
            month_5: resData.results[key].month_5,
            month_6: resData.results[key].month_6,
            month_7: resData.results[key].month_7,
            month_8: resData.results[key].month_8,
            month_9: resData.results[key].month_9,
            month_10: resData.results[key].month_10,
            month_11: resData.results[key].month_11,
            month_12: resData.results[key].month_12,
            YearlyAverageUnit: resData.results[key].yearly_average_unit,
            YearlyAverageValue: resData.results[key].yearly_average_value,
            Average9BulanUnit: resData.results[key].average_9_month_unit,
            Average9BulanValue: resData.results[key].average_9_month_value,
            Average6BulanUnit: resData.results[key].average_6_month_unit,
            Average6BulanValue: resData.results[key].average_6_month_value,
            Average3BulanUnit: resData.results[key].average_3_month_unit,
            Average3BulanValue: resData.results[key].average_3_month_value,
            AverageSales: resData.results[key].average_sales,
            PurchaseSuggestion: resData.results[key].purchase_suggestion,
            PurchaseValue: resData.results[key].purchase_value,
            StockOnHandUnit: resData.results[key].stock_on_hand_unit,
            Doi3Month: resData.results[key].doi_3_month,
            StatusTrend: resData.results[key].status_trend,
            Delta: resData.results[key].delta,
            QtyPo: resData.results[key].qty_po,
            QtyScReg: resData.results[key].qty_sc_reg,
            ServiceLevel: resData.results[key].service_level,
            PIC: resData.results[key].pic,
          };
          mythis.data_x_excel[baris_excel] = countries_x;

          br_pdf++;
          baris_excel++;
          nomor_x++;
          ////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////
        });

        nn = nn + 1;
        if (resData.count < resData.nomorBaris) {
          count = 0;
        }
        if (nn >= 100) {
          count = 0;
        }
      }

      baris_excel++;
      //Penutup Excel

      baris_excel++;
      var countries_x = {
        nomor: "",
        nama: "Print Date",
        nik: mythis.formatDate(new Date()),
      };
      mythis.data_x_excel[baris_excel] = countries_x;

      mythis.json_data = mythis.data_x_excel;
      mythis.flagDownloadXLS = 1;

      var a = new Date().toLocaleString("en-GB");
      mythis.nama_excelnya = "MASTER_TREND_SALES_" + a + ".xlsx";
      // mythis.nama_sheetnya = mythis.nama_excelnya;

      mythis.$root.stopLoading();
    },

    download_excel_xyz() {},
    async startDownload() {
      await this.getDataExportExcel();
    },
    finishDownload() {},
    logs() {
      const csvInput = this.$refs.csvInput.csvRef.files[0].name;
      this.fileUpload = csvInput;
      console.log(csvInput);
    },

    show_modal() {
      this.modal = !this.modal;
      if (this.modal == false) {
        this.flagButtonAdd = true;
        this.resetForm();
      }
    },
    async jqueryDelEdit() {
      const mythis = this;
      $(document).on("click", "#editData", async function () {
        let id = $(this).data("id");
        await mythis.getData(id);
        mythis.show_modal();
      });
      $(document).on("click", "#deleteData", function () {
        let id = $(this).data("id");
        mythis.deleteTodo(id);
      });
    },
    getTable() {
      var mythis = this;
      this.grid = new Grid();
      this.grid.updateConfig({
        // language: idID,
        pagination: {
          limit: this.newlimit,
          server: {
            url: (prev, page, limit) =>
              `${prev}${prev.includes("?") ? "&" : "?"}limit=${limit}&offset=${
                page * limit
              }${
                this.selectedDistCode.dist_code != undefined &&
                this.selectedDistCode.dist_code != "All"
                  ? "&dist_code=" + this.selectedDistCode.dist_code
                  : "&dist_code="
              }${
                this.selectedRegionName.region_name != undefined &&
                this.selectedRegionName.region_name != "All"
                  ? "&region_name=" + this.selectedRegionName.region_name
                  : "&region_name="
              }${
                this.selectedBranch.nama_cabang != undefined &&
                this.selectedBranch.nama_cabang != "All"
                  ? "&branch=" + this.selectedBranch.kode_cabang
                  : "&branch="
              }${
                this.selectedChannel.chnl_code != undefined &&
                this.selectedChannel.chnl_code != "All"
                  ? "&chnl_code=" + this.selectedChannel.chnl_code
                  : "&chnl_code="
              }${
                this.selectedBrand.brand_name != undefined &&
                this.selectedBrand.brand_name != "All"
                  ? "&brand_name=" + this.selectedBrand.brand_name
                  : "&brand_name="
              }${
                this.selectedStatusProduct.status_product != undefined &&
                this.selectedStatusProduct.status_product != "All"
                  ? "&status_product=" +
                    this.selectedStatusProduct.status_product
                  : "&status_product="
              }${
                this.selectedYearPeriode.tahun != undefined &&
                this.selectedYearPeriode.tahun != "All"
                  ? "&tahun=" + this.selectedYearPeriode.tahun
                  : "&tahun="
              }${
                this.selectedMonth != undefined && this.selectedMonth != "All"
                  ? "&selected_month=" + this.selectedMonth
                  : "&selected_month="
              }
                  `,
          },
        },
        search: {
          server: {
            url: (prev, keyword) => `${prev}?search=${keyword}`,
          },
        },
        columns: [
          { name: "ID", hidden: true },
          "No",
          "DISTRIBUTOR",
          "CHANNEL",
          "REGION",
          "AREA",
          "CABANG",
          "PARENT CODE",
          "ITEM CODE",
          "SKU",
          "BRAND",
          "KATEGORI",
          "STATUS PRODUCT",
          // "YOP",
          "MONTH 1",
          "MONTH 2",
          "MONTH 3",
          "MONTH 4",
          "MONTH 5",
          "MONTH 6",
          "MONTH 7",
          "MONTH 8",
          "MONTH 9",
          "MONTH 10",
          "MONTH 11",
          "MONTH 12",
          "YEARLY AVERAGE UNIT",
          "YEARLY AVERAGE VALUE",
          "AVERAGE 9 BULAN UNIT",
          "AVERAGE 9 BULAN VALUE",
          "AVERAGE 6 BULAN UNIT",
          "AVERAGE 6 BULAN VALUE",
          "AVERAGE 3 BULAN UNIT",
          "AVERAGE 3 BULAN VALUE",
          "AVERAGE SALES",
          "PURCHASE SUGGESTION",
          "PURCHASE VALUE",
          "STOCK ON HAND UNIT",
          "DOI 3 MONTH",
          "STATUS TREND",
          "DELTA",
          "QTY PO",
          "QTY SC REG",
          "SERVICE LEVEL",
          "PIC",

          // {
          //   name: "Action",
          //   formatter: (_, row) =>
          //     mythis.$root.accessRoles[mythis.access_page].update &&
          //     mythis.$root.accessRoles[mythis.access_page].delete
          //       ? html(
          //           `
          //       <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa fa-pencil-square-o"></i></button>
          //       &nbsp;&nbsp;&nbsp;
          //       <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa fa-trash-o"></i></button>
          //     `
          //         )
          //       : mythis.$root.accessRoles[mythis.access_page].update
          //       ? html(
          //           `
          //       <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa fa-pencil-square-o"></i></button>`
          //         )
          //       : mythis.$root.accessRoles[mythis.access_page].delete
          //       ? html(`&nbsp;&nbsp;&nbsp;
          //       <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa fa-trash-o"></i></button>`)
          //       : ``,
          // },
        ],
        style: {
          table: {
            border: "1px solid #ccc",
            width: "auto",
            "min-width": "100%",
          },
          th: {
            background: "linear-gradient(135deg, #3a8fb7, #1a5b92)", // Gradient background
            color: "#ffffff", // White text color for contrast
            "border-bottom": "2px solid #1a5b92", // Darker border for header bottom
            "text-align": "center", // Center-align header text
            padding: "12px 20px",
            "font-size": "14px",
            "font-weight": "bold", // Bold font for header
            "white-space": "nowrap",
            "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)", // Subtle text shadow for depth
          },
          td: {
            "text-align": "center",
            padding: "14px 10px",
            "font-size": "13px",
            border: "1px solid #ddd",
            "white-space": "nowrap",
          },
        },
        server: {
          url: this.$root.apiHost + this.$root.prefixApi + "monthly-sales-data",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.dist_code}</span>`),
              html(`<span class="pull-left">${card.chnl_code}</span>`),
              html(`<span class="pull-left">${card.region_name}</span>`),
              html(`<span class="pull-left">${card.area_name}</span>`),
              html(`<span class="pull-left">${card.nama_cabang}</span>`),
              html(`<span class="pull-left">${card.parent_code}</span>`),
              html(`<span class="pull-left">${card.item_code}</span>`),
              html(`<span class="pull-left">${card.item_name}</span>`),
              html(`<span class="pull-left">${card.brand_name}</span>`),
              html(`<span class="pull-left">${card.kategori}</span>`),
              html(`<span class="pull-left">${card.status_product}</span>`),
              // html(`<span class="pull-left">${card.tahun}</span>`),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_1
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_2
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_3
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_4
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_5
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_6
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_7
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_8
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_9
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_10
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_11
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.month_12
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.yearly_average_unit
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.yearly_average_value
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.average_9_month_unit
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.average_9_month_value
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.average_6_month_unit
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.average_6_month_value
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.average_3_month_unit
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.average_3_month_value
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.average_sales
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.purchase_suggestion
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.purchase_value
                )}</span>`
              ),
              html(`<span class="pull-left">${card.stock_on_hand_unit}</span>`),
              html(`<span class="pull-left">${card.doi_3_month}</span>`),
              html(`<span class="pull-left">${card.status_trend}</span>`),
              html(`<span class="pull-left">${card.delta}</span>`),
              html(`<span class="pull-left">${card.qty_po}</span>`),
              html(`<span class="pull-left">${card.qty_sc_reg}</span>`),
              html(`<span class="pull-left">${card.service_level}</span>`),
              html(`<span class="pull-left">${card.pic}</span>`),
            ]),
          total: (data) => data.count,
          handle: (res) => {
            // no matching records found
            if (res.status === 404) return { data: [] };
            if (res.ok) return res.json();

            throw Error("oh no :(");
          },
        },
      });
      // DOM instead of vue selector because we are using vanilla JS
      this.grid.render(document.getElementById("wrapper2"));
      this.number = 0;

      $(document).off("click", "#editData");
      $(document).off("click", "#deleteData");
      mythis.jqueryDelEdit();
      this.status_table = true;
      this.createPaginationControl(this.grid);
    },
    deleteTodo(id) {
      var mythis = this;
      Swal.fire({
        title: "Delete Data",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          mythis.$root.presentLoading();
          const config = {
            // const AuthStr = "bearer " + localStorage.getItem("token");
            // const config = {
            //   headers: {
            //     Authorization: AuthStr,
            //   },
            data: {
              fileUpload: "form satuan",
              userid: mythis.userid,
            },
          };
          axios
            .delete(
              mythis.$root.apiHost + mythis.$root.prefixApi + `trend/${id}`,
              config
            )
            .then((res) => {
              //console.log(res.data.data);
              // /Swal.fire("Terhapus!", "Data telah sukses dihapus", "success");
              Swal.fire("Deleted!", "Data has been deleted", "success");

              mythis.$root.stopLoading();
              mythis.refreshTable();
              mythis.resetForm();
            });
        }
      });
    },
    editTodo() {
      var mythis = this;
      mythis.$root.flagButtonLoading = true;
      // const AuthStr = "bearer " + localStorage.getItem("token");

      //   headers: {
      //     Authorization: AuthStr,
      //   },
      // };
      const config = "";
      axios
        .put(
          mythis.$root.apiHost +
            mythis.$root.prefixApi +
            "trend/" +
            mythis.todo.id,
          {
            dist_code: mythis.todo.dist_code,
            chnl_code: mythis.todo.chnl_code,
            region_name: mythis.todo.region_name,
            area_name: mythis.todo.area_name,
            nama_cabang: mythis.todo.nama_cabang,
            parent_code: mythis.todo.parent_code,
            item_code: mythis.todo.item_code,
            item_name: mythis.todo.item_name,
            brand_name: mythis.todo.brand_name,
            kategori: mythis.todo.kategori,
            status_product: mythis.todo.status_product,
            month_1: mythis.todo.month_1,
            month_2: mythis.todo.month_2,
            month_3: mythis.todo.month_3,
            month_4: mythis.todo.month_4,
            month_5: mythis.todo.month_5,
            month_6: mythis.todo.month_6,
            month_7: mythis.todo.month_7,
            month_8: mythis.todo.month_8,
            month_9: mythis.todo.month_9,
            month_10: mythis.todo.month_10,
            month_11: mythis.todo.month_11,
            month_12: mythis.todo.month_12,
            yearly_average_unit: mythis.todo.yearly_average_unit,
            yearly_average_value: mythis.todo.yearly_average_value,
            average_9_month_unit: mythis.todo.average_9_month_unit,
            average_9_month_value: mythis.todo.average_9_month_value,
            average_6_month_unit: mythis.todo.average_6_month_unit,
            average_6_month_value: mythis.todo.average_6_month_value,
            average_3_month_unit: mythis.todo.average_3_month_unit,
            average_3_month_value: mythis.todo.average_3_month_value,
            doi_3_month: mythis.todo.doi_3_month,
            status_trend: mythis.todo.status_trend,
            delta: mythis.todo.delta,
            pic: mythis.todo.pic,
            average_sales: mythis.todo.average_sales,
            purchase_suggestion: mythis.todo.purchase_suggestion,
            purchase_value: mythis.todo.purchase_value,
            userid: mythis.userid,
          },
          config
        )
        .then((res) => {
          //console.log(res);
          //alert(res.data.message);
          Swal.fire("Updated!", res.data.message, "success");
          mythis.$root.flagButtonLoading = false;
          mythis.resetForm();
          mythis.show_modal();
          mythis.refreshTable();
        })
        .catch(function (error) {
          mythis.$root.flagButtonLoading = false;
          if (error.response) {
            //console.log(error.response.data);
            if (error.response.status == 422) {
              mythis.errorList = error.response.data;
              mythis.$root.loader = false;
              if (Object.keys(mythis.errorList).length > 0) {
                //refresh semua menjadi false
                Object.keys(mythis.errorField).forEach(function (key) {
                  mythis.errorField[key] = false;
                });
                //membuat jika error jadi true
                Object.keys(mythis.errorList).forEach(function (key) {
                  toast.error(mythis.errorList[key], { theme: "colored" });

                  // const myArray = key.split(".");
                  // mythis.errorField[myArray[1]] = true;
                  mythis.errorField[key] = true;
                });
              }
            } else {
              toast.error(error.response.data.message, {
                theme: "colored",
              });
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
    async getData(id) {
      var mythis = this;
      mythis.flagButtonAdd = false;
      mythis.$root.presentLoading();
      mythis.todo = {};
      // const AuthStr = "bearer " + localStorage.getItem("token");
      const config = {
        // headers: {
        //   Authorization: AuthStr,
        // },
      };
      await axios
        .get(mythis.$root.apiHost + mythis.$root.prefixApi + `trend`, config)
        .then(async (res) => {
          // console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.dist_code = res.data.data.dist_code;
          mythis.todo.chnl_code = res.data.data.chnl_code;
          mythis.todo.region_name = res.data.data.region_name;
          mythis.todo.area_name = res.data.data.area_name;
          mythis.todo.nama_cabang = res.data.data.nama_cabang;
          mythis.todo.parent_code = res.data.data.parent_code;
          mythis.todo.item_code = res.data.data.item_code;
          mythis.todo.item_name = res.data.data.item_name;
          mythis.todo.brand_name = res.data.data.brand_name;
          mythis.todo.kategori = res.data.data.kategori;
          mythis.todo.status_product = res.data.data.status_product;
          mythis.todo.month_1 = res.data.data.month_1;
          mythis.todo.month_2 = res.data.data.month_2;
          mythis.todo.month_3 = res.data.data.month_3;
          mythis.todo.month_4 = res.data.data.month_4;
          mythis.todo.month_5 = res.data.data.month_5;
          mythis.todo.month_6 = res.data.data.month_6;
          mythis.todo.month_7 = res.data.data.month_7;
          mythis.todo.month_8 = res.data.data.month_8;
          mythis.todo.month_9 = res.data.data.month_9;
          mythis.todo.month_10 = res.data.data.month_10;
          mythis.todo.month_11 = res.data.data.month_11;
          mythis.todo.month_12 = res.data.data.month_12;
          mythis.todo.yearly_average_unit = res.data.data.yearly_average_unit;
          mythis.todo.yearly_average_value = res.data.data.yearly_average_value;
          mythis.todo.average_9_month_unit = res.data.data.average_9_month_unit;
          mythis.todo.average_9_month_value =
            res.data.data.average_9_month_value;
          mythis.todo.average_6_month_unit = res.data.data.average_6_month_unit;
          mythis.todo.average_6_month_value =
            res.data.data.average_6_month_value;
          mythis.todo.average_3_month_unit = res.data.data.average_3_month_unit;
          mythis.todo.average_3_month_value =
            res.data.data.average_3_month_value;
          mythis.todo.average_sales = res.data.data.average_sales;
          mythis.todo.purchase_suggestion = res.data.data.purchase_suggestion;
          mythis.todo.purchase_value = res.data.data.purchase_value;
          mythis.todo.stock_on_hand_unit = res.data.data.stock_on_hand_unit;
          mythis.todo.doi_3_month = res.data.data.doi_3_month;
          mythis.todo.status_trend = res.data.data.status_trend;
          mythis.todo.delta = res.data.data.delta;
          mythis.todo.qty_po = res.data.data.qty_po;
          mythis.todo.qty_sc_reg = res.data.data.qty_sc_reg;
          mythis.todo.service_level = res.data.data.service_level;
          mythis.todo.pic = res.data.data.pic;

          document.getElementById("inputA").focus(); // sets the focus on the input
          mythis.$root.stopLoading();
        });
    },
  },
};
</script>

<style scoped>
/* Container utama untuk dropdown bulan */
.month-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px; /* Sesuaikan lebar sesuai kebutuhan */
  margin-bottom: 10px;
}

/* Label untuk dropdown */
.month-label {
  font-weight: bold;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}

/* Wrapper untuk icon dan dropdown */
.month-dropdown-wrapper {
  position: relative;
  width: 100%;
}

/* Styling untuk dropdown bulan */
.month-dropdown {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  appearance: none;
  outline: none;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

/* Efek hover dan fokus pada dropdown */
.month-dropdown:hover {
  border-color: #007bff;
}

.month-dropdown:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Icon untuk dropdown */
.month-dropdown-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  color: #333;
  font-size: 12px;
}
.input-error {
  border: red 1px solid;
}
.button-container {
  display: flex; /* Aligns buttons in a row */
  justify-content: flex-start; /* Aligns items to the left */
  gap: 10px; /* Space between buttons */
  margin: 20px 0; /* Margin for spacing above and below */
}

.btn {
  padding: 8px 12px; /* Smaller button padding */
  font-size: 12px; /* Smaller font size */
  border-radius: 4px; /* Rounded corners */
  border: none; /* Remove default border */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background 0.3s, transform 0.3s; /* Smooth transition */
}

.btn-info {
  background: linear-gradient(
    135deg,
    #3a8fb7,
    #1a5b92
  ); /* Warna gradien biru */
  color: white; /* Teks putih untuk kontras */
  border: none; /* Hapus border */
  border-radius: 5px; /* Sudut agak membulat */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Efek transisi */
}

.btn-info:hover {
  background: linear-gradient(
    135deg,
    #1a5b92,
    #3a8fb7
  ); /* Gradien terbalik saat hover */
  transform: scale(1.05); /* Membesarkan sedikit saat hover */
}

.btn-primary {
  background-color: #5895d6; /* Primary button background color */
  color: white; /* Text color */
}

.btn-primary:hover {
  background-color: #0056b3; /* Darker shade on hover */
  transform: scale(1.05); /* Slightly enlarges button on hover */
}
.btn-success {
  background-color: #830768; /* Green background color */
  color: white; /* Text color */
}

.btn-success:hover {
  background-color: #cf189b; /* Darker shade on hover */
  transform: scale(1.05); /* Slightly enlarges button on hover */
}
.centered-button-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Sesuaikan lebar sesuai kebutuhan */
  padding: 0 20px; /* Jarak antara button dan sisi container */
  height: 100px;
}

.centered-button-wrapper button {
  margin: 0 10px; /* Jarak antar button */
}
</style>
