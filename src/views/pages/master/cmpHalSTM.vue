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
          <!-- <pre>{{ todo }}</pre> -->
          <!-- Wizards Row -->
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">tahun</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="Input Tahun"
                    v-model="todo.tahun"
                    :class="
                      errorField.tahun
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    :disabled="!flagButtonAdd"
                    @input="(val) => (todo.tahun = todo.tahun.toUpperCase())"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">bulan</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Bulan"
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
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">distCode</label>
                  <input
                    type="text"
                    v-model="todo.distCode"
                    :class="
                      errorField.distCode
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.distCode = todo.distCode.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">chnlCode</label>
                  <input
                    type="text"
                    v-model="todo.chnlCode"
                    :class="
                      errorField.chnlCode
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.chnlCode = todo.chnlCode.toUpperCase())
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
                    v-model="todo.brchName"
                    :class="
                      errorField.brchName
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.brchName = todo.brchName.toUpperCase())
                    "
                  />
                </div>
              </div>
              <!-- Add flag_active Checkbox -->
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <!-- Add fields for code_bars, mnft_code, uom1, uom2, uom3, uom4, and obj_type -->
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">itemCode</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input itemCode"
                    v-model="todo.itemCode"
                    :class="
                      errorField.itemCode
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.itemCode = todo.itemCode.toUpperCase())
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
                  <label for="example-nf-email">netSalesUnit</label>
                  <CmpInputText
                    type="number"
                    placeholder="Input netSalesUnit"
                    v-model="todo.netSalesUnit"
                    :class="
                      errorField.netSalesUnit
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) =>
                        (todo.netSalesUnit = todo.netSalesUnit.toUpperCase())
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Unit of Measure 3</label>
                  <CmpInputText
                    type="number"
                    placeholder="Input Unit of Measure 3"
                    v-model="todo.uom3"
                    :class="
                      errorField.uom3
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Unit of Measure 4</label>
                  <CmpInputText
                    type="number"
                    placeholder="Input Unit of Measure 4"
                    v-model="todo.uom4"
                    :class="
                      errorField.uom4
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
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
                  <label for="example-nf-email">Object Type</label>
                  <CmpInputText
                    type="number"
                    placeholder="Input Object Type"
                    v-model="todo.obj_type"
                    :class="
                      errorField.obj_type
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
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
                  todo.tahun == null ||
                  todo.tahun == '' ||
                  todo.bulan == null ||
                  todo.bulan == '' ||
                  todo.distCode == null ||
                  todo.distCode == '' ||
                  todo.chnlCode == null ||
                  todo.chnlCode == '' ||
                  todo.brchName == null ||
                  todo.brchName == '' ||
                  todo.itemCode == null ||
                  todo.itemCode == '' ||
                  todo.netSalesUnit == null ||
                  todo.netSalesUnit == ''
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
                  todo.tahun == null ||
                  todo.tahun == '' ||
                  todo.bulan == null ||
                  todo.bulan == '' ||
                  todo.distCode == null ||
                  todo.distCode == '' ||
                  todo.chnlCode == null ||
                  todo.chnlCode == '' ||
                  todo.brchName == null ||
                  todo.brchName == '' ||
                  todo.itemCode == null ||
                  todo.itemCode == '' ||
                  todo.netSalesUnit == null ||
                  todo.netSalesUnit == ''
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
        <!-- Button trigger modal -->

        <!-- <pre>{{ csv }}</pre> -->

        <div v-if="csv != null">
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
          SAVE DATA BULKY
        </button>
        <br />
        <br />
        <br />
        <br />

        <button
          v-if="status_table && $root.accessRoles[access_page].create"
          class="btn btn-sm btn-primary pull-right"
          @click="show_modal()"
        >
          ADD DATA
        </button>

        <div>
          <button
            @click="downloadCSV"
            :disabled="isLoading"
            class="btn btn-primary btn-sm"
          >
            {{ isLoading ? "Downloading..." : "Download CSV" }}
          </button>
        </div>

        <div class="row row-cols-2">
          <div class="col-md-12">
            <div class="col-md-6">
              <div>
                <label for="select-item">tahun</label>
              </div>
              <v-select
                id="select-tahun"
                variant="outlined"
                label="tahun"
                name="tahun"
                :options="datatahun"
                placeholder="Select tahun"
                :disabled="isFetching"
                v-model="selectedtahun"
                @update:modelValue="onChangetahunHandler"
              ></v-select>
            </div>
            <div class="col-md-6">
              <div>
                <label for="select-item">distCode</label>
              </div>
              <v-select
                id="select-distCode"
                variant="outlined"
                label="distCode"
                name="distCode"
                :options="datadistCode"
                placeholder="Select distCode"
                :disabled="isFetching"
                v-model="selecteddistCode"
                @update:modelValue="onChangedistCodeHandler"
              ></v-select>
            </div>
          </div>
        </div>

        <br />
        <div class="row row-cols-2">
          <div class="col-md-12">
            <div class="col-md-6">
              <div>
                <label for="select-item">brchName</label>
              </div>
              <v-select
                id="select-brchName"
                variant="outlined"
                label="brchName"
                name="brchName"
                :options="databrchName"
                placeholder="Select brchName"
                :disabled="isFetching"
                v-model="selectedbrchName"
                @update:modelValue="onChangebrchNameHandler"
              ></v-select>
            </div>
            <div class="col-md-6">
              <div>
                <label for="select-item">bulan</label>
              </div>
              <v-select
                id="select-bulan"
                variant="outlined"
                label="bulan"
                name="bulan"
                :options="databulan"
                placeholder="Select bulan"
                :disabled="isFetching"
                v-model="selectedbulan"
                @update:modelValue="onChangebulanHandler"
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
                <label for="select-item">chnlCode</label>
              </div>
              <v-select
                id="select-chnlCode"
                variant="outlined"
                label="chnlCode"
                name="chnlCode"
                :options="datachnlCode"
                placeholder="Select chnlCode"
                :disabled="isFetching"
                v-model="selectedchnlCode"
                @update:modelValue="onChangechnlCodeHandler"
              ></v-select>
            </div>
            <div class="col-md-6">
              <div>
                <label for="select-item">itemCode</label>
              </div>
              <v-select
                id="select-itemCode"
                variant="outlined"
                label="itemCode"
                name="itemCode"
                :options="dataitemCode"
                placeholder="Select itemCode"
                :disabled="isFetching"
                v-model="selecteditemCode"
                @update:modelValue="onChangeitemCodeHandler"
              ></v-select>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <!-- <div>
          <button @click="downloadCSV" class="btn btn-primary btn-sm">
            Download CSV
          </button>
        </div> -->

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

export default {
  components: {
    // CmpSelect2,
    // LoadingX,
    // CmpInputText,
    // CmpInputText,
  },
  data() {
    return {
      access_page: this.$root.decryptData(localStorage.getItem("halaman")),
      isLogin: localStorage.getItem("token") != null ? 1 : 0,
      activemenu: null,
      grid: new Grid(),
      // grid2: new Grid(),
      errorField: {
        tahun: false,
        bulan: false,
        distCode: false,
        brchName: false,
        chnlCode: false,
        netSalesUnit: false,
        itemCode: false,
      },

      userid: 0,
      status_table: false,

      modal: false,

      todo: {
        tahun: "",
        bulan: "",
        distCode: "",
        brchName: "",
        chnlCode: "",
        netSalesUnit: "",
        itemCode: "",
      },

      flagButtonAdd: true,
      csv: null,

      dataStm: [],
      datadistCode: [],
      datachnlCode: [],
      databrchName: [],
      datatahun: [],
      databulan: [],
      dataitemCode: [],

      selectedtahun: {},
      selecteddistCode: {},
      selectedbrchName: {},
      selectedbulan: {},
      selectedchnlCode: {},
      selecteditemCode: {},

      dataImportCsv: {
        tahun: {
          label: "tahun",
          required: true,
        },
        bulan: {
          label: "bulan",
          required: true,
        },
        distCode: {
          label: "distCode",
          required: true,
        },
        brchName: {
          label: "brchName",
          required: true,
        },
        chnlCode: {
          label: "chnlCode",
          required: true,
        },
        netSalesUnit: {
          label: "netSalesUnit",
          required: true,
        },
        itemCode: {
          label: "itemCode",
          required: true,
        },
      },
    };
  },
  async mounted() {
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
    // await this.getTahunForm();
    // await this.getRegionForm();
    // await this.getbrchNameForm();
    // await this.getBulanForm();
    // await this.getchnlCodeForm();
    // await this.getStatusProductForm();
    await this.getAllDatas();
  },
  methods: {
    async getAllDatas() {
      this.isFetching = true;

      const urlGetStm = this.$root.apiHost + this.$root.prefixApi + "stmAll";
      const { data } = await axios.get(urlGetStm);
      this.dataStm = [
        {
          chnlCode: "All",
          bulan: "All",
          tahun: "All",
          distCode: "All",
          brchName: "All",
          itemCode: "All",
        },
        ...data.results,
      ];

      const uniquetahuns = [];
      this.datatahun = this.dataStm.filter((item) => {
        if (!uniquetahuns.includes(item.tahun)) {
          uniquetahuns.push(item.tahun);
          return true;
        }
        return false;
      });

      const uniquedistCodes = [];
      this.datadistCode = this.dataStm.filter((item) => {
        if (!uniquedistCodes.includes(item.distCode)) {
          uniquedistCodes.push(item.distCode);
          return true;
        }
        return false;
      });

      const uniquebrchNames = [];
      this.databrchName = this.dataStm.filter((item) => {
        if (!uniquebrchNames.includes(item.brchName)) {
          uniquebrchNames.push(item.brchName);
          return true;
        }
        return false;
      });

      const uniquebulans = [];
      this.databulan = this.dataStm.filter((item) => {
        if (!uniquebulans.includes(item.bulan)) {
          uniquebulans.push(item.bulan);
          return true;
        }
        return false;
      });

      const uniquechnlCodes = [];
      this.datachnlCode = this.dataStm.filter((item) => {
        if (!uniquechnlCodes.includes(item.chnlCode)) {
          uniquechnlCodes.push(item.chnlCode);
          return true;
        }
        return false;
      });

      const uniqueitemCodes = [];
      this.dataitemCode = this.dataStm.filter((item) => {
        if (!uniqueitemCodes.includes(item.itemCode)) {
          uniqueitemCodes.push(item.itemCode);
          return true;
        }
        return false;
      });

      console.log(this.datatahun, "data tahun");
      console.log(this.datadistCode, "data distCode");
      console.log(this.databrchName, "data brchName");
      console.log(this.databulan, "data bulan");
      console.log(this.datachnlCode, "data chnlCode");
      console.log(this.dataitemCode, "data itemCode");

      this.selectedbrchName = this.dataStm[0];
      this.selectedtahun = this.dataStm[0];
      this.selecteddistCode = this.dataStm[0];
      this.selectedbulan = this.dataStm[0];
      this.selecteditemCode = this.dataStm[0];
      this.selectedchnlCode = this.dataStm[0];

      this.isFetching = false;
      this.refreshTable();
    },
    searchData() {
      axios
        .get("stmAll", {
          params: {
            tahun: this.todo.tahun,
            bulan: this.todo.bulan,
            distCode: this.todo.distCode,
            chnlCode: this.todo.chnlCode,
            brchName: this.todo.brchName,
            itemCode: this.todo.itemCode,
            netSalesUnit: this.todo.netSalesUnit,
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
    downloadCSV() {
      const url = `${this.$root.apiHost}${this.$root.prefixApi}stmBulky`; // Ganti dengan URL endpoint Anda
      axios({
        url: url,
        method: "GET",
        responseType: "blob", // Agar bisa mendownload file
      })
        .then((response) => {
          // Buat URL untuk blob data
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "export_data.csv"); // Nama file
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link); // Bersihkan elemen link setelah digunakan
        })
        .catch((error) => {
          console.error("Error saat mendownload CSV", error);
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

    onChangetahunHandler(e) {
      // this.todo.Tahun = e.Tahun;
      this.todo.tahun = this.selectedtahun;
      this.refreshTable();
    },

    onChangedistCodeHandler(e) {
      this.todo.distCode = this.selecteddistCode;
      this.refreshTable();
    },

    onChangebrchNameHandler(e) {
      this.todo.brchName = e.brchName;
      this.refreshTable();
    },

    onChangebulanHandler(e) {
      this.todo.bulan = this.selectedbulan;
      this.refreshTable();
    },

    onChangechnlCodeHandler(e) {
      this.todo.chnlCode = this.selectedchnlCode;
      this.refreshTable();
    },

    onChangeitemCodeHandler(e) {
      this.todo.itemCode = this.selecteditemCode;
      this.refreshTable();
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
        title: "Create Master Item",
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
          var url = mythis.$root.apiHost + mythis.$root.prefixApi + "stm";
          axios
            .post(
              url,
              {
                tahun: mythis.todo.tahun,
                bulan: mythis.todo.bulan,
                distCode: mythis.todo.distCode,
                brchName: mythis.todo.brchName,
                chnlCode: mythis.todo.chnlCode,
                netSalesUnit: mythis.todo.netSalesUnit,
                itemCode: mythis.todo.itemCode,
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
        title: "Create Master Item Bulky",
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
          var url = mythis.$root.apiHost + mythis.$root.prefixApi + "stmBulky";
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
              }${
                this.selectedtahun != undefined &&
                this.selectedtahun.tahun != "All"
                  ? "&tahun=" + this.selectedtahun.tahun
                  : ""
              }${
                this.selecteddistCode.distCode != undefined &&
                this.selecteddistCode.distCode != "All"
                  ? "&distCode=" + this.selecteddistCode.distCode
                  : ""
              }${
                this.selectedbrchName.brchName != undefined &&
                this.selectedbrchName.brchName != "All"
                  ? "&brchName=" + this.selectedbrchName.brchName
                  : ""
              }${
                this.selectedbulan.bulan != undefined &&
                this.selectedbulan.bulan != "All"
                  ? "&bulan=" + this.selectedbulan.bulan
                  : ""
              }${
                this.selectedchnlCode.chnlCode != undefined &&
                this.selectedchnlCode.chnlCode != "All"
                  ? "&chnlCode=" + this.selectedchnlCode.chnlCode
                  : ""
              }${
                this.selecteditemCode.itemCode != undefined &&
                this.selecteditemCode.itemCode != "All"
                  ? "&itemCode=" + this.selecteditemCode.itemCode
                  : ""
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
          "tahun",
          "bulan",
          "distCode",
          "chnlCode",
          "brchName",
          "itemCode",
          "netSalesUnit",

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
          url: this.$root.apiHost + this.$root.prefixApi + "stm",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.tahun}</span>`),
              html(`<span class="pull-left">${card.bulan}</span>`),
              html(`<span class="pull-left">${card.distCode}</span>`),
              html(`<span class="pull-left">${card.chnlCode}</span>`),
              html(`<span class="pull-left">${card.brchName}</span>`),
              html(`<span class="pull-left">${card.itemCode}</span>`),
              html(`<span class="pull-left">${card.netSalesUnit}</span>`),
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
              mythis.$root.apiHost + mythis.$root.prefixApi + `stm/${id}`,
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
            "stm/" +
            mythis.todo.id,
          {
            tahun: mythis.todo.tahun,
            bulan: mythis.todo.bulan,
            distCode: mythis.todo.distCode,
            chnlCode: mythis.todo.chnlCode,
            brchName: mythis.todo.brchName,
            itemCode: mythis.todo.itemCode,
            netSalesUnit: mythis.todo.netSalesUnit,
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
          mythis.$root.apiHost + mythis.$root.prefixApi + `stm/${id}`,
          config
        )
        .then(async (res) => {
          // console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.tahun = res.data.data.tahun;
          mythis.todo.bulan = res.data.data.bulan;
          mythis.todo.distCode = res.data.data.distCode;
          mythis.todo.chnlCode = res.data.data.chnlCode;
          mythis.todo.brchName = res.data.data.brchName;
          mythis.todo.itemCode = res.data.data.itemCode;
          mythis.todo.netSalesUnit = res.data.data.netSalesUnit;
          document.getElementById("inputA").focus(); // sets the focus on the input

          mythis.$root.stopLoading();
        });
    },
  },
};
</script>