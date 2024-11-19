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
                  <label for="example-nf-email">dist_code</label>
                  <CmpInputText
                    id="inputA"
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
                  <label for="example-nf-email">tgl_order</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="Input tgl_order"
                    v-model="todo.tgl_order"
                    :class="
                      errorField.tgl_order
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.tgl_order = todo.tgl_order.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">mtg_code</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input mtg_code"
                    v-model="todo.mtg_code"
                    :class="
                      errorField.mtg_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.mtg_code = todo.mtg_code.toUpperCase())
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
                  <label for="example-nf-email">qty_sc_reg</label>
                  <input
                    type="text"
                    placeholder="Input qty_sc_reg"
                    v-model="todo.qty_sc_reg"
                    :class="
                      errorField.qty_sc_reg
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.qty_sc_reg = todo.qty_sc_reg.toUpperCase())
                    "
                  />
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-nf-email">branch_code</label>
                    <input
                      type="text"
                      placeholder="Input qty_sc_reg"
                      v-model="todo.branch_code"
                      :class="
                        errorField.branch_code
                          ? 'form-control input-lg input-error'
                          : 'form-control input-lg'
                      "
                      @input="
                        (val) =>
                          (todo.branch_code = todo.branch_code.toUpperCase())
                      "
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-nf-email">qty_po</label>
                    <input
                      type="text"
                      placeholder="Input qty_po"
                      v-model="todo.qty_po"
                      :class="
                        errorField.qty_po
                          ? 'form-control input-lg input-error'
                          : 'form-control input-lg'
                      "
                      @input="
                        (val) => (todo.qty_po = todo.qty_po.toUpperCase())
                      "
                    />
                  </div>
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
                  todo.tgl_order == null ||
                  todo.tgl_order == '' ||
                  todo.dist_code == null ||
                  todo.dist_code == '' ||
                  todo.mtg_code == null ||
                  todo.mtg_code == '' ||
                  todo.qty_sc_reg == null ||
                  todo.qty_sc_reg == '' ||
                  todo.qty_po == null ||
                  todo.qty_po == '' ||
                  todo.branch_code == null ||
                  todo.branch_code == ''
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
                  todo.tgl_order == null ||
                  todo.tgl_order == '' ||
                  todo.dist_code == null ||
                  todo.dist_code == '' ||
                  todo.mtg_code == null ||
                  todo.mtg_code == '' ||
                  todo.qty_sc_reg == null ||
                  todo.qty_sc_reg == '' ||
                  todo.qty_po == null ||
                  todo.qty_po == '' ||
                  todo.branch_code == null ||
                  todo.branch_code == ''
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
          <strong>MENU PO CUSTOMER {{ $root.judulHalaman }}</strong>
        </h2>

        <i v-if="!status_table" class="fa fa-spinner fa-spin text-default"></i>
      </div>
      <!-- END Block Title -->

      <div class="block-content">
        <div class="filter-container">
          <!-- Button untuk membuka modal filter -->
          <button
            class="btn btn-sm btn-primary"
            @click="showFilterModal = true"
          >
            <i class="fa fa-filter"></i> Filter Data
          </button>

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
                  <button class="btn btn-sm btn-danger" @click="applyFilters">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!------------------------>
        <!-- <pre>{{ csv }}</pre> -->

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
                ADD DATA PO CUSTOMER
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
              </div>

              <div class="modal-footer">
                <div class="form-group form-actions">
                  <div class="col-xs-12">
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
                      SAVE DATA PO CUSTOMER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          <button class="delete-button" @click="deleteSelectedRows">
            <i class="fas fa-trash"></i>
            Delete
          </button>
        </div>

        <div class="d-flex justify-content-end align-items-center pull-right">
          <div>
            <button
              class="btn btn-sm btn-info"
              data-toggle="tooltip"
              style="margin-right: 10px"
              title="Import CSV"
              @click="show_modalBulk()"
            >
              <i class="fa fa-upload"></i> Import CSV
            </button>

            <button
              class="btn btn-sm btn-danger"
              data-toggle="tooltip"
              title="Delete All Data"
              @click="deleteAllData"
            >
              <i class="fa fa-trash"></i> Delete All Data
            </button>

            <button
              v-if="isUploaded"
              class="btn btn-sm btn-danger pull-right"
              @click="deleteLastUploadedFile"
            >
              <i class="fa fa-trash"></i> Delete Last Uploaded File
            </button>
          </div>
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

      selectedRows: [],
      selectAll: false,
      isUploaded: false,
      access_page: this.$root.decryptData(localStorage.getItem("halaman")),
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      grid: new Grid(),
      // grid2: new Grid(),
      errorField: {
        dist_code: false,
        tgl_order: false,
        mtg_code: false,
        qty_sc_reg: false,
        qty_po: false,
        branch_code: false,
      },

      userid: 0,
      status_table: false,

      modal: false,
      modalBulk: false,

      todo: {
        tgl_order: "",
        dist_code: "",
        qty_sc_reg: "",
        qty_po: "",
        mtg_code: "",
        branch_code: "",
      },

      flagButtonAdd: true,
      csv: null,
      fileUpload: null,

      dataImportCsv: {
        dist_code: {
          label: "dist_code",
          required: true,
        },
        tgl_order: {
          label: "tgl_order",
          required: true,
        },
        mtg_code: {
          label: "mtg_code",
          required: true,
        },
        qty_sc_reg: {
          label: "qty_sc_reg",
          required: true,
        },
        qty_po: {
          label: "qty_po",
          required: true,
        },
        branch_code: {
          label: "branch_code",
          required: true,
        },
      },
      data_x_tabel: [],
      data_x_excel: [],
      nama_excelnya: "",
      nama_sheetnya: "PO Customer",
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
        TglOrder: "TglOrder",
        MTGCode: "MTGCode",
        QtyScReg: "QtyScReg",
        QtyPo: "QtyPo",
        BranchCode: "BranchCode",
      },
      newlimit: 10,
    };
  },
  async mounted() {
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
  },
  methods: {
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
        this.$root.apiHost + this.$root.prefixApi + "deletefilterpocust",
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
    },
    toggleSelectAll(event) {
      this.selectAll = event.target.checked; // Update the state of the header checkbox
      if (this.selectAll) {
        // Select all visible rows
        const visibleRows = this.grid.config.server.data || []; // Adjust for server data
        this.selectedRows = visibleRows.map((row) => row[0]); // Extract IDs from rows
      } else {
        // Deselect all rows
        this.selectedRows = [];
      }

      const checkboxes = document.querySelectorAll(".select-row-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = this.selectAll;
      });
    },

    toggleRowSelection(event, rowId) {
      if (event.target.checked) {
        // Add the row ID to the selectedRows array
        if (!this.selectedRows.includes(rowId)) {
          this.selectedRows.push(rowId);
        }
      } else {
        // Remove the row ID from the selectedRows array
        this.selectedRows = this.selectedRows.filter((id) => id !== rowId);
        this.selectAll = false; // Uncheck the "select all" checkbox
      }

      // Update the "select all" checkbox state
      const headerCheckbox = document.querySelector(".select-all-checkbox");
      headerCheckbox.checked =
        this.selectedRows.length === this.grid.config.server.data.length;
      headerCheckbox.indeterminate =
        this.selectedRows.length > 0 &&
        this.selectedRows.length < this.grid.config.server.data.length;
    },
    deleteSelectedRows() {
      if (!confirm("Are you sure you want to delete the selected rows?")) {
        return;
      }
      this.rows = this.rows.filter(
        (row) => !this.selectedRows.includes(row.id)
      );

      this.selectedRows = [];
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

    saveTodoBulk() {
      console.log(this.csv);
      let mythis = this;
      mythis.$root.presentLoading();
      axios
        .post(
          mythis.$root.apiHost + mythis.$root.prefixApi + pocustinsertBulk,
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
              mythis.$root.apiHost + mythis.$root.prefixApi + "pocustdelete",
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
      //   mythis.todo.qty_sc_reg = false;
      //   mythis.todo.purch_item = false;
      //   mythis.todo.mtg_code = false;
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
      //////////////////////////////
    },
    saveTodo() {
      var mythis = this;

      Swal.fire({
        title: "Create Master PO Customer",
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
          var url = mythis.$root.apiHost + mythis.$root.prefixApi + "pocust";
          axios
            .post(
              url,
              {
                dist_code: mythis.todo.dist_code,
                tgl_order: mythis.todo.tgl_order,
                qty_sc_reg: mythis.todo.qty_sc_reg,
                qty_po: mythis.todo.qty_po,
                mtg_code: mythis.todo.mtg_code,
                branch_code: mythis.todo.branch_code,

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
            .delete("http://localhost:8002/si/pocust")
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
        title: "Create Master PO Customer",
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
            mythis.$root.apiHost + mythis.$root.prefixApi + "pocustBulky";
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
      var limitx = 100;
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
            "si/pocust?offset=" +
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

            DIstCode: " " + resData.results[key].dist_code,
            TglOrder: resData.results[key].tgl_order,
            MTGCode: resData.results[key].mtg_code,
            QtyScReg: resData.results[key].qty_sc_reg,
            QtyPo: resData.results[key].qty_po,
            BranchCode: resData.results[key].branch_code,
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
      mythis.nama_excelnya = "MASTER_PO_CUSTOMER_" + a + ".xlsx";
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
        const limitx = 100;

        while (count > 0) {
          const offsetx = limitx * nn;

          const reqData = await axios({
            method: "get",
            url:
              mythis.$root.apiHost +
              "si/pocust?offset=" +
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
        doc.text("Master PO Customer Report", 14, 22);
        doc.setFontSize(11);
        doc.setTextColor(100);

        // Add Created By and Created At information
        if (allData.length > 0) {
          const firstRecord = allData[0];
          doc.setFontSize(10);
        }

        doc.autoTable({
          theme: "striped",
          head: [["No", "Cust Group", "Tgl Order", "MTG Code", "Qty SC Reg"]],
          body: allData.map((item, index) => [
            index + 1,
            item.dist_code,
            item.tgl_order,
            item.mtg_code,
            item.qty_sc_reg,
            item.qty_po,
            item.branch_code,
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
          "Master_PO_CUSTOMER_Report_" + mythis.formatDate(new Date()) + ".pdf";
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
          // limit: mythis.$root.pagingTabel1,
          limit: this.newlimit,
          server: {
            url: (prev, page, limit) =>
              `${prev}${prev.includes("?") ? "&" : "?"}limit=${limit}&offset=${
                page * limit
              }`,
          },
        },
        search: {
          server: {
            url: (prev, keyword) => `${prev}?search=${keyword}`,
          },
        },
        columns: [
          //       {
          //         name: h("input", {
          //           type: "checkbox",
          //           class: "select-all-checkbox",
          //           style: `
          //   position: relative;
          //   width: 20px;
          //   height: 20px;
          //   background-color: #ffffff;
          //   border: 2px solid #007bff;
          //   border-radius: 5px;
          //   cursor: pointer;
          //   transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
          // `,
          //           onChange: (e) => this.toggleSelectAll(e),
          //         }),
          //         formatter: (_, row) =>
          //           h("input", {
          //             type: "checkbox",
          //             class: "select-row-checkbox",
          //             value: row.cells[0].data,
          //             style: `
          //     position: relative;
          //     width: 20px;
          //     height: 20px;
          //     background-color: #ffffff;
          //     border: 2px solid #007bff;
          //     border-radius: 5px;
          //     cursor: pointer;
          //     transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
          //   `,
          //             checked: this.selectedRows.includes(row.cells[0].data),
          //             onChange: (e) => this.toggleRowSelection(e, row.cells[0].data),
          //           }),
          //         sort: false,
          //         width: "40px",
          //       },
          { name: "ID", hidden: true },
          { name: "No", sort: true },
          { name: "Cust Group", sort: true },
          { name: "Tgl Order", sort: true },
          { name: "MTG Code", sort: true },
          { name: "Qty SC Reg", sort: true },
          { name: "Qty PO", sort: true },
          { name: "Cust Code", sort: true },

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
            width: "auto",
            "min-width": "100%",
          },
          th: {
            background: "linear-gradient(135deg, #3a8fb7, #1a5b92)", // Gradient background
            color: "#ffffff", // White text color for contrast
            "border-bottom": "1px solid #1a5b92", // Thinner border for header bottom
            "text-align": "center", // Center-align header text
            padding: "8px 12px", // Reduced padding for smaller size
            "font-size": "13px", // Smaller font size for header
            "font-weight": "bold", // Bold font for header
            "white-space": "nowrap",
            "text-shadow": "1px 1px 1px rgba(0, 0, 0, 0.2)", // Subtle text shadow for depth
          },
          td: {
            "text-align": "center", // Center-align table cell text
            padding: "10px 8px", // Reduced padding for table cell data
            "font-size": "13px", // Smaller font size for table cell data
            border: "1px solid #ddd", // Border between table cells
            "white-space": "nowrap", // Prevent text wrapping
          },
        },
        server: {
          url: this.$root.apiHost + this.$root.prefixApi + "pocust",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.dist_code}</span>`),
              html(`<span class="pull-left">${card.tgl_order}</span>`),
              html(`<span class="pull-left">${card.mtg_code}</span>`),
              html(`<span class="pull-left">${card.qty_sc_reg}</span>`),
              html(`<span class="pull-left">${card.qty_po}</span>`),
              html(`<span class="pull-left">${card.branch_code}</span>`),
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
    toggleRowSelection(event, rowId) {
      if (event.target.checked) {
        this.selectedRows.push(rowId);
      } else {
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
              mythis.$root.apiHost + mythis.$root.prefixApi + `pocust?id=${id}`,
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
            "pocust/" +
            mythis.todo.id,
          {
            dist_code: mythis.todo.dist_code,
            tgl_order: mythis.todo.tgl_order,
            qty_sc_reg: mythis.todo.qty_sc_reg,
            qty_po: mythis.todo.qty_po,
            mtg_code: mythis.todo.mtg_code,
            branch_code: mythis.todo.branch_code,

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
          mythis.$root.apiHost + mythis.$root.prefixApi + `pocust/${id}`,
          config
        )
        .then(async (res) => {
          // console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.dist_code = res.data.data.dist_code;
          mythis.todo.tgl_order = res.data.data.tgl_order;
          mythis.todo.mtg_code = res.data.data.mtg_code;
          mythis.todo.qty_sc_reg = res.data.data.qty_sc_reg;
          mythis.todo.qty_po = res.data.data.qty_po;
          mythis.todo.branch_code = res.data.data.branch_code;

          document.getElementById("inputA").focus(); // sets the focus on the input

          mythis.$root.stopLoading();
        });
    },
  },
};
</script>

<style scoped>
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

/* Delete button */
.delete-button {
  background: #fff;
  color: #e53e3e;
  border: 1px solid #fed7d7;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.delete-button:hover {
  background: #fff5f5;
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
