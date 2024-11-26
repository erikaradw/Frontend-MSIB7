<template>
  <!---------------------------- Modal -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    rel="stylesheet"
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
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Tahun</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="Input tahun"
                    v-model="todo.tahun"
                    :class="
                      errorField.tahun
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="(val) => (todo.tahun = todo.tahun.toUpperCase())"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Bulan</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="Input bulan"
                    v-model="todo.bulan"
                    :class="
                      errorField.bulan
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="(val) => (todo.bulan = todo.bulan.toUpperCase())"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">distCode</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input dist_code"
                    v-model="todo.dist_code"
                    :class="
                      errorField.dist_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.dist_code = todo.dist_code.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">chnlCode</label>
                  <input
                    type="text"
                    placeholder="Input chnl_code"
                    v-model="todo.chnl_code"
                    :class="
                      errorField.chnl_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.chnl_code = todo.chnl_code.toUpperCase())
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">brchName</label>
                  <input
                    type="text"
                    placeholder="Input brch_name"
                    v-model="todo.brch_name"
                    :class="
                      errorField.brch_name
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.brch_name = todo.brch_name.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">itemCode</label>
                  <input
                    type="text"
                    placeholder="Input item_code"
                    v-model="todo.item_code"
                    :class="
                      errorField.item_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.item_code = todo.item_code.toUpperCase())
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">NetSalesUnit</label>
                  <input
                    type="text"
                    placeholder="Input net_sales_unit"
                    v-model="todo.net_sales_unit"
                    :class="
                      errorField.net_sales_unit
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) =>
                        (todo.net_sales_unit =
                          todo.net_sales_unit.toUpperCase())
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">cust code</label>
                  <input
                    type="text"
                    placeholder="Input cust_code"
                    v-model="todo.cust_code"
                    :class="
                      errorField.cust_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.cust_code = todo.cust_code.toUpperCase())
                    "
                  />
                </div>
              </div>
            </div>
          </div>

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
                  todo.bulan == null ||
                  todo.bulan == '' ||
                  todo.tahun == null ||
                  todo.tahun == '' ||
                  todo.dist_code == null ||
                  todo.dist_code == '' ||
                  todo.kode_cabang == null ||
                  todo.kode_cabang == '' ||
                  todo.chnl_code == null ||
                  todo.chnl_code == '' ||
                  todo.brch_name == null ||
                  todo.brch_name == '' ||
                  todo.item_code == null ||
                  todo.item_code == '' ||
                  todo.cust_code == null ||
                  todo.cust_code == '' ||
                  todo.net_sales_unit == null ||
                  todo.net_sales_unit == ''
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
                  todo.bulan == null ||
                  todo.bulan == '' ||
                  todo.tahun == null ||
                  todo.tahun == '' ||
                  todo.dist_code == null ||
                  todo.dist_code == '' ||
                  todo.kode_cabang == null ||
                  todo.kode_cabang == '' ||
                  todo.chnl_code == null ||
                  todo.chnl_code == '' ||
                  todo.brch_name == null ||
                  todo.brch_name == '' ||
                  todo.item_code == null ||
                  todo.item_code == '' ||
                  todo.cust_code == null ||
                  todo.cust_code == '' ||
                  todo.net_sales_unit == null ||
                  todo.net_sales_unit == ''
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
          <strong>MENU SALES{{ $root.judulHalaman }}</strong>
        </h2>

        <i v-if="!status_table" class="fa fa-spinner fa-spin text-default"></i>
      </div>
      <!-- END Block Title -->
      <button class="btn btn-sm btn-primary" @click="showFilterModal = true">
        <i class="fa fa-filter"></i> Filter Data
      </button>

      <div class="block-content">
        <div class="filter-container">
          <!-- Button untuk membuka modal filter -->

          <!-- Modal Filter -->
          <div
            v-if="showFilterModal"
            class="modal fade in"
            style="display: block"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h4>Filter Data</h4>
                  <button class="close" @click="showFilterModal = false">
                    <span>&times;</span>
                  </button>
                </div>

                <div class="modal-body">
                  <!-- Filter Dist Code -->
                  <div class="form-group">
                    <label>Distributor</label>
                    <select class="form-control" v-model="filters.dist_code">
                      <option value="">Pilih Distributor</option>
                      <option
                        v-for="dist_code in dist_codes"
                        :key="dist_code"
                        :value="dist_code"
                      >
                        {{ dist_code }}
                      </option>
                    </select>
                  </div>

                  <!-- Filter Tahun -->
                  <div class="form-group">
                    <label>Tahun</label>
                    <select class="form-control" v-model="filters.tahun">
                      <option value="">Pilih Tahun</option>
                      <option v-for="year in years" :key="year" :value="year">
                        {{ year }}
                      </option>
                    </select>
                  </div>

                  <!-- Filter Bulan -->
                  <div class="form-group">
                    <label>Bulan</label>
                    <select class="form-control" v-model="filters.bulan">
                      <option value="">Pilih Bulan</option>
                      <option
                        v-for="(month, index) in months"
                        :key="index"
                        :value="month.value"
                      >
                        {{ month.label }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="modal-footer">
                  <button class="btn btn-sm btn-primary" @click="refreshTable">
                    Search
                  </button>
                  <!-- <button class="btn btn-sm btn-danger" @click="applyFilters">
                    Delete
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!------------------------>
        <!-- <pre>{{ csv }}</pre> -->

        <!-- <div v-if="csv != null">
          <strong>{{ csv.length }}</strong> data<br />
        </div>

        <vue-csv-import v-model="csv" :fields="dataImportCsv">
          <vue-csv-toggle-headers></vue-csv-toggle-headers>
          <vue-csv-errors></vue-csv-errors>
          <vue-csv-input></vue-csv-input>
          <vue-csv-table-map
            :auto-match="true"
            :table-attributes="{
              id: 'csv=table',
              class: 'table table-bordered table-hover',
            }"
          ></vue-csv-table-map>
        </vue-csv-import>

        <br />
        <button
          v-if="csv != null"
          @click="saveTodoBulky()"
          type="button"
          class="btn btn-sm btn-primary pull-left"
        >
          SAVE DATA SALES UNIT
        </button> -->

        <!-- <button @click="deselectAll" class="btn btn-secondary">Deselect All</button> -->
        <div
          v-if="modalBulk"
          :class="modalBulk ? 'modal fade in' : 'modal fade'"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          data-keyboard="false"
          data-backdrop="true"
          :style="modalBulk ? 'display: block;' : 'display: none;'"
        >
          <div class="modal-dialog2 modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                ADD DATA SALES
                <button
                  id="closeModal"
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  :disabled="$root.flagButtonLoading"
                  @click="show_modalBulk()"
                >
                  <span aria-hidden="true">X</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <!-- Menghilangkan input CSV jika flag_checkBulk sudah diatur -->
                      <vue-csv-import v-model="csv" :fields="dataImportCsv">
                        <vue-csv-toggle-headers></vue-csv-toggle-headers>
                        <vue-csv-errors></vue-csv-errors>
                        <vue-csv-input
                          ref="inputCSV"
                          @change="logsCSV"
                        ></vue-csv-input>
                        <h3 v-if="csv != null">Total Data {{ csv.length }}</h3>
                        <vue-csv-table-map
                          :auto-match="true"
                          :table-attributes="{
                            id: 'csv-table',
                            class: 'table table-bordered table-hover',
                          }"
                        ></vue-csv-table-map>
                      </vue-csv-import>
                    </div>
                  </div>
                </div>

                <!-- <div class="row" v-show="flag_checkBulk">
                  <div class="col-md-6">
                    <h4>Total Data Reject {{ csvReject.length }}</h4>
                  </div>
                  <div class="col-md-6">
                    <h4>Total Data Valid {{ csvValid.length }}</h4>
                  </div>
                </div> -->
              </div>

              <div class="modal-footer">
                <div class="form-group form-actions">
                  <div class="col-xs-12">
                    <!-- <button
                      @click="checkTodoBulk()"
                      v-show="csv != null"
                      type="button"
                      class="btn btn-sm btn-success pull-left"
                    >
                      <i
                        v-if="$root.flagButtonLoading"
                        class="fa fa-spinner fa-spin text-default"
                      ></i>
                      CHECK DATA BULK
                    </button> -->
                    <button
                      @click="saveTodoBulky()"
                      type="button"
                      class="btn btn-sm btn-primary pull-left"
                      v-show="csv != null"
                    >
                      <i
                        v-if="$root.flagButtonLoading"
                        class="fa fa-spinner fa-spin text-default"
                      ></i>
                      SAVE DATA SALES UNIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <br /> -->
        <!-- <div class="button-container">
          <download-excel
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

          <button
            class="btn btn-sm btn-primary pull-right"
            @click="exportPdf()"
          >
            <i class="fas fa-file-pdf"></i>Export PDF
          </button>
        </div> -->
        <div class="selection-bar" :class="{ active: selectedRows.length > 0 }">
          <div class="selection-count">{{ selectedRows.length }} selected</div>
          <button
            class="delete-button"
            @click="deleteSelectedRows"
            :disabled="selectedRows.length === 0"
          >
            <i class="fas fa-trash"></i>
            Delete
          </button>
        </div>

        <br />
        <div class="d-flex justify-content-end align-items-center">
          <div>
            <button
              @click="selectAllRows"
              class="btn btn-primary pull-left mr-2"
            >
              Select All
            </button>
            <button
              @click="unselectAllRows"
              class="btn btn-secondary pull-left"
            >
              Unselect All
            </button>

            <button
              class="btn btn-sm btn-danger pull-right"
              data-toggle="tooltip"
              title="Delete All Data"
              @click="deleteAllData"
            >
              <i class="fa fa-trash"></i> Delete All Data
            </button>
            <button
              class="btn btn-sm btn-info pull-right"
              data-toggle="tooltip"
              style="margin-right: 10px"
              title="Import CSV"
              @click="show_modalBulk()"
            >
              <i class="fa fa-upload"></i> Import CSV
            </button>

            <button
              v-if="isUploaded"
              class="btn btn-sm btn-danger pull-right"
              @click="deleteLastUploadedFile"
            >
              <i class="fa fa-trash"></i> Delete Last Uploaded File
            </button>
          </div>
          <!-- <div>
            <ul>
              <li v-for="file in uploadedFiles" :key="file.id">
                <input
                  type="checkbox"
                  v-model="selectedFiles"
                  :value="file.id"
                />
                {{ file.name }}
              </li>
            </ul>
            <button @click="deleteSelectedFiles">Delete Selected</button>
          </div> -->
        </div>
        <!-- Button trigger modal -->
        <!-- <button
            v-if="status_table && $root.accessRoles[access_page].create"
            class="btn btn-sm btn-primary pull-right"
            @click="show_modal()"
          >
            ADD DATA
          </button> -->

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
      penampung: [],
      showFilterModal: false,
      filters: {
        dist_code: "",
        tahun: "",
        bulan: "",
      },
      dist_codes: ["TRS", "PVL", "PPG"],
      months: [
        { value: 1, label: "JANUARI" },
        { value: 2, label: "FEBRUARI" },
        { value: 3, label: "MARET" },
        { value: 4, label: "APRIL" },
        { value: 5, label: "MEI" },
        { value: 6, label: "JUNI" },
        { value: 7, label: "JULI" },
        { value: 8, label: "AGUSTUS" },
        { value: 9, label: "SEPTEMBER" },
        { value: 10, label: "OKTOBER" },
        { value: 11, label: "NOVEMBER" },
        { value: 12, label: "DESEMBER" },
      ],
      years: this.generateYears(),

      selectAll: false,
      selectedRows: [],
      indeterminate: false,
      showSelectionBar: false,
      uploadedFiles: [], // Array untuk menyimpan daftar file yang di-upload
      selectedFiles: [], // Array untuk menyimpan ID file yang dipilih

      isUploaded: false,
      access_page: this.$root.decryptData(localStorage.getItem("halaman")),
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      grid: new Grid(),
      // grid2: new Grid(),
      errorField: {
        tahun: false,
        bulan: false,
        dist_code: false,
        chnl_code: false,
        kode_cabang: false,
        brch_name: false,
        item_code: false,
        net_sales_unit: false,
        cust_code: false,
      },

      userid: 0,
      status_table: false,

      modal: false,
      modalBulk: false,

      todo: {
        tahun: "",
        bulan: "",
        dist_code: "",
        chnl_code: "",
        kode_cabang: "",
        brch_name: "",
        item_code: "",
        net_sales_unit: "",
        cust_code: "",
      },

      flagButtonAdd: true,
      csv: null,
      fileUpload: null,

      dataImportCsv: {
        tahun: {
          label: "tahun",
          required: true,
        },
        bulan: {
          label: "bulan",
          required: true,
        },
        dist_code: {
          label: "dist_code",
          required: true,
        },
        chnl_code: {
          label: "chnl_code",
          required: true,
        },
        kode_cabang: {
          label: "kode_cabang",
          required: true,
        },
        brch_name: {
          label: "brch_name",
          required: true,
        },
        item_code: {
          label: "item_code",
          required: true,
        },
        net_sales_unit: {
          label: "net_sales_unit",
          required: true,
        },
        cust_code: {
          label: "cust_code",
          required: true,
        },
      },
      data_x_tabel: [],
      data_x_excel: [],
      nama_excelnya: "",
      nama_sheetnya: "Sales Unit",
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
        Tahun: "Tahun",
        Bulan: "Bulan",
        distCode: "distCode",
        chnlCode: "chnlCode",
        kodeCabang: "kodeCabang",
        brchName: "brchName",
        itemCode: "itemCode",
        netSalesUnit: "netSalesUnit",
        custCode: "custCode",
      },
      newlimit: 10,
    };
  },
  async mounted() {
    this.bindChecklistEvents();
    this.fetchUploadedFiles();
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
  },
  methods: {
    selectAllRows() {
      console.log(this.penampung);
      this.selectedRows = [];
      if (this.selectedRows.length === this.penampung.length) {
        this.selectedRows = [];
      } else {
        this.selectedRows = this.penampung.map((row) => row.id);
      }
      const checkboxes = document.querySelectorAll(".select-row-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = this.selectedRows; // Set checked state
      });
      // const ids = this.penampung.map((item) => item.id);
      // this.selectedRows = ids; // Ambil ID semua baris
      // console.log(this.selectedRows);
    },
    unselectAllRows() {
      this.selectedRows = [];
      console.log(this.selectedRows);
      const checkboxes = document.querySelectorAll(".select-row-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false; // Set checked state
      });
    },
    toggleRowSelection(event, rowId) {
      console.log(event);
      if (event.target.checked) {
        if (!this.selectedRows.includes(rowId)) {
          this.selectedRows.push(rowId);
        }
      } else {
        this.selectedRows = this.selectedRows.filter((id) => id !== rowId);
      }
      console.log(this.selectedRows);
    },
    async searchData() {
      try {
        console.log("filters:", this.filters);
        const response = await axios.get(
          this.$root.apiHost + this.$root.prefixApi + "fetchFilteredData",
          {
            params: {
              dist_code: this.filters.dist_code,
              tahun: this.filters.tahun,
              bulan: this.filters.bulan,
            },
          }
        );
        if (response.status === 200 && response.data.status) {
          this.refreshTable();
          Swal.fire(
            "Success",
            "Data has been filtered successfully",
            "success"
          );
        } else {
          Swal.fire(
            "Error",
            response.data.message || "Failed to fetch data",
            "error"
          );
        }
        this.showFilterModal = false;
      } catch (error) {
        console.error("Error fetching filtered data:", error);
        Swal.fire("Error", "An error occurred while fetching data", "error");
      }
    },
    generateYears() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = 2020; year <= currentYear; year++) {
        years.push(year.toString());
      }
      return years;
    },

    async applyFilters() {
      const config = {
        data: {
          dist_code: this.filters.dist_code,
          tahun: this.filters.tahun,
          bulan: this.filters.bulan,
        },
      };

      console.log(this.filters);

      const response = await axios.delete(
        this.$root.apiHost + this.$root.prefixApi + "deletefiltersalesunit",
        config
      );
      this.$root.stopLoading();
      if (response.data.status) {
        Swal.fire(
          "Deleted!",
          `All data has been deleted. ${response.data.deleted_rows} rows were deleted.`,
          "success"
        );
        this.refreshTable();
      } else {
        Swal.fire(
          "Error",
          response.data.message || "Failed to delete all data",
          "error"
        );
      }
      // this.$emit("filter-changed", this.filters);
      // this.showFilterModal = false;
    },
    async deleteSelectedRows() {
      // Tampilkan penampung untuk debug
      console.log("Rows to delete:", this.penampung);

      // Konfirmasi penghapusan
      if (!confirm("Are you sure you want to delete the selected rows?")) {
        return;
      }

      // Dapatkan ID yang dipilih
      const listHps = this.selectedRows;

      // Periksa apakah ada data yang dipilih
      if (listHps.length === 0) {
        alert("No rows selected for deletion.");
        return;
      }

      try {
        // Lakukan penghapusan secara paralel
        // await Promise.all(
        //   listHps.map((idTarget) =>
        axios
          // .delete(`http://localhost:8002/si/stock/hapus-banyak-data/${idTarget}`)
          .delete(`http://localhost:8002/si/salesunit/hapus-banyak-data`, {
            data: this.selectedRows,
          })
          .then((res) => {
            console.log(res);
            // console.log(`Row with ID ${idTarget} deleted successfully.`);
          })
          .catch((error) => {
            console.error(`Failed to delete row with ID ${idTarget}:`, error);
          });
        //   )
        // );

        // Tampilkan pesan sukses
        alert("Selected rows deleted successfully.");
      } catch (error) {
        console.error("An error occurred during deletion:", error);
        alert("An error occurred while deleting some rows.");
      }

      // Refresh tabel setelah selesai
      this.refreshTable();
    },
    toggleCheck(event) {
      const icon = event.target;
      if (icon.classList.contains("fa-square-o")) {
        icon.classList.remove("fa-square-o");
        icon.classList.add("fa-check-square-o");
      } else {
        icon.classList.remove("fa-check-square-o");
        icon.classList.add("fa-square-o");
      }
    },

    // Bind the click event after the table is rendered
    bindChecklistEvents() {
      document.addEventListener("click", (event) => {
        if (event.target.classList.contains("checklist-icon")) {
          this.toggleCheck(event); // Call the toggle function on click
        }
      });
    },
    async fetchUploadedFiles() {
      // Ambil daftar file yang sudah di-upload dari backend
      const response = await axios.get("/api/uploaded-files");
      this.uploadedFiles = response.data;
    },
    async deleteSelectedFiles() {
      for (let fileId of this.selectedFiles) {
        await axios.delete(`/api/delete-uploaded-file/${fileId}`);
      }
      this.fetchUploadedFiles(); // Refresh daftar file setelah penghapusan
      this.selectedFiles = []; // Reset pilihan
    },
    //IMPORT CSV
    // checkTodoBulk() {
    //   console.log(this.csv);
    //   let mythis = this;
    //   mythis.$root.presentLoading();
    //   axios
    //     .post(
    //       mythis.$root.apiHost + mythis.$root.prefixApi + salesunitcheckBulk,
    //       {
    //         csv: this.csv,
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       mythis.$root.stopLoading();
    //       mythis.csvValid = res.data.data_valid;
    //       mythis.csvReject = res.data.data_reject;
    //       // mythis.flag_checkBulk = true;
    //     });
    // },
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

        const options = [10, 20, 50, 100]; // Pilihan jumlah rows per page
        options.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          select.appendChild(option);
        });

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
    saveTodoBulk() {
      console.log(this.csv);
      let mythis = this;
      mythis.$root.presentLoading();
      axios
        .post(
          mythis.$root.apiHost + mythis.$root.prefixApi + salesunitinsertBulk,
          {
            csv: this.csvValid,
            user_id: this.userid,
          }
        )
        .then((res) => {
          console.log(res);
          mythis.$root.stopLoading();
          mythis.show_modalBulk();
          mythis.refreshTable();
          Swal.fire("Created!", res.data.message, "success");
        })
        .catch(function (error) {
          mythis.$root.stopLoading();
          mythis.show_modalBulk();
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
    },
    // logsCSV() {
    //   const csvInput = this.$refs.inputCSV.csvRef.files[0].name;
    //   this.fileUpload = csvInput;
    //   console.log(csvInput);
    // },
    logsCSV() {
      const csvInput = this.$refs.inputCSV.csvRef.files[0];
      if (csvInput) {
        this.fileUpload = csvInput.name;
        console.log("File uploaded:", this.fileUpload);
      } else {
        console.log("No file uploaded.");
      }
    },
    show_modalBulk() {
      console.log("ww");
      this.modalBulk = !this.modalBulk;
      if (!this.modalBulk) {
        // this.flag_checkBulk = false;  // Reset flag saat modal ditutup
        this.csv = null; // Reset CSV saat modal ditutup
        this.fileUpload = null;
        this.csvValid = [];
        this.csvReject = [];
      }
    },
    //IMPORT CSV
    mySelectEvent() {
      this.todo.roles = this.tmp.cboRoles.code;
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Lakukan sesuatu dengan file (misalnya parsing atau validasi)
        console.log("File terpilih: ", file);
      }
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
              mythis.$root.apiHost + mythis.$root.prefixApi + "salesunitdelete",
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
    resetForm() {
      var mythis = this;
      Object.keys(mythis.errorField).forEach(function (key) {
        mythis.errorField[key] = false;
        mythis.todo[key] = "";
        //mythis.todo2[key] = "";
      });
      //   mythis.todo.brch_name = false;
      //   mythis.todo.purch_item = false;
      //   mythis.todo.dist_code = false;
      //   mythis.todo.flag_active = false;
    },
    refreshTable() {
      var mythis = this;
      mythis.status_table = false;
      //////////////////////////////
      $("#wrapper2").remove();
      var e = $('<div id="wrapper2"></div>');
      $("#box").append(e);
      this.getTable();
      this.showFilterModal = false;
      //////////////////////////////
    },
    saveTodo() {
      var mythis = this;

      Swal.fire({
        title: "Create Master Sales Unit",
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
          var url =
            mythis.$root.apiHost + mythis.$root.prefixApi + "salesunitBulky";
          axios
            .post(
              url,
              {
                tahun: mythis.todo.tahun,
                bulan: mythis.todo.bulan,
                dist_code: mythis.todo.dist_code,
                chnl_code: mythis.todo.chnl_code,
                kode_cabang: mythis.todo.kode_cabang,
                brch_name: mythis.todo.brch_name,
                item_code: mythis.todo.item_code,
                net_sales_unit: mythis.todo.net_sales_unit,
                cust_code: mythis.todo.cust_code,

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
    deleteLastUploadedFile() {
      Swal.fire({
        title: "Delete Uploaded File",
        text: "Are you sure you want to delete the last uploaded file?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          // Tampilkan indikator loading
          this.$root.presentLoading();
          // axios.delete("http://localhost:8002/M_Region")
          // Request ke backend untuk menghapus file
          axios
            .delete("http://localhost:8002/si/salesunit")
            .then(() => {
              Swal.fire(
                "Deleted!",
                "The last uploaded file has been deleted.",
                "success"
              );
              this.isUploaded = false;
              // Reset variabel frontend
              this.fileUpload = null;
              this.csv = null;
              this.refreshTable();
            })
            .catch((error) => {
              console.error("Error deleting file:", error);
              Swal.fire("Error", "Failed to delete file from server.", "error");
            })
            .finally(() => {
              this.$root.stopLoading();
            });
        }
      });
    },
    saveTodoBulky() {
      var mythis = this;

      Swal.fire({
        title: "Create Master Sales Unit",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          this.isUploaded = true;
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
            mythis.$root.apiHost + mythis.$root.prefixApi + "salesunitBulky";
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
              mythis.show_modalBulk();
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
            "si/salesunit?offset=" +
            offsetx +
            "&limit=" +
            limitx,
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

            Tahun: " " + resData.results[key].tahun,
            Bulan: resData.results[key].bulan,
            distCode: resData.results[key].dist_code,
            chnlCode: resData.results[key].chnl_code,
            KodeCabang: resData.results[key].kode_cabang,
            brchName: resData.results[key].brch_name,
            itemCode: resData.results[key].item_code,
            netSalesUnit: resData.results[key].net_sales_unit,
            custCode: resData.results[key].cust_code,
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
      mythis.nama_excelnya = "MASTER_SALES_UNIT_" + a + ".xlsx";
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
    async exportPdf() {
      const mythis = this;
      mythis.$root.presentLoading();

      try {
        let allData = [];
        let count = 1;
        let nn = 0;
        const limitx = 10000;

        while (count > 0) {
          const offsetx = limitx * nn;

          const reqData = await axios({
            method: "get",
            url:
              mythis.$root.apiHost +
              "si/salesunit?offset=" +
              offsetx +
              "&limit=" +
              limitx,
          });

          const resData = reqData.data;
          allData = [...allData, ...resData.results];

          if (resData.results.length === 0 || resData.results.length < limitx) {
            count = 0;
          }

          nn++;
          if (nn >= 100) {
            // Safety check to prevent infinite loop
            count = 0;
          }
        }

        const doc = new jsPDF();
        let totalPagesExp = "{total_pages_count_string}";

        doc.setFontSize(18);
        doc.text("Master Sales Unit Report", 14, 22);
        doc.setFontSize(11);
        doc.setTextColor(100);

        // Add Created By and Created At information
        if (allData.length > 0) {
          const firstRecord = allData[0];
          doc.setFontSize(10);
        }

        doc.autoTable({
          theme: "striped",
          head: [
            [
              "No",
              "Tahun",
              "Bulan",
              "DistCode",
              "ChnlCode",
              "KodeCabang",
              "BrchName",
              "ItemCode",
              "netSalesUnit",
              "custCode",
            ],
          ],
          body: allData.map((item, index) => [
            index + 1,
            item.tahun,
            item.bulan,
            item.dist_code,
            item.chnl_code,
            item.kode_cabang,
            item.brch_name,
            item.item_code,
            item.net_sales_unit,
            item.cust_code,
          ]),
          startY: 40, // Adjusted to accommodate the new information
          didDrawPage: function (data) {
            // Footer
            let str = "Page " + doc.internal.getNumberOfPages();
            if (typeof doc.putTotalPages === "function") {
              str = str + " of " + totalPagesExp;
            }
            doc.setFontSize(10);

            let pageSize = doc.internal.pageSize;
            let pageHeight = pageSize.height
              ? pageSize.height
              : pageSize.getHeight();
            doc.text(str, data.settings.margin.left, pageHeight - 10);
          },
          showHead: "everyPage",
        });

        if (typeof doc.putTotalPages === "function") {
          doc.putTotalPages(totalPagesExp);
        }

        const fileName =
          "Master_Sales_Unit_Report_" + mythis.formatDate(new Date()) + ".pdf";
        doc.save(fileName);
        console.log(fileName + " generated");

        mythis.$root.stopLoading();
        Swal.fire("Success", "PDF has been generated successfully", "success");
      } catch (error) {
        console.error("Error generating PDF:", error);
        mythis.$root.stopLoading();
        Swal.fire("Error", "Failed to generate PDF", "error");
      }
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
              }&tahun=${this.filters.tahun}&bulan=${
                this.filters.bulan
              }&dist_code=${this.filters.dist_code}`,
          },
        },
        search: {
          server: {
            url: (prev, keyword) => `${prev}?search=${keyword}`,
          },
        },
        columns: [
          {
            name: "#", // Ganti header menjadi pagar
            formatter: (_, row) =>
              h("input", {
                type: "checkbox",
                class: "select-row-checkbox",
                style: `
             position: relative;
             width: 20px;
             height: 20px;
             background-color: #ffffff;
             border: 2px solid #007bff;
             border-radius: 5px;
             cursor: pointer;
             transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
           `,
                value: row.cells[0].data,
                checked: this.selectedRows.includes(row.cells[0].data),
                onChange: (e) => this.toggleRowSelection(e, row.cells[0].data),
              }),
            sort: false,
            width: "40px",
          },
          // { name: "ID", hidden: true },
          { name: "No", hidden: false, sort: true },
          { name: "Tahun", sort: true },
          { name: "Bulan", sort: true },
          { name: "distCode", sort: true },
          { name: "chnlCode", sort: true },
          { name: "cabangCode", sort: true },
          { name: "brchName", sort: true },
          { name: "itemCode", sort: true },
          { name: "netSalesUnit", sort: true },
          { name: "custCode", sort: true },

          {
            name: "Action",
            formatter: (_, row) =>
              mythis.$root.accessRoles[mythis.access_page].update &&
              mythis.$root.accessRoles[mythis.access_page].delete
                ? html(
                    `
          <button data-id="${row.cells[0].data}" class="btn btn-sm btn-primary text-white" id="editData" data-toggle="tooltip" title="Edit"><i class="fa fa-pencil-square-o"></i></button>
          &nbsp;&nbsp;&nbsp;
          <button data-id="${row.cells[0].data}" class="btn btn-sm btn-info text-white" id="deleteData" data-toggle="tooltip" title="Delete"><i class="fa fa-trash"></i></button>
        `
                  )
                : mythis.$root.accessRoles[mythis.access_page].update
                ? html(
                    `
          <button data-id="${row.cells[0].data}" class="btn btn-sm btn-primary text-white" id="editData" data-toggle="tooltip" title="Edit"><i class="fa fa-pencil-square-o"></i></button>`
                  )
                : mythis.$root.accessRoles[mythis.access_page].delete
                ? html(
                    `&nbsp;&nbsp;&nbsp;
          <button data-id="${row.cells[0].data}" class="btn btn-sm btn-info text-white" id="deleteData" data-toggle="tooltip" title="Delete"><i class="fa fa-trash"></i></button>`
                  )
                : ``,
          },
        ],
        style: {
          table: {
            border: "1px solid #ccc",
            width: "100%",
            "table-layout": "auto",
          },
          th: {
            background: "linear-gradient(135deg, #3a8fb7, #1a5b92)",
            color: "#ffffff",
            padding: "8px 12px",
            "font-size": "12px",
            "text-align": "center",
            "white-space": "normal", // Membungkus teks
            "word-break": "break-word", // Memecah kata panjang
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "line-height": "1.5",
          },
          td: {
            "line-height": "1.5",
            padding: "8px 12px",
            "font-size": "12px",
            "text-align": "center",
            "white-space": "normal", // Membungkus teks
            "word-break": "break-word", // Memecah kata panjang
            overflow: "hidden",
            "text-overflow": "ellipsis",
          },
        },

        server: {
          url: this.$root.apiHost + this.$root.prefixApi + "salesunit",
          then: (data) => {
            this.penampung = data.results;
            return data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.tahun}</span>`),
              html(`<span class="pull-left">${card.bulan}</span>`),
              html(`<span class="pull-left">${card.dist_code}</span>`),
              html(`<span class="pull-left">${card.chnl_code}</span>`),
              html(`<span class="pull-left">${card.kode_cabang}</span>`),
              html(`<span class="pull-left">${card.brch_name}</span>`),
              html(`<span class="pull-left">${card.item_code}</span>`),
              html(`<span class="pull-left">${card.net_sales_unit}</span>`),
              html(`<span class="pull-left">${card.cust_code}</span>`),
            ]);
          },
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
    toggleRowSelection(event, rowId) {
      if (event.target.checked) {
        // Tambahkan ID ke array selectedRows
        this.selectedRows.push(rowId);
      } else {
        // Hapus ID dari array selectedRows
        this.selectedRows = this.selectedRows.filter((id) => id !== rowId);
      }
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
              mythis.$root.apiHost +
                mythis.$root.prefixApi +
                `salesunit?id=${id}`,
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
            "salesunit/" +
            mythis.todo.id,
          {
            tahun: mythis.todo.tahun,
            bulan: mythis.todo.bulan,
            dist_code: mythis.todo.dist_code,
            chnl_code: mythis.todo.chnl_code,
            kode_cabang: mythis.todo.kode_cabang,
            brch_name: mythis.todo.brch_name,
            item_code: mythis.todo.item_code,
            net_sales_unit: mythis.todo.net_sales_unit,
            cust_code: mythis.todo.cust_code,

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
        .get(
          mythis.$root.apiHost + mythis.$root.prefixApi + `salesunit/${id}`,
          config
        )
        .then(async (res) => {
          // console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.tahun = res.data.data.tahun;
          mythis.todo.bulan = res.data.data.bulan;
          mythis.todo.dist_code = res.data.data.dist_code;
          mythis.todo.chnl_code = res.data.data.chnl_code;
          mythis.todo.kode_cabang = res.data.data.kode_cabang;
          mythis.todo.brch_name = res.data.data.brch_name;
          mythis.todo.item_code = res.data.data.item_code;
          mythis.todo.net_sales_unit = res.data.data.net_sales_unit;
          mythis.todo.cust_code = res.data.data.cust_code;

          document.getElementById("inputA").focus(); // sets the focus on the input

          mythis.$root.stopLoading();
        });
    },
  },
};
</script>

<style scoped>
.header-toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 10px;
}
.btn-secondary:hover {
  opacity: 0.8;
}
.btn-secondary {
  background-color: #6c757d;
  border: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}
.selection-bar {
  position: fixed;
  bottom: 16px; /* Memberikan jarak dari bottom */
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  background: white;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  z-index: 1000;
  border: 1px solid #edf2f7;
}

/* Ketika aktif */
.selection-bar.active {
  transform: translateX(-50%) translateY(0);
}

/* Counter selection */
.selection-count {
  color: #4a5568;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.selection-count::before {
  content: "✓";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: #ebf4ff;
  color: #4299e1;
  border-radius: 4px;
  font-size: 11px;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background: #ff5252;
}

.delete-button i {
  font-size: 14px;
}

/* Responsive */
@media (max-width: 640px) {
  .selection-bar {
    bottom: 12px;
    left: 16px;
    right: 16px;
    transform: translateY(100px);
    width: auto;
  }

  .selection-bar.active {
    transform: translateY(0);
  }
}
.custom-file-upload {
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #ff0004;
  color: white;
  border-radius: 4px;
  border: none;
  text-align: center;
  transition: background-color 0.3s ease;
}

.custom-file-upload:hover {
  background-color: #c30404;
  transform: scale(1.05);
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

.btn-primary {
  background-color: #1a5b92; /* Biru tua sesuai dengan tema header tabel */
  color: white;
  margin-right: 10px;
}

.btn-info {
  background-color: #3a8fb7; /* Biru terang sesuai dengan tema header tabel */
  color: white;
}

.btn-primary:hover,
.btn-info:hover {
  transform: scale(1.05); /* Efek sedikit membesar saat hover */
  opacity: 0.9; /* Menambahkan efek hover */
}

.modal-body {
  overflow-x: auto;
  margin-right: 10px;
}

table {
  width: 100%;
  min-width: 600px;
}
</style>
