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
            :disabled="$root.flagButtonLoading"
            @click="show_modal()"
          >
            <span aria-hidden="true">X</span>
          </button>
        </div>
        <div class="modal-body">
          <pre>{{ todo }}</pre>
          <!-- Wizards Row -->
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Brand Code</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="Input Brand Code"
                    v-model="todo.brand_code"
                    :class="
                      errorField.brand_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    :disabled="!flagButtonAdd"
                    @input="
                      (val) => (todo.brand_code = todo.brand_code.toUpperCase())
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Brand Name</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Brand Name"
                    v-model="todo.brand_name"
                    :class="
                      errorField.brand_name
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.brand_name = todo.brand_name.toUpperCase())
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <!-- <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">MB Code</label>
                  <CmpInputText
                    type="number"
                    placeholder="Input MB Code"
                    v-model="todo.mb_code"
                    :class="
                      errorField.mb_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.mb_code = todo.mb_code.toUpperCase())
                    "
                  />
                </div>
              </div> -->
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Parent Code</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Parent Code"
                    v-model="todo.parent_code"
                    :class="
                      errorField.parent_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.parent_code = todo.parent_code.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Item Code</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Item Code"
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
                  <label for="example-nf-email">Item Name</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Item Name"
                    v-model="todo.item_name"
                    :class="
                      errorField.item_name
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.item_name = todo.item_name.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Price Code</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Price Code"
                    v-model="todo.price_code"
                    :class="
                      errorField.price_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.price_code = todo.price_code.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Price</label>
                  <CmpInputText
                    id="inputA"
                    type="number"
                    placeholder="Input Price"
                    v-model="todo.price"
                    :class="
                      errorField.price
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="(val) => (todo.price = todo.price.toUpperCase())"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Status Product</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="Input Status Product"
                    v-model="todo.status_product"
                    :class="
                      errorField.status_product
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) =>
                        (todo.status_product =
                          todo.status_product.toUpperCase())
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
                  todo.brand_code == null ||
                  todo.brand_code == '' ||
                  todo.brand_name == null ||
                  todo.brand_name == '' ||
                  todo.parent_code == null ||
                  todo.parent_code == '' ||
                  todo.item_code == null ||
                  todo.item_code == '' ||
                  todo.item_name == null ||
                  todo.item_name == '' ||
                  todo.price_code == null ||
                  todo.price_code == '' ||
                  todo.price == null ||
                  todo.price == '' ||
                  todo.status_product == null ||
                  todo.status_product == ''
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
                  todo.brand_code == null ||
                  todo.brand_code == '' ||
                  todo.brand_name == null ||
                  todo.brand_name == '' ||
                  todo.parent_code == null ||
                  todo.parent_code == '' ||
                  todo.item_code == null ||
                  todo.item_code == '' ||
                  todo.item_name == null ||
                  todo.item_name == '' ||
                  todo.price_code == null ||
                  todo.price_code == '' ||
                  todo.price == null ||
                  todo.price == '' ||
                  todo.status_product == null ||
                  todo.status_product == ''
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
          <strong>MENU {{ $root.judulHalaman }}</strong>
        </h2>

        <i v-if="!status_table" class="fa fa-spinner fa-spin text-default"></i>
      </div>
      <!-- END Block Title -->

      <div class="block-content">
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
                ADD DATA MASTER PRODUCT
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
                      SAVE DATA MASTER PRODUCT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="button-container">
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

          <!-- <button class="btn btn-sm btn-primary pull-left" @click="exportPdf()">
            <i class="fas fa-file-pdf"></i>Export PDF
          </button> -->
        </div>
        <!-- Button trigger modal -->
        <div style="display: flex; justify-content: flex-end; gap: 10px">
          <button
            class="btn btn-sm btn-info"
            data-toggle="tooltip"
            title="Import CSV"
            @click="show_modalBulk()"
          >
            <i class="fa fa-upload"></i>
          </button>
          <button
            v-if="status_table && $root.accessRoles[access_page].create"
            class="btn btn-sm btn-primary pull-right"
            @click="show_modal()"
          >
            <i class="fa fa-plus"></i>
            ADD DATA
          </button>
          <button
            class="btn btn-sm custom-file-upload pull-right"
            @click="deleteAllData"
          >
            <i class="fa fa-trash"></i> Delete All Data
          </button>
        </div>

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
      access_page: this.$root.decryptData(localStorage.getItem("halaman")),
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      grid: new Grid(),
      // grid2: new Grid(),
      errorField: {
        brand_code: false,
        brand_name: false,
        // mb_code: false,
        parent_code: false,
        item_code: false,
        item_name: false,
        price_code: false,
        price: false,
        status_product: false,
      },

      userid: 0,
      status_table: false,

      modal: false,
      modalBulk: false,

      todo: {
        brand_code: "",
        brand_name: "",
        // mb_code: "",
        parent_code: "",
        item_code: "",
        item_name: "",
        price_code: "",
        price: "",
        status_product: "",
      },

      flagButtonAdd: true,
      csv: null,
      fileUpload: null,

      dataImportCsv: {
        brand_code: {
          label: "brand_code",
          required: true,
        },
        brand_name: {
          label: "brand_name",
          required: true,
        },
        // mb_code: {
        //   label: "mb_code",
        //   required: true,
        // },
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
        price_code: {
          label: "price_code",
          required: true,
        },
        price: {
          label: "price",
          required: true,
        },
        status_product: {
          label: "status_product",
          required: true,
        },
      },

      data_x_tabel: [],
      data_x_excel: [],
      nama_excelnya: "",
      nama_sheetnya: "Master Product",
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
        brandCode: "brandCode",
        brandName: "brandName",
        // mbCode: "mbCode",
        mtgCode: "mtgCode",
        itemCode: "itemCode",
        itemName: "itemName",
        priceCode: "priceCode",
        price: "price",
        statusProduct: "statusProduct",
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
          mythis.$root.apiHost + mythis.$root.prefixApi + M_ProductinsertBulk,
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
      const csvInput = this.$refs.inputCSV.csvRef.files[0].name;
      this.fileUpload = csvInput;
      console.log(csvInput);
    },
    show_modalBulk() {
      console.log("ww");
      this.modalBulk = !this.modalBulk;
      if (!this.modalBulk) {
        // this.flag_checkBulk = false;  // Reset flag saat modal ditutup
        this.csv = null; // Reset CSV saat modal ditutup
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
              mythis.$root.apiHost + mythis.$root.prefixApi + "M_Productdelete",
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

      mythis.errorList = "";
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
        title: "Create Master Product",
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
          // const AuthStr = 'bearer ' + localStorage.getItem('token');
          // const config = {
          //   headers: {
          //     Authorization: AuthStr,
          //   },
          // };
          const config = "";
          var url = mythis.$root.apiHost + mythis.$root.prefixApi + "M_Product";

          //             const flagOnhand = this.todo.flag_onhand === true || this.todo.flag_onhand === 'true';
          // const flagActive = this.todo.flag_active === true || this.todo.flag_active === 'true';

          axios
            .post(
              url,
              {
                brand_code: mythis.todo.brand_code,
                brand_name: mythis.todo.brand_name,
                item_name: mythis.todo.item_name,
                item_code: mythis.todo.item_code,
                // mb_code: mythis.todo.mb_code,
                parent_code: mythis.todo.parent_code,
                price_code: mythis.todo.price_code,
                price: mythis.todo.price,
                status_product: mythis.todo.status_product,

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
        title: "Create Master Product",
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
          // const AuthStr = 'bearer ' + localStorage.getItem('token');
          // const config = {
          //   headers: {
          //     Authorization: AuthStr,
          //   },
          // };
          const config = "";
          var url =
            mythis.$root.apiHost + mythis.$root.prefixApi + "M_ProductBulky";

          //             const flagOnhand = this.todo.flag_onhand === true || this.todo.flag_onhand === 'true';
          // const flagActive = this.todo.flag_active === true || this.todo.flag_active === 'true';

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
            "si/M_Product?offset=" +
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

            brandCode: " " + resData.results[key].brand_code,
            brandName: resData.results[key].brand_name,
            // mbCode: resData.results[key].mb_code,
            mtgCode: resData.results[key].parent_code,
            itemName: resData.results[key].item_name,
            itemCode: resData.results[key].item_code,
            priceCode: resData.results[key].price_code,
            price: resData.results[key].price,
            status_product: resData.results[key].status_product,
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
      mythis.nama_excelnya = "MASTER_PRODUCT_" + a + ".xlsx";
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
    // exportPdf() {
    //   const doc = new jsPDF();

    //   var totalPagesExp = "{total_pages_count_string}";

    //   doc.setFontSize(18);
    //   doc.text("With content", 14, 22);
    //   doc.setFontSize(11);
    //   doc.setTextColor(100);

    //   var pageSize = doc.internal.pageSize;
    //   var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

    //   var text1 =
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    //   var text = doc.splitTextToSize(text1, pageWidth - 35, {});
    //   doc.text(text, 14, 30);

    //   doc.autoTable({
    //     theme: "striped",
    //     head: [["ID", "Brand Code", "Brand Name", "MB Code", "MTG Code", "Item Name", "Price Code", "Price"]],
    //     body: [
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],

    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["1", "HelloäöüßÄÖÜ", "dmoore0@furl.net", "China", "211.56.242.221"],
    //       ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
    //       ["3", "Ruth", "rwells2@example.com", "Trinidad", "19.162.133.184"],
    //       ["4", "Jason", "jray3@psu.edu", "Brazil", "10.68.11.42"],
    //       ["5", "Jane", "jstephens4@go.com", "United States", "47.32.129.71"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //       ["6", "Adam", "anichols5@com.com", "Canada", "18.186.38.37"],
    //     ],
    //     startY: 80,
    //     // showHead: "firstPage",

    //     didDrawPage: function (data) {
    //       // Footer
    //       var str = "Page " + doc.internal.getNumberOfPages();
    //       // Total page number plugin only available in jspdf v1.0+
    //       if (typeof doc.putTotalPages === "function") {
    //         str = str + " of " + totalPagesExp;
    //       }
    //       doc.setFontSize(10);

    //       // jsPDF 1.4+ uses getHeight, <1.4 uses .height
    //       var pageSize = doc.internal.pageSize;
    //       var pageHeight = pageSize.height
    //         ? pageSize.height
    //         : pageSize.getHeight();
    //       doc.text(str, data.settings.margin.left, pageHeight - 10);
    //     },
    //     showHead: "everyPage",
    //   });

    //   // Total page number plugin only available in jspdf v1.0+
    //   if (typeof doc.putTotalPages === "function") {
    //     doc.putTotalPages(totalPagesExp);
    //   }

    //   doc.save("masterproduct.pdf");
    //   console.log("./masterproduct.pdf generated");
    // },
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
              "si/M_Product?offset=" +
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
        doc.text("Master Product Report", 14, 22);
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
              "Brand Code",
              "Brand Name",
              // "MB Code",
              "Parent Code",
              "Item Code",
              "Item Name",
              "Price Code",
              "Price",
              "Status Product",
            ],
          ],
          body: allData.map((item, index) => [
            index + 1,
            item.brand_code,
            item.brand_name,
            // item.mb_code,
            item.parent_code,
            item.item_code,
            item.item_name,
            item.price_code,
            item.price,
            item.status_product,
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
          "Master_Product_Report_" + mythis.formatDate(new Date()) + ".pdf";
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
          limit: mythis.$root.pagingTable1,
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
          "Brand Code",
          "Brand Name",
          // "MB Code",
          "Parent Code",
          "Item Code",
          "Item Name",
          "Price Code",
          "Price",
          "Status Product",

          {
            name: "Action",
            formatter: (_, row) =>
              mythis.$root.accessRoles[mythis.access_page].update &&
              mythis.$root.accessRoles[mythis.access_page].delete
                ? html(
                    `
                    <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa fa-pencil-square-o"></i></button>
                    &nbsp;&nbsp;&nbsp;
                    <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa fa-trash-o"></i></button>
                  `
                  )
                : mythis.$root.accessRoles[mythis.access_page].update
                ? html(
                    `
                    <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa fa-pencil-square-o"></i></button>`
                  )
                : mythis.$root.accessRoles[mythis.access_page].delete
                ? html(`&nbsp;&nbsp;&nbsp;
                    <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa fa-trash-o"></i></button>`)
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
            "background-color": "rgba(0, 55, 255, 0.1)",
            color: "#000",
            "border-bottom": "1px solid #ccc",
            "text-align": "center",
          },
          td: {
            "text-align": "center",
          },
        },
        server: {
          url: this.$root.apiHost + this.$root.prefixApi + "M_Product",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.brand_code}</span>`),
              html(`<span class="pull-left">${card.brand_name}</span>`),
              // html(`<span class="pull-left">${card.mb_code}</span>`),
              html(`<span class="pull-left">${card.parent_code}</span>`),
              html(`<span class="pull-left">${card.item_code}</span>`),
              html(`<span class="pull-left">${card.item_name}</span>`),
              html(`<span class="pull-left">${card.price_code}</span>`),
              html(`<span class="pull-left">${card.price}</span>`),
              html(`<span class="pull-left">${card.status_product}</span>`),
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

          // const AuthStr = 'bearer ' + localStorage.getItem('token');
          const config = {
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
              mythis.$root.apiHost + mythis.$root.prefixApi + `M_Product/${id}`,
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
      const AuthStr = "bearer " + localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: AuthStr,
        },
      };

      // const flagOnhand =
      //   this.todo.flag_onhand === true || this.todo.flag_onhand === "true";
      // const flagActive =
      //   this.todo.flag_active === true || this.todo.flag_active === "true";

      axios
        .put(
          mythis.$root.apiHost +
            mythis.$root.prefixApi +
            "M_Product/" +
            mythis.todo.id,
          {
            brand_code: mythis.todo.brand_code,
            brand_name: mythis.todo.brand_name,
            item_name: mythis.todo.item_name,
            item_code: mythis.todo.item_code,
            // mb_code: mythis.todo.mb_code,
            parent_code: mythis.todo.parent_code,
            price_code: mythis.todo.price_code,
            price: mythis.todo.price,
            price: mythis.todo.status_product,
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
      // const AuthStr = 'bearer ' + localStorage.getItem('token');
      const config = {
        // headers: {
        //   Authorization: AuthStr,
        // },
      };
      await axios
        .get(
          mythis.$root.apiHost + mythis.$root.prefixApi + `M_Product/${id}`,
          config
        )
        .then(async (res) => {
          //console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.brand_code = res.data.data.brand_code.toUpperCase();
          mythis.todo.brand_name = res.data.data.brand_name.toUpperCase();
          // mythis.todo.mb_code = res.data.data.mb_code.toUpperCase();
          mythis.todo.item_code = res.data.data.item_code.toUpperCase();
          mythis.todo.parent_code = res.data.data.parent_code.toUpperCase();
          mythis.todo.item_name = res.data.data.item_name.toUpperCase();
          mythis.todo.price_code = res.data.data.price_code.toUpperCase();
          mythis.todo.price = res.data.data.price.toUpperCase();
          mythis.todo.status_product =
            res.data.data.status_product.toUpperCase();

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

.btn-info {
  background-color: #17a2b8; /* Info button background color */
  color: white; /* Text color */
}

.btn-info:hover {
  background-color: #138496; /* Darker shade on hover */
  transform: scale(1.05); /* Slightly enlarges button on hover */
}

.btn-primary {
  background-color: #5895d6; /* Primary button background color */
  color: white; /* Text color */
}

.btn-primary:hover {
  background-color: #0056b3; /* Darker shade on hover */
  transform: scale(1.05); /* Slightly enlarges button on hover */
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
