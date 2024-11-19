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
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Distributor</label>
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
                    :disabled="!flagButtonAdd"
                    @input="
                      (val) => (todo.dist_code = todo.dist_code.toUpperCase())
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
                  <label for="example-nf-email">Region Name</label>
                  <input
                    type="text"
                    v-model="todo.region_name"
                    :class="
                      errorField.region_name
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) =>
                        (todo.region_name = todo.region_name.toUpperCase())
                    "
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Area Name</label>
                  <input
                    type="text"
                    v-model="todo.area_name"
                    :class="
                      errorField.area_name
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) => (todo.area_name = todo.area_name.toUpperCase())
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
                  <label for="example-nf-email">Cabang</label>
                  <input
                    type="text"
                    v-model="todo.nama_cabang"
                    :class="
                      errorField.nama_cabang
                        ? 'form-control input-lg input-error'
                        : 'form-control input-lg'
                    "
                    @input="
                      (val) =>
                        (todo.nama_cabang = todo.nama_cabang.toUpperCase())
                    "
                  />
                </div>
              </div>
              <!-- Add flag_active Checkbox -->
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">Parent Code</label>
                  <input
                    type="text"
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
              <!-- Add fields for code_bars, mnft_code, uom1, uom2, uom3, uom4, and obj_type -->
              <div class="col-md-6">
                <div class="form-group">
                  <label for="example-nf-email">SKU</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input SKU"
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
                  <label for="example-nf-email">Brand</label>
                  <CmpInputText
                    type="text"
                    placeholder="Input Brand"
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
                  <label for="example-nf-email">Status Product</label>
                  <CmpInputText
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
          <strong>MENU TREND {{ $root.judulHalaman }}</strong>
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

        <!-- <vue-csv-import v-model="csv" :fields="dataImportCsv">
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

        <!-- <br /> -->
        <table class="table-trend2" hidden v-if="tableTrend.length > 0">
          <thead>
            <tr>
              <th>No</th>
              <th>DISTRIBUTOR</th>
              <th>CHANNEL</th>
              <th>REGION</th>
              <th>AREA</th>
              <th>CABANG CODE</th>
              <th>NAMA CABANG</th>
              <th>PARENT CODE</th>
              <th>ITEM CODE</th>
              <th>SKU</th>
              <th>BRAND</th>
              <th>KATEGORI</th>
              <th>STATUS PRODUCT</th>
              <th>YOP</th>
              <th>JANUARI SALES</th>
              <th>FEBRUARI SALES</th>
              <th>MARET SALES</th>
              <th>APRIL SALES</th>
              <th>MEI SALES</th>
              <th>JUNI SALES</th>
              <th>JULI SALES</th>
              <th>AGUSTUS SALES</th>
              <th>SEPTEMBER SALES</th>
              <th>OKTOBER SALES</th>
              <th>NOVEMBER SALES</th>
              <th>DESEMBER SALES</th>
              <th>BELI JANUARI</th>
              <th>BELI FEBRUARI</th>
              <th>BELI MARET</th>
              <th>BELI APRIL</th>
              <th>BELI MEI</th>
              <th>BELI JUNI</th>
              <th>BELI JULI</th>
              <th>BELI AGUSTUS</th>
              <th>BELI SEPTEMBER</th>
              <th>BELI OKTOBER</th>
              <th>BELI NOVEMBER</th>
              <th>BELI DESEMBER</th>
              <th>JANUARI STOCK</th>
              <th>FEBRUARI STOCK</th>
              <th>MARET STOCK</th>
              <th>APRIL STOCK</th>
              <th>MEI STOCK</th>
              <th>JUNI STOCK</th>
              <th>JULI STOCK</th>
              <th>AGUSTUS STOCK</th>
              <th>SEPTEMBER STOCK</th>
              <th>OKTOBER STOCK</th>
              <th>NOVEMBER STOCK</th>
              <th>DESEMBER STOCK</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableTrend" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.dist_code }}</td>
              <td>{{ item.chnl_code }}</td>
              <td>{{ item.region_name }}</td>
              <td>{{ item.area_name }}</td>
              <td>{{ item.kode_cabang }}</td>
              <td>{{ item.nama_cabang }}</td>
              <td>{{ item.parent_code }}</td>
              <td>{{ item.item_code }}</td>
              <td>{{ item.item_name }}</td>
              <td>{{ item.brand_name }}</td>
              <td>{{ item.kategori }}</td>
              <td>{{ item.status_product }}</td>
              <td>{{ item.tahun }}</td>
              <td>{{ item.januari }}</td>
              <td>{{ item.februari }}</td>
              <td>{{ item.maret }}</td>
              <td>{{ item.april }}</td>
              <td>{{ item.mei }}</td>
              <td>{{ item.juni }}</td>
              <td>{{ item.juli }}</td>
              <td>{{ item.agustus }}</td>
              <td>{{ item.september }}</td>
              <td>{{ item.oktober }}</td>
              <td>{{ item.november }}</td>
              <td>{{ item.desember }}</td>
              <td>{{ item.beli_januari }}</td>
              <td>{{ item.beli_februari }}</td>
              <td>{{ item.beli_maret }}</td>
              <td>{{ item.beli_april }}</td>
              <td>{{ item.beli_mei }}</td>
              <td>{{ item.beli_juni }}</td>
              <td>{{ item.beli_juli }}</td>
              <td>{{ item.beli_agustus }}</td>
              <td>{{ item.beli_september }}</td>
              <td>{{ item.beli_oktober }}</td>
              <td>{{ item.beli_november }}</td>
              <td>{{ item.beli_desember }}</td>
              <td>{{ item.januari1 }}</td>
              <td>{{ item.februari1 }}</td>
              <td>{{ item.maret1 }}</td>
              <td>{{ item.april1 }}</td>
              <td>{{ item.mei1 }}</td>
              <td>{{ item.juni1 }}</td>
              <td>{{ item.juli1 }}</td>
              <td>{{ item.agustus1 }}</td>
              <td>{{ item.september1 }}</td>
              <td>{{ item.oktober1 }}</td>
              <td>{{ item.november1 }}</td>
              <td>{{ item.desember1 }}</td>
            </tr>
          </tbody>
        </table>
        <button
          v-if="csv != null"
          @click="saveTodoBulky()"
          type="button"
          class="btn btn-sm btn-primary pull-left"
        >
          SAVE DATA
        </button>
        <!-- <br />
        <br />
        <br />
        <br /> -->
        <!-- <div class="button-container"> -->
        <!-- <download-excel
            class="button"
            :data="json_data"
            :fields="json_fields"
            :worksheet="nama_sheetnya"
            :name="nama_excelnya"
            :before-generate="startDownload"
            :before-finish="finishDownload"
            type="xlsx"
          > -->
        <!-- <button
            class="btn btn-sm btn-info pull-left"
            @click="exportDetailToXLS()"
          >
            <i class="fas fa-file-excel"></i>Export Excel
          </button> -->
        <!-- </download-excel> -->

        <!-- <button
            class="btn btn-sm btn-primary pull-right"
            @click="exportPdf()"
          >
            <i class="fas fa-file-pdf"></i>Export PDF
          </button> -->
        <!-- </div> -->

        <!-- <div class="dropdown-container col-sm-3">
          <label for="select-item" class="dropdown-label">YEAR PERIODE</label>
          <div class="dropdown-wrapper">
            <select
              v-model="selectedYearPeriode"
              class="dropdown-year"
              id="select-item"
              @change="onChangeYearPeriodeHandler"
            >
              <option v-for="year in dataYearPeriode" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
            <i class="fas fa-chevron-down dropdown-icon"></i>
          </div>
        </div> -->

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
        <!-- </div> -->
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center">
              <!-- Dropdown Year Periode -->
              <div class="dropdown-container col-sm-4">
                <label for="select-item" class="dropdown-label"
                  >YEAR PERIODE</label
                >
                <div class="dropdown-wrapper">
                  <select
                    v-model="selectedYearPeriode"
                    class="dropdown-year"
                    id="select-item"
                    @change="onChangeYearPeriodeHandler"
                  >
                    <option
                      v-for="year in dataYearPeriode"
                      :key="year"
                      :value="year"
                    >
                      {{ year }}
                    </option>
                  </select>
                  <i class="dropdown-icon"></i>
                </div>
              </div>

              <button class="btn btn-info" @click="exportDetailToXLS">
                <i class="fas fa-file-excel"></i> Export Excel
              </button>
            </div>
          </div>
        </div>
        <br />

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
        kode_cabang: false,
        nama_cabang: false,
        parent_code: false,
        item_code: false,
        item_name: false,
        brand_name: false,
        kategori: false,
        status_product: false,
        januari: false,
        februari: false,
        maret: false,
        april: false,
        mei: false,
        juni: false,
        juli: false,
        agustus: false,
        september: false,
        oktober: false,
        november: false,
        desember: false,
        beli_januari: false,
        beli_februari: false,
        beli_maret: false,
        beli_april: false,
        beli_mei: false,
        beli_juni: false,
        beli_juli: false,
        beli_agustus: false,
        beli_september: false,
        beli_oktober: false,
        beli_november: false,
        beli_desember: false,
        januari1: false,
        februari1: false,
        maret1: false,
        april1: false,
        mei1: false,
        juni1: false,
        juli1: false,
        agustus1: false,
        september1: false,
        oktober1: false,
        november1: false,
        desember1: false,
      },
      // watch: {
      //   selectedYearPeriode(newYear) {
      //     this.filterTableByYear(newYear);
      //   },
      // },

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
        kode_cabang: "",
        brand_name: "",
        kategori: "",
        status_product: "",
        januari: "",
        februari: "",
        maret: "",
        april: "",
        mei: "",
        juni: "",
        juli: "",
        agustus: "",
        september: "",
        oktober: "",
        november: "",
        desember: "",
        beli_januari: "",
        beli_februari: "",
        beli_maret: "",
        beli_april: "",
        beli_mei: "",
        beli_juni: "",
        beli_juli: "",
        beli_agustus: "",
        beli_september: "",
        beli_oktober: "",
        beli_november: "",
        beli_desember: "",
        januari1: "",
        februari1: "",
        maret1: "",
        april1: "",
        mei1: "",
        juni1: "",
        juli1: "",
        agustus1: "",
        september1: "",
        oktober1: "",
        november1: "",
        desember1: "",
      },

      flagButtonAdd: true,
      csv: null,

      dataTrend: [],

      dataYearPeriode: [],
      selectedYearPeriode: [],

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
        januari: {
          label: "januari",
          required: true,
        },
        februari: {
          label: "februari",
          required: true,
        },
        maret: {
          label: "maret",
          required: true,
        },
        april: {
          label: "april",
          required: true,
        },
        mei: {
          label: "mei",
          required: true,
        },
        juni: {
          label: "juni",
          required: true,
        },
        juli: {
          label: "juli",
          required: true,
        },
        agustus: {
          label: "agustus",
          required: true,
        },
        september: {
          label: "september",
          required: true,
        },
        oktober: {
          label: "oktober",
          required: true,
        },
        november: {
          label: "november",
          required: true,
        },
        desember: {
          label: "desember",
          required: true,
        },

        beli_januari: {
          label: "beli_januari",
          required: false,
        },
        januari1: {
          label: "januari1",
          required: false,
        },
        beli_februari: {
          label: "beli_februari",
          required: false,
        },
        februari1: {
          label: "februari1",
          required: false,
        },
        beli_maret: {
          label: "beli_maret",
          required: false,
        },
        maret1: {
          label: "maret1",
          required: false,
        },
        beli_april: {
          label: "beli_april",
          required: false,
        },
        april1: {
          label: "april1",
          required: false,
        },
        beli_mei: {
          label: "beli_mei",
          required: false,
        },
        mei1: {
          label: "mei1",
          required: false,
        },
        beli_juni: {
          label: "beli_juni",
          required: false,
        },
        juni1: {
          label: "juni1",
          required: false,
        },
        beli_juli: {
          label: "beli_juli",
          required: false,
        },
        juli1: {
          label: "juli1",
          required: false,
        },
        beli_agustus: {
          label: "beli_agustus",
          required: false,
        },
        agustus1: {
          label: "agustus1",
          required: false,
        },
        beli_september: {
          label: "beli_september",
          required: false,
        },
        september1: {
          label: "september1",
          required: false,
        },
        beli_oktober: {
          label: "beli_oktober",
          required: false,
        },
        oktober1: {
          label: "oktober1",
          required: false,
        },
        beli_november: {
          label: "beli_november",
          required: false,
        },
        november1: {
          label: "november1",
          required: false,
        },
        beli_desember: {
          label: "beli_desember",
          required: false,
        },
        desember1: {
          label: "desember1",
          required: false,
        },
      },
      monthlySalesData: [],
      loading: false, // Indikator loading saat data di-fetch
      error: null,

      data_x_tabel: [],
      data_x_excel: [],
      nama_excelnya: "",
      nama_sheetnya: "Trend Analysis",
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
        JanuariSales: "JanuariSales",
        FebruariSales: "FebruariSales",
        MaretSales: "MaretSales",
        AprilSales: "AprilSales",
        MeiSales: "MeiSales",
        JuniSales: "JuniSales",
        JuliSales: "JuliSales",
        AgustusSales: "AgustusSales",
        SeptemberSales: "SeptemberSales",
        OktoberSales: "OktoberSales",
        NovemberSales: "NovemberSales",
        DesemberSales: "DesemberSales",
        BeliJanuari: "BeliJanuari",
        BeliFebruari: "BeliFebruari",
        BeliMaret: "BeliMaret",
        BeliApril: "BeliApril",
        BeliMei: "BeliMei",
        BeliJuni: "BeliJuni",
        BeliJuli: "BeliJuli",
        BeliAgustus: "BeliAgustus",
        BeliSeptember: "BeliSeptember",
        BeliOktober: "BeliOktober",
        BeliNovember: "BeliNovember",
        BeliDesember: "BeliDesember",
        JanuariStock: "JanuariStock",
        FebruariStock: "FebruariStock",
        MaretStock: "MaretStock",
        AprilStock: "AprilStock",
        MeiStock: "MeiStock",
        JuniStock: "JuniStock",
        JuliStock: "JuliStock",
        AgustusStock: "AgustusStock",
        SeptemberStock: "SeptemberStock",
        OktoberStock: "OktoberStock",
        NovemberStock: "NovemberStock",
        DesemberStock: "DesemberStock",
      },
      newlimit: 10,
    };
  },
  async mounted() {
    // await this.$root.refreshToken(localStorage.getItem("token"));
    this.getTable();
    this.userid = this.$root.get_id_user(localStorage.getItem("unique"));
    // await this.getdist_codeForm();
    // await this.getRegion_nameregion_nameForm();
    // await this.getBranchForm();
    // await this.getChannelForm();
    // await this.getBrandForm();
    // await this.getStatusProductForm();
    // await this.fetchMonthlySalesData();
    await this.getAllDatas();
    await this.getTrendTable();
    // await this.getSelectData();
  },
  methods: {
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
    async filterTableByYear(year) {
      try {
        // Fetch the filtered data based on the selected year
        const response = await axios.get(`monthly-sales-trend-g`, {
          params: { year: year },
        });

        // Assuming response.data.results is the filtered data array
        this.tableTrend = response.data.results;
      } catch (error) {
        console.error("Error filtering data by year:", error);
      }
    },
    async getTrendTable() {
      let offset = 0;
      const limit = 100;
      this.tableTrend = []; // Menyimpan semua data hasil looping

      try {
        while (offset < 1000) {
          const response = await axios.get(
            `http://178.1.7.230:8207/si/monthly-sales-trend-g?limit=${limit}&offset=${offset}`
          );
          const results = response.data.results;

          // Menggabungkan hasil dari setiap pemanggilan ke `this.tableTrend`
          this.tableTrend = [...this.tableTrend, ...results];

          // Tambahkan offset sebesar limit setiap kali iterasi
          offset += limit;

          // Check jika data hasil response kosong, maka hentikan proses
          if (results.length === 0) break;
        }

        console.log("Total data fetched:", this.tableTrend.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    exportDetailToXLS() {
      try {
        console.log(this.tableTrend);

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
              mythis.$root.apiHost + mythis.$root.prefixApi + "trenddelete_g",
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
    async fetchMonthlySalesData() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(
          this.$root.apiHost + this.$root.prefixApi + "monthly-sales-trend-g"
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
      // Code to fetch and populate dataYearPeriode
      const urlGetTrend =
        this.$root.apiHost + this.$root.prefixApi + "tahunTrend";
      try {
        this.dataYearPeriode = [
          new Date().getFullYear(),
          new Date().getFullYear() -1,
          new Date().getFullYear() -2,
        ];
        const response = await axios.get(urlGetTrend);
        // if (response.data.status && response.data.data) {
        //   this.dataYearPeriode = response.data.data
        //     .map((item) => item.tahun)
        //     .filter((year) => year !== "Total");
          
        // }
      } catch (error) {
        console.error("Error fetching year data:", error);
      }
    },
    searchData() {
      axios
        .get("trend_g", {
          params: {
            dist_code: this.todo.dist_code,
            region_name: this.todo.region_name,
            area_name: this.todo.area_name,
            kode_cabang: this.todo.kode_cabang,
            nama_cabang: this.todo.nama_cabang,
            parent_code: this.todo.parent_code,
            item_code: this.todo.item_code,
            item_name: this.todo.item_name,
            branch: this.todo.branch,
            chnl_code: this.todo.chnl_code,
            brand_name: this.todo.brand_name,
            status_product: this.todo.status_product,
            tahun: this.todo.tahun,
            januari: this.todo.januari,
            februari: this.todo.februari,
            maret: this.todo.maret,
            april: this.todo.april,
            mei: this.todo.mei,
            juni: this.todo.juni,
            juli: this.todo.juli,
            agustus: this.todo.agustus,
            september: this.todo.september,
            oktober: this.todo.oktober,
            november: this.todo.november,
            desember: this.todo.desember,
            beli_januari: this.todo.beli_januari,
            beli_februari: this.todo.beli_februari,
            beli_maret: this.todo.beli_maret,
            beli_april: this.todo.beli_april,
            beli_mei: this.todo.beli_mei,
            beli_juni: this.todo.beli_juni,
            beli_juli: this.todo.beli_juli,
            beli_agustus: this.todo.beli_agustus,
            beli_september: this.todo.beli_september,
            beli_oktober: this.todo.beli_oktober,
            beli_november: this.todo.beli_november,
            beli_desember: this.todo.beli_desember,
            januari1: this.todo.januari1,
            februari1: this.todo.februari1,
            maret1: this.todo.maret1,
            april1: this.todo.april1,
            mei1: this.todo.mei1,
            juni1: this.todo.juni1,
            juli1: this.todo.juli1,
            agustus1: this.todo.agustus1,
            september1: this.todo.september1,
            oktober1: this.todo.oktober1,
            november1: this.todo.november1,
            desember1: this.todo.desember1,
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
      const url = `${this.$root.apiHost}${this.$root.prefixApi}trendBulky`; // Ganti dengan URL endpoint Anda
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

    onChangeDistCodeHandler(e) {
      // this.todo.dist_code = e.dist_code;
      this.todo.dist_code = this.selectedDistCode;
      // this.refreshTable();
    },

    onChangeRegionNameHandler(e) {
      this.todo.region_name = this.selectedRegionName;
      // this.refreshTable();
    },

    onChangeBranchHandler(e) {
      this.todo.nama_cabang = e.nama_cabang;
      // this.refreshTable();
    },

    onChangeChannelHandler(e) {
      this.todo.chnl_code = this.selectedChannel;
      // this.refreshTable();
    },

    onChangeBrandHandler(e) {
      this.todo.brand_name = this.selectedBrand;
      // this.refreshTable();
    },

    onChangeStatusProductHandler(e) {
      this.todo.status_product = this.selectedStatusProduct;
      // this.refreshTable();
    },
    onChangeYearPeriodeHandler(e) {
      this.todo.tahun = this.selectedYearPeriode;
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
          var url = mythis.$root.apiHost + mythis.$root.prefixApi + "trend_g";
          axios
            .post(
              url,
              {
                dist_code: mythis.todo.dist_code,
                chnl_code: mythis.todo.chnl_code,
                region_name: mythis.todo.region_name,
                area_name: mythis.todo.area_name,
                kode_cabang: mythis.todo.kode_cabang,
                nama_cabang: mythis.todo.nama_cabang,
                parent_code: mythis.todo.parent_code,
                item_code: mythis.todo.item_code,
                item_name: mythis.todo.item_name,
                brand_name: mythis.todo.brand_name,
                kategori: mythis.todo.kategori,
                status_product: mythis.todo.status_product,
                tahun: mythis.todo.tahun,
                januari: mythis.todo.januari,
                februari: mythis.todo.februari,
                maret: mythis.todo.maret,
                april: mythis.todo.april,
                mei: mythis.todo.mei,
                juni: mythis.todo.juni,
                juli: mythis.todo.juli,
                agustus: mythis.todo.agustus,
                september: mythis.todo.september,
                oktober: mythis.todo.oktober,
                november: mythis.todo.november,
                desember: mythis.todo.desember,
                beli_januari: mythis.todo.beli_januari,
                beli_februari: mythis.todo.beli_februari,
                beli_maret: mythis.todo.beli_maret,
                beli_april: mythis.todo.beli_april,
                beli_mei: mythis.todo.beli_mei,
                beli_juni: mythis.todo.beli_juni,
                beli_juli: mythis.todo.beli_juli,
                beli_agustus: mythis.todo.beli_agustus,
                beli_september: mythis.todo.beli_september,
                beli_oktober: mythis.todo.beli_oktober,
                beli_november: mythis.todo.beli_november,
                beli_desember: mythis.todo.beli_desember,
                januari1: mythis.todo.januari1,
                februari1: mythis.todo.februari1,
                maret1: mythis.todo.maret1,
                april1: mythis.todo.april1,
                mei1: mythis.todo.mei1,
                juni1: mythis.todo.juni1,
                juli1: mythis.todo.juli1,
                agustus1: mythis.todo.agustus1,
                september1: mythis.todo.september1,
                oktober1: mythis.todo.oktober1,
                november1: mythis.todo.november1,
                desember1: mythis.todo.desember1,

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
            "si/monthly-sales-trend-g?offset=" +
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

            DistCode: " " + resData.results[key].dist_code,
            Channel: resData.results[key].chnl_code,
            Region: resData.results[key].region_name,
            Area: resData.results[key].area_name,
            KodeCabang: resData.results[key].kode_cabang,
            Cabang: resData.results[key].nama_cabang,
            ParentCode: resData.results[key].parent_code,
            ItemCode: resData.results[key].item_code,
            SKU: resData.results[key].item_name,
            Brand: resData.results[key].brand_name,
            Kategori: resData.results[key].kategori,
            StatusProduct: resData.results[key].status_product,
            YOP: resData.results[key].tahun,
            JanuariSales: resData.results[key].januari,
            FebruariSales: resData.results[key].februari,
            MaretSales: resData.results[key].maret,
            AprilSales: resData.results[key].april,
            MeiSales: resData.results[key].mei,
            JuniSales: resData.results[key].juni,
            JuliSales: resData.results[key].juli,
            AgustusSales: resData.results[key].agustus,
            SeptemberSales: resData.results[key].september,
            OktoberSales: resData.results[key].oktober,
            NovemberSales: resData.results[key].november,
            DesemberSales: resData.results[key].desember,

            BeliJanuari: resData.results[key].beli_januari,
            BeliFebruari: resData.results[key].beli_februari,
            BeliMaret: resData.results[key].beli_maret,
            BeliApril: resData.results[key].beli_april,
            BeliMei: resData.results[key].beli_mei,
            BeliJuni: resData.results[key].beli_juni,
            BeliJuli: resData.results[key].beli_juli,
            BeliAgustus: resData.results[key].beli_agustus,
            BeliSeptember: resData.results[key].beli_september,
            BeliOktober: resData.results[key].beli_oktober,
            BeliNovember: resData.results[key].beli_november,
            BeliDesember: resData.results[key].beli_desember,
            JanuariStock: resData.results[key].januari1,
            FebruariStock: resData.results[key].februari1,
            MaretStock: resData.results[key].maret1,
            AprilStock: resData.results[key].april1,
            MeiStock: resData.results[key].mei1,
            JuniStock: resData.results[key].juni1,
            JuliStock: resData.results[key].juli1,
            AgustusStock: resData.results[key].agustus1,
            SeptemberStock: resData.results[key].september1,
            OktoberStock: resData.results[key].oktober1,
            NovemberStock: resData.results[key].november1,
            DesemberStock: resData.results[key].desember1,
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
      mythis.nama_excelnya = "MASTER_TREND_ANALYSIS_" + a + ".xlsx";
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
              "si/trend?offset=" +
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
        doc.text("Master Trend Analysis Report", 14, 22);
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
              "Distributor",
              "Channel",
              "Region",
              "Area",
              "Kode Cabang",
              "Cabang",
              "Parent Code",
              "Item Code",
              "SKU",
              "Brand",
              "Kategori",
              "Status Product",
              "YOP",
              "Januari Sales",
              "Februari Sales",
              "Maret Sales",
              "April Sales",
              "Mei Sales",
              "Juni Sales",
              "Juli Sales",
              "Agustus Sales",
              "September Sales",
              "Oktober Sales",
              "November Sales",
              "Desember Sales",

              "Beli Januari",
              "Beli Februari",
              "Beli Maret",
              "Beli April",
              "Beli Mei",
              "Beli Juni",
              "Beli Juli",
              "Beli Agustus",
              "Beli September",
              "Beli Oktober",
              "Beli November",
              "Beli Desember",
              "Januari Stock",
              "Februari Stock",
              "Maret Stock",
              "April Stock",
              "Mei Stock",
              "Juni Stock",
              "Juli Stock",
              "Agustus Stock",
              "September Stock",
              "Oktober Stock",
              "November Stock",
              "Desember Stock",
            ],
          ],
          body: allData.map((item, index) => [
            index + 1,
            item.dist_code,
            item.chnl_code,
            item.region_name,
            item.area_name,
            item.kode_cabang,
            item.nama_cabang,
            item.parent_code,
            item.item_code,
            item.item_name,
            item.brand_name,
            item.kategori,
            item.status_product,
            item.tahun,
            item.januari,
            item.februari,
            item.maret,
            item.april,
            item.mei,
            item.juni,
            item.juli,
            item.agustus,
            item.september,
            item.oktober,
            item.november,
            item.desember,

            item.beli_januari,
            item.beli_februari,
            item.beli_maret,
            item.beli_april,
            item.beli_mei,
            item.beli_juni,
            item.beli_juli,
            item.beli_agustus,
            item.beli_september,
            item.beli_oktober,
            item.beli_november,
            item.beli_desember,
            item.januari1,
            item.februari1,
            item.maret1,
            item.april1,
            item.mei1,
            item.juni1,
            item.juli1,
            item.agustus1,
            item.september1,
            item.oktober1,
            item.november1,
            item.desember1,
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
          "Master_Trend_Analysis_Report_" +
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
    async getTable() {
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
                this.selectedYearPeriode != undefined &&
                this.selectedYearPeriode != "All"
                  ? "&tahun=" + this.selectedYearPeriode
                  : "&tahun="
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
          "DISTRIBUTOR",
          "CHANNEL",
          "REGION",
          "AREA",
          "CABANG CODE",
          "NAMA CABANG",
          "PARENT CODE",
          "ITEM CODE",
          "SKU",
          "BRAND",
          "KATEGORI",
          "STATUS PRODUCT",
          "YOP",
          "JANUARI SALES",
          "FEBRUARI SALES",
          "MARET SALES",
          "APRIL SALES",
          "MEI SALES",
          "JUNI SALES",
          "JULI SALES",
          "AGUSTUS SALES",
          "SEPTEMBER SALES",
          "OKTOBER SALES",
          "NOVEMBER SALES",
          "DESEMBER SALES",

          "BELI JANUARI",
          "BELI FEBRUARI",
          "BELI MARET",
          "BELI APRIL",
          "BELI MEI",
          "BELI JUNI",
          "BELI JULI",
          "BELI AGUSTUS",
          "BELI SEPTEMBER",
          "BELI OKTOBER",
          "BELI NOVEMBER",
          "BELI DESEMBER",
          "JANUARI STOCK",
          "FEBRUARI STOCK",
          "MARET STOCK",
          "APRIL STOCK",
          "MEI STOCK",
          "JUNI STOCK",
          "JULI STOCK",
          "AGUSTUS STOCK",
          "SEPTEMBER STOCK",
          "OKTOBER STOCK",
          "NOVEMBER STOCK",
          "DESEMBER STOCK",

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
            "text-align": "center", // Center-align table cell text
            padding: "14px 10px", // Padding for table cell data
            "font-size": "13px", // Font size for table cell data
            border: "1px solid #ddd", // Border between table cells
            "white-space": "nowrap", // Prevent text wrapping
          },
        },
        server: {
          url:
            this.$root.apiHost + this.$root.prefixApi + "monthly-sales-trend-g", // "trend",
          then: (data) =>
            data.results.map((card) => [
              card.id,
              data.nomorBaris++ + 1,
              html(`<span class="pull-left">${card.dist_code}</span>`),
              html(`<span class="pull-left">${card.chnl_code}</span>`),
              html(`<span class="pull-left">${card.region_name}</span>`),
              html(`<span class="pull-left">${card.area_name}</span>`),
              html(`<span class="pull-left">${card.kode_cabang}</span>`),
              html(`<span class="pull-left">${card.nama_cabang}</span>`),
              html(`<span class="pull-left">${card.parent_code}</span>`),
              html(`<span class="pull-left">${card.item_code}</span>`),
              html(`<span class="pull-left">${card.item_name}</span>`),
              html(`<span class="pull-left">${card.brand_name}</span>`),
              html(`<span class="pull-left">${card.kategori}</span>`),
              html(`<span class="pull-left">${card.status_product}</span>`),
              html(`<span class="pull-left">${card.tahun}</span>`),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.januari
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.februari
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.maret
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.april
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.mei
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.juni
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.juli
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.agustus
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.september
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.oktober
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.november
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.desember
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_januari
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_februari
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_maret
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_april
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_mei
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_juni
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_juli
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_agustus
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_september
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_oktober
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_november
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.beli_desember
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.januari1
                )}</span>`
              ),
              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.februari1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.maret1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.april1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.mei1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.juni1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.juli1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.agustus1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.september1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.oktober1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.november1
                )}</span>`
              ),

              html(
                `<span class="pull-left">${mythis.formatNumber(
                  card.desember1
                )}</span>`
              ),
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
              mythis.$root.apiHost + mythis.$root.prefixApi + `trend_g/${id}`,
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
            "trend_g/" +
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
            januari: mythis.todo.januari,
            februari: mythis.todo.februari,
            maret: mythis.todo.maret,
            april: mythis.todo.april,
            mei: mythis.todo.mei,
            juni: mythis.todo.juni,
            juli: mythis.todo.juli,
            agustus: mythis.todo.agustus,
            september: mythis.todo.september,
            oktober: mythis.todo.oktober,
            november: mythis.todo.november,
            desember: mythis.todo.desember,
            beli_januari: mythis.todo.beli_januari,
            beli_februari: mythis.todo.beli_februari,
            beli_maret: mythis.todo.beli_maret,
            beli_april: mythis.todo.beli_april,
            beli_mei: mythis.todo.beli_mei,
            beli_juni: mythis.todo.beli_juni,
            beli_juli: mythis.todo.beli_juli,
            beli_agustus: mythis.todo.beli_agustus,
            beli_september: mythis.todo.beli_september,
            beli_oktober: mythis.todo.beli_oktober,
            beli_november: mythis.todo.beli_november,
            beli_desember: mythis.todo.beli_desember,
            januari1: mythis.todo.januari1,
            februari1: mythis.todo.februari1,
            maret1: mythis.todo.maret1,
            april1: mythis.todo.april1,
            mei1: mythis.todo.mei1,
            juni1: mythis.todo.juni1,
            juli1: mythis.todo.juli1,
            agustus1: mythis.todo.agustus1,
            september1: mythis.todo.september1,
            oktober1: mythis.todo.oktober1,
            november1: mythis.todo.november1,
            desember1: mythis.todo.desember1,
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
        .get(mythis.$root.apiHost + mythis.$root.prefixApi + `trend_g`, config)
        .then(async (res) => {
          // console.log(res.data.data);
          //mythis.acuanEdit = id;
          //mythis.todo = res.data.data;
          mythis.todo.id = id;
          mythis.todo.dist_code = res.data.data.dist_code;
          mythis.todo.chnl_code = res.data.data.chnl_code;
          mythis.todo.region_name = res.data.data.region_name;
          mythis.todo.area_name = res.data.data.area_name;
          mythis.todo.kode_cabang = res.data.data.kode_cabang;
          mythis.todo.nama_cabang = res.data.data.nama_cabang;
          mythis.todo.parent_code = res.data.data.parent_code;
          mythis.todo.item_code = res.data.data.item_code;
          mythis.todo.item_name = res.data.data.item_name;
          mythis.todo.brand_name = res.data.data.brand_name;
          mythis.todo.kategori = res.data.data.kategori;
          mythis.todo.status_product = res.data.data.status_product;
          mythis.todo.januari = res.data.data.januari;
          mythis.todo.februari = res.data.data.februari;
          mythis.todo.maret = res.data.data.maret;
          mythis.todo.april = res.data.data.april;
          mythis.todo.mei = res.data.data.mei;
          mythis.todo.juni = res.data.data.juni;
          mythis.todo.juli = res.data.data.juli;
          mythis.todo.agustus = res.data.data.agustus;
          mythis.todo.september = res.data.data.september;
          mythis.todo.oktober = res.data.data.oktober;
          mythis.todo.november = res.data.data.november;
          mythis.todo.desember = res.data.data.desember;
          mythis.todo.beli_januari = res.data.data.beli_januari;
          mythis.todo.beli_februari = res.data.data.beli_februari;
          mythis.todo.beli_maret = res.data.data.beli_maret;
          mythis.todo.beli_april = res.data.data.beli_april;
          mythis.todo.beli_mei = res.data.data.beli_mei;
          mythis.todo.beli_juni = res.data.data.beli_juni;
          mythis.todo.beli_juli = res.data.data.beli_juli;
          mythis.todo.beli_agustus = res.data.data.beli_agustus;
          mythis.todo.beli_september = res.data.data.beli_september;
          mythis.todo.beli_oktober = res.data.data.beli_oktober;
          mythis.todo.beli_november = res.data.data.beli_november;
          mythis.todo.beli_desember = res.data.data.beli_desember;
          mythis.todo.januari1 = res.data.data.januari1;
          mythis.todo.februari1 = res.data.data.februari1;
          mythis.todo.maret1 = res.data.data.maret1;
          mythis.todo.april1 = res.data.data.april1;
          mythis.todo.mei1 = res.data.data.mei1;
          mythis.todo.juni1 = res.data.data.juni1;
          mythis.todo.juli1 = res.data.data.juli1;
          mythis.todo.agustus1 = res.data.data.agustus1;
          mythis.todo.september1 = res.data.data.september1;
          mythis.todo.oktober1 = res.data.data.oktober1;
          mythis.todo.november1 = res.data.data.november1;
          mythis.todo.desember1 = res.data.data.desember1;

          document.getElementById("inputA").focus(); // sets the focus on the input

          mythis.$root.stopLoading();
        });
    },
  },
};
</script>

<style scoped>
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
  margin-left: 10px; /* Tambahkan sedikit jarak */
  white-space: nowrap;
  padding: 8px 12px;
  font-size: 12px;
  max-width: 130px; /* Membatasi lebar tombol */
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
.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.dropdown-container {
  max-width: 200px; /* Maksimal lebar dropdown */
}
.dropdown-label {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
}

.dropdown-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-year {
  width: 100%;
  padding: 8px;
  font-size: 14px;
}

/* Styling saat hover dan fokus */
.dropdown-year:hover {
  border-color: #007bff;
}

.dropdown-year:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Icon di dalam dropdown */
.dropdown-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  pointer-events: none;
  color: #333;
  font-size: 12px;
}
</style>
