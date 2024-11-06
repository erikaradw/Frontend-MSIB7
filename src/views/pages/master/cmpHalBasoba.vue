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
                  <label for="example-nf-email">Distributor</label>
                  <CmpInputText
                    id="inputA"
                    type="text"
                    placeholder="Input Distributor"
                    v-model="todo.distributor"
                    :class="
                      errorField.distributor
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    :disabled="!flagButtonAdd"
                    @input="
                      (val) =>
                        (todo.distributor = todo.distributor.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Channel</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Channel"
                    v-model="todo.channel"
                    :class="
                      errorField.channel
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.channel = todo.channel.toUpperCase())
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
                  <label for="example-nf-email">Region</label>
                  <input
                    type="text"
                    v-model="todo.region"
                    :class="
                      errorField.region
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="(val) => (todo.region = todo.region.toUpperCase())"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Area</label>
                  <input
                    type="text"
                    v-model="todo.area"
                    :class="
                      errorField.area
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="(val) => (todo.area = todo.area.toUpperCase())"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Cabang</label>
                  <input
                    type="text"
                    v-model="todo.cabang"
                    :class="
                      errorField.cabang
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="(val) => (todo.cabang = todo.cabang.toUpperCase())"
                  />
                </div>
              </div>
              <!-- Add flag_active Checkbox -->
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Parent_code</label>
                  <input
                    type="text"
                    v-model="todo.parent_code"
                    :class="
                      errorField.parent_code
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) =>
                        (todo.parent_code = todo.parent_code.toUpperCase())
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <!-- Add fields for code_bars, mnft_code, uom1, uom2, uom3, uom4, and obj_type -->
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">SKU</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input SKU"
                    v-model="todo.sku"
                    :class="
                      errorField.sku
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="(val) => (todo.sku = todo.sku.toUpperCase())"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Brand</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Brand"
                    v-model="todo.brand"
                    :class="
                      errorField.brand
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="(val) => (todo.brand = todo.brand.toUpperCase())"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Kategori</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Kategori"
                    v-model="todo.kategori"
                    :class="
                      errorField.kategori
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.kategori = todo.kategori.toUpperCase())
                    "
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Status_Product</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Status_Product"
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
                  todo.distributor == null ||
                  todo.distributor == '' ||
                  todo.channel == null ||
                  todo.channel == '' ||
                  todo.area == null ||
                  todo.area == '' ||
                  todo.brand == null ||
                  todo.brand == '' ||
                  todo.cabang == null ||
                  todo.cabang == '' ||
                  todo.status_product == null ||
                  todo.status_product == '' ||
                  todo.kategori == null ||
                  todo.kategori == '' ||
                  todo.region == null ||
                  todo.region == '' ||
                  todo.sku == null ||
                  todo.sku == '' ||
                  todo.parent_code == null ||
                  todo.parent_code == ''
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
                  todo.distributor == null ||
                  todo.distributor == '' ||
                  todo.channel == null ||
                  todo.channel == '' ||
                  todo.area == null ||
                  todo.area == '' ||
                  todo.brand == null ||
                  todo.brand == '' ||
                  todo.cabang == null ||
                  todo.cabang == '' ||
                  todo.status_product == null ||
                  todo.status_product == '' ||
                  todo.kategori == null ||
                  todo.kategori == '' ||
                  todo.region == null ||
                  todo.region == '' ||
                  todo.sku == null ||
                  todo.sku == '' ||
                  todo.parent_code == null ||
                  todo.parent_code == ''
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
                <label for="select-item">DISTRIBUTOR</label>
              </div>
              <v-select
                id="select-distributor"
                variant="outlined"
                label="distributor"
                name="distributor"
                :options="dataDistributor"
                placeholder="Select Distributor"
                :disabled="isFetching"
                v-model="selectedDistributor"
                @update:modelValue="onChangeDistributorHandler"
              ></v-select>
            </div>
            <div class="col-md-6">
              <div>
                <label for="select-item">REGION</label>
              </div>
              <v-select
                id="select-region"
                variant="outlined"
                label="region"
                name="region"
                :options="dataRegion"
                placeholder="Select Region"
                :disabled="isFetching"
                v-model="selectedRegion"
                @update:modelValue="onChangeRegionHandler"
              ></v-select>
            </div>
          </div>
        </div>

        <br />
        <div class="row row-cols-2">
          <div class="col-md-12">
            <div class="col-md-6">
              <div>
                <label for="select-item">BRANCH</label>
              </div>
              <v-select
                id="select-cabang"
                variant="outlined"
                label="cabang"
                name="cabang"
                :options="dataBranch"
                placeholder="Select Branch"
                :disabled="isFetching"
                v-model="selectedBranch"
                @update:modelValue="onChangeBranchHandler"
              ></v-select>
            </div>
            <div class="col-md-6">
              <div>
                <label for="select-item">CHANNEL</label>
              </div>
              <v-select
                id="select-channel"
                variant="outlined"
                label="channel"
                name="channel"
                :options="dataChannel"
                placeholder="Select Channel"
                :disabled="isFetching"
                v-model="selectedChannel"
                @update:modelValue="onChangeChannelHandler"
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
                id="select-brand"
                variant="outlined"
                label="brand"
                name="brand"
                :options="dataBrand"
                placeholder="Select Brand"
                :disabled="isFetching"
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
                :disabled="isFetching"
                v-model="selectedStatusProduct"
                @update:modelValue="onChangeStatusProductHandler"
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
        distributor: false,
        channel: false,
        region: false,
        area: false,
        cabang: false,
        parent_code: false,
        sku: false,
        brand: false,
        kategori: false,
        status_product: false,
      },

      userid: 0,
      status_table: false,

      modal: false,

      todo: {
        distributor: "",
        channel: "",
        region: "",
        area: "",
        cabang: "",
        parent_code: "",
        sku: "",
        brand: "",
        kategori: "",
        status_product: "",
      },

      flagButtonAdd: true,
      csv: null,

      dataBasoba: [],
      dataRegion: [],
      dataBrand: [],
      dataBranch: [],
      dataDistributor: [],
      dataChannel: [],
      dataStatusProduct: [],

      selectedDistributor: {},
      selectedRegion: {},
      selectedBranch: {},
      selectedChannel: {},
      selectedBrand: {},
      selectedStatusProduct: {},

      dataImportCsv: {
        distributor: {
          label: "distributor",
          required: true,
        },
        channel: {
          label: "channel",
          required: true,
        },
        region: {
          label: "region",
          required: true,
        },
        area: {
          label: "area",
          required: true,
        },
        cabang: {
          label: "cabang",
          required: true,
        },
        parent_code: {
          label: "parent_code",
          required: true,
        },
        sku: {
          label: "sku",
          required: true,
        },
        brand: {
          label: "brand",
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
      },
    };
  },
  async mounted() {
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
    // await this.getDistributorForm();
    // await this.getRegionForm();
    // await this.getBranchForm();
    // await this.getChannelForm();
    // await this.getBrandForm();
    // await this.getStatusProductForm();
    await this.getAllDatas();
  },
  methods: {
    async getAllDatas() {
      this.isFetching = true;

      const urlGetBasoba = this.$root.apiHost + this.$root.prefixApi + "basobaAll";
      const { data } = await axios.get(urlGetBasoba);
      this.dataBasoba = [
        {
          brand: "All",
          channel: "All",
          distributor: "All",
          region: "All",
          cabang: "All",
          status_product: "All",
        },
        ...data.results,
      ];

      const uniqueDistributors = [];
      this.dataDistributor = this.dataBasoba.filter((item) => {
        if (!uniqueDistributors.includes(item.distributor)) {
          uniqueDistributors.push(item.distributor);
          return true;
        }
        return false;
      });

      const uniqueRegions = [];
      this.dataRegion = this.dataBasoba.filter((item) => {
        if (!uniqueRegions.includes(item.region)) {
          uniqueRegions.push(item.region);
          return true;
        }
        return false;
      });

      const uniqueBranchs = [];
      this.dataBranch = this.dataBasoba.filter((item) => {
        if (!uniqueBranchs.includes(item.cabang)) {
          uniqueBranchs.push(item.cabang);
          return true;
        }
        return false;
      });

      const uniqueChannels = [];
      this.dataChannel = this.dataBasoba.filter((item) => {
        if (!uniqueChannels.includes(item.channel)) {
          uniqueChannels.push(item.channel);
          return true;
        }
        return false;
      });

      const uniqueBrands = [];
      this.dataBrand = this.dataBasoba.filter((item) => {
        if (!uniqueBrands.includes(item.brand)) {
          uniqueBrands.push(item.brand);
          return true;
        }
        return false;
      });

      const uniqueStatusProducts = [];
      this.dataStatusProduct = this.dataBasoba.filter((item) => {
        if (!uniqueStatusProducts.includes(item.status_product)) {
          uniqueStatusProducts.push(item.status_product);
          return true;
        }
        return false;
      });

      console.log(this.dataDistributor, "data distributor");
      console.log(this.dataRegion, "data region");
      console.log(this.dataBranch, "data branch");
      console.log(this.dataChannel, "data channel");
      console.log(this.dataBrand, "data brand");
      console.log(this.dataStatusProduct, "data status_product");

      this.selectedBranch = this.dataBasoba[0];
      this.selectedDistributor = this.dataBasoba[0];
      this.selectedRegion = this.dataBasoba[0];
      this.selectedChannel = this.dataBasoba[0];
      this.selectedStatusProduct = this.dataBasoba[0];
      this.selectedBrand = this.dataBasoba[0];

      this.isFetching = false;
      this.refreshTable();
    },
    searchData() {
      axios
        .get("basobaAll", {
          params: {
            distributor: this.todo.distributor,
            region: this.todo.region,
            branch: this.todo.branch,
            channel: this.todo.channel,
            brand: this.todo.brand,
            status_product: this.todo.status_product,
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
      const url = `${this.$root.apiHost}${this.$root.prefixApi}basobaBulky`; // Ganti dengan URL endpoint Anda
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

    onChangeDistributorHandler(e) {
      // this.todo.distributor = e.distributor;
      this.todo.distributor = this.selectedDistributor;
      this.refreshTable();
    },

    onChangeRegionHandler(e) {
      this.todo.region = this.selectedRegion;
      this.refreshTable();
    },

    onChangeBranchHandler(e) {
      this.todo.cabang = e.cabang;
      this.refreshTable();
    },

    onChangeChannelHandler(e) {
      this.todo.channel = this.selectedChannel;
      this.refreshTable();
    },

    onChangeBrandHandler(e) {
      this.todo.brand = this.selectedBrand;
      this.refreshTable();
    },

    onChangeStatusProductHandler(e) {
      this.todo.status_product = this.selectedStatusProduct;
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
          var url = mythis.$root.apiHost + mythis.$root.prefixApi + "basoba";
          axios
            .post(
              url,
              {
                distributor: mythis.todo.distributor,
                channel: mythis.todo.channel,
                region: mythis.todo.region,
                area: mythis.todo.area,
                cabang: mythis.todo.cabang,
                parent_code: mythis.todo.parent_code,
                sku: mythis.todo.sku,
                brand: mythis.todo.brand,
                kategori: mythis.todo.kategori,
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
          var url = mythis.$root.apiHost + mythis.$root.prefixApi + "basobaBulky";
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
                this.selectedDistributor != undefined &&
                this.selectedDistributor.distributor != "All"
                  ? "&distributor=" + this.selectedDistributor.distributor
                  : ""
              }${
                this.selectedRegion.region != undefined &&
                this.selectedRegion.region != "All"
                  ? "&region=" + this.selectedRegion.region
                  : ""
              }${
                this.selectedBranch.cabang != undefined &&
                this.selectedBranch.cabang != "All"
                  ? "&branch=" + this.selectedBranch.cabang
                  : ""
              }${
                this.selectedChannel.channel != undefined &&
                this.selectedChannel.channel != "All"
                  ? "&channel=" + this.selectedChannel.channel
                  : ""
              }${
                this.selectedBrand.brand != undefined &&
                this.selectedBrand.brand != "All"
                  ? "&brand=" + this.selectedBrand.brand
                  : ""
              }${
                this.selectedStatusProduct.status_product != undefined &&
                this.selectedStatusProduct.status_product != "All"
                  ? "&status_product=" +
                    this.selectedStatusProduct.status_product
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
          "Distributor",
          "Channel",
          "Region",
          "Area",
          "Cabang",
          "Parent Code",
          "SKU",
          "Brand",
          "Kategori",
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
          url: this.$root.apiHost + this.$root.prefixApi + "basoba",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.distributor}</span>`),
              html(`<span class="pull-left">${card.channel}</span>`),
              html(`<span class="pull-left">${card.region}</span>`),
              html(`<span class="pull-left">${card.area}</span>`),
              html(`<span class="pull-left">${card.cabang}</span>`),
              html(`<span class="pull-left">${card.parent_code}</span>`),
              html(`<span class="pull-left">${card.sku}</span>`),
              html(`<span class="pull-left">${card.brand}</span>`),
              html(`<span class="pull-left">${card.kategori}</span>`),
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
              mythis.$root.apiHost + mythis.$root.prefixApi + `basoba/${id}`,
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
            "basoba/" +
            mythis.todo.id,
          {
            distributor: mythis.todo.distributor,
            channel: mythis.todo.channel,
            region: mythis.todo.region,
            area: mythis.todo.area,
            cabang: mythis.todo.cabang,
            parent_code: mythis.todo.parent_code,
            sku: mythis.todo.sku,
            brand: mythis.todo.brand,
            kategori: mythis.todo.kategori,
            status_product: mythis.todo.status_product,
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
          mythis.$root.apiHost + mythis.$root.prefixApi + `basoba/${id}`,
          config
        )
        .then(async (res) => {
          // console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.distributor = res.data.data.distributor;
          mythis.todo.channel = res.data.data.channel;
          mythis.todo.region = res.data.data.region;
          mythis.todo.area = res.data.data.area;
          mythis.todo.cabang = res.data.data.cabang;
          mythis.todo.parent_code = res.data.data.parent_code;
          mythis.todo.sku = res.data.data.sku;
          mythis.todo.brand = res.data.data.brand;
          mythis.todo.kategori = res.data.data.kategori;
          mythis.todo.status_product = res.data.data.status_product;
          document.getElementById("inputA").focus(); // sets the focus on the input

          mythis.$root.stopLoading();
        });
    },
  },
};
</script>
