<template>
  <!---------------------------- Modal -->
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
                  <label for="example-nf-email">brch_name</label>
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
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">item_code</label>
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
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">on_hand_unit</label>
                  <input
                    type="text"
                    placeholder="Input on_hand_unit"
                    v-model="todo.on_hand_unit"
                    :class="
                      errorField.on_hand_unit
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) =>
                        (todo.on_hand_unit = todo.on_hand_unit.toUpperCase())
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
                  todo.brch_name == null ||
                  todo.brch_name == '' ||
                  todo.item_code == null ||
                  todo.item_code == '' ||
                  todo.on_hand_unit == null ||
                  todo.on_hand_unit == ''
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
                  todo.brch_name == null ||
                  todo.brch_name == '' ||
                  todo.item_code == null ||
                  todo.item_code == '' ||
                  todo.on_hand_unit == null ||
                  todo.on_hand_unit == ''
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
          <strong>MENU STOCK{{ $root.judulHalaman }}</strong>
        </h2>

        <i v-if="!status_table" class="fa fa-spinner fa-spin text-default"></i>
      </div>
      <!-- END Block Title -->

      <div class="block-content">
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
        </vue-csv-import> -->
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
                ADD DATA STOCK
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
                      SAVE DATA STOCK DETAIL
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
        kode_cabang: false,
        brch_name: false,
        item_code: false,
        on_hand_unit: false,
      },

      userid: 0,
      status_table: false,

      modal: false,
      modalBulk: false,

      todo: {
        tahun: "",
        bulan: "",
        dist_code: "",
        kode_cabang: "",
        brch_name: "",
        item_code: "",
        on_hand_unit: "",
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
        on_hand_unit: {
          label: "on_hand_unit",
          required: true,
        },
      },
      data_x_tabel: [],
      data_x_excel: [],
      nama_excelnya: "",
      nama_sheetnya: "Stock Detail",
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
        tahun: "tahun",
        bulan: "bulan",
        distCode: "distCode",
        kodeCabang: "kodeCabang",
        brchName: "brchName",
        itemCode: "itemCode",
        onHandUnit: "onHandUnit",
      },
    };
  },
  async mounted() {
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
  },
  methods: {
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
              mythis.$root.apiHost +
                mythis.$root.prefixApi +
                "stockdetaildelete",
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
      //////////////////////////////
    },
    saveTodo() {
      var mythis = this;

      Swal.fire({
        title: "Create Master Stock Detail",
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
            mythis.$root.apiHost + mythis.$root.prefixApi + "stockdetail";
          axios
            .post(
              url,
              {
                tahun: mythis.todo.tahun,
                bulan: mythis.todo.bulan,
                brch_name: mythis.todo.brch_name,
                kode_cabang: mythis.todo.kode_cabang,
                dist_code: mythis.todo.dist_code,
                item_code: mythis.todo.item_code,
                on_hand_unit: mythis.todo.on_hand_unit,

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
            .delete("http://localhost:8002/si/stockdetail")
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
        title: "Create Master Stock Detail",
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
            mythis.$root.apiHost + mythis.$root.prefixApi + "stockdetailBulky";
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
            "si/stockdetail?offset=" +
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

            tahun: " " + resData.results[key].tahun,
            bulan: resData.results[key].bulan,
            distCode: resData.results[key].dist_code,
            kodeCabang: resData.results[key].kode_cabang,
            brchName: resData.results[key].brch_name,
            itemCode: resData.results[key].item_code,
            onHandUnit: resData.results[key].on_hand_unit,
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
      mythis.nama_excelnya = "MASTER_STOCK_DETAIL_" + a + ".xlsx";
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
              "si/stockdetail?offset=" +
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
        doc.text("Master Stock Detail Report", 14, 22);
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
              "YOP",
              "MOP",
              "distCode",
              "cabangCode",
              "brchName",
              "itemCode",
              "onHandUnit",
            ],
          ],
          body: allData.map((item, index) => [
            index + 1,
            item.tahun,
            item.bulan,
            item.dist_code,
            item.kode_cabang,
            item.brch_name,
            item.item_code,
            item.on_hand_unit,
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
          "Master_Stock_Detail_Report_" +
          mythis.formatDate(new Date()) +
          ".pdf";
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
          limit: mythis.$root.pagingTabel1,
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
          { name: "ID", hidden: true },
          "No",
          "YOP",
          "MOP",
          "distCode",
          "cabangCode",
          "brchName",
          "itemCode",
          "onHandUnit",

          {
            name: "Action",
            formatter: (_, row) =>
              mythis.$root.accessRoles[mythis.access_page].update &&
              mythis.$root.accessRoles[mythis.access_page].delete
                ? html(
                    `
          <button data-id="${row.cells[0].data}" class="btn btn-sm btn-primary text-white" id="editData" data-toggle="tooltip" title="Edit"><i class="fa fa-pencil-square-o"></i></button>
          &nbsp;&nbsp;&nbsp;
          <button data-id="${row.cells[0].data}" class="btn btn-sm btn-info text-white" id="deleteData" data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></button>
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
          <button data-id="${row.cells[0].data}" class="btn btn-sm btn-info text-white" id="deleteData" data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></button>`
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
            "border-bottom": "2px solid #1a5b92", // Darker border for header bottom
            "text-align": "center", // Center-align header text
            padding: "12px 20px",
            "font-size": "14px",
            "font-weight": "bold", // Bold font for header
            "white-space": "nowrap",
            "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)", // Subtle text shadow for depth
          },
          td: {
            "text-align": "center", // Center-align table cell text
            padding: "14px 10px", // Padding for table cell data
            "font-size": "13px", // Font size for table cell data
            border: "1px solid #ddd", // Border between table cells
            "white-space": "nowrap", // Prevent text wrapping
          },
        },
        server: {
          url: this.$root.apiHost + this.$root.prefixApi + "stockdetail",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.tahun}</span>`),
              html(`<span class="pull-left">${card.bulan}</span>`),
              html(`<span class="pull-left">${card.dist_code}</span>`),
              html(`<span class="pull-left">${card.kode_cabang}</span>`),
              html(`<span class="pull-left">${card.brch_name}</span>`),
              html(`<span class="pull-left">${card.item_code}</span>`),
              html(`<span class="pull-left">${card.on_hand_unit}</span>`),
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
                `stockdetail?id=${id}`,
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
            "stockdetail/" +
            mythis.todo.id,
          {
            tahun: mythis.todo.tahun,
            bulan: mythis.todo.bulan,
            brch_name: mythis.todo.brch_name,
            dist_code: mythis.todo.dist_code,
            kode_cabang: mythis.todo.kode_cabang,
            item_code: mythis.todo.item_code,
            on_hand_unit: mythis.todo.on_hand_unit,

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
          mythis.$root.apiHost + mythis.$root.prefixApi + `stockdetail/${id}`,
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
          mythis.todo.kode_cabang = res.data.data.kode_cabang;
          mythis.todo.brch_name = res.data.data.brch_name;
          mythis.todo.item_code = res.data.data.item_code;
          mythis.todo.on_hand_unit = res.data.data.on_hand_unit;

          document.getElementById("inputA").focus(); // sets the focus on the input

          mythis.$root.stopLoading();
        });
    },
  },
};
</script>

<style scoped>
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
