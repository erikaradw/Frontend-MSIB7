<template>
  <div class="row">
  <div class="col-md-12" style="background-color: white; padding-left: 50px;">
    <div style="overflow-x: scroll; width: 100%; max-height: 70vh;">
      <canvas id="branchChart"></canvas>
    </div>
  </div>
</div>

  <div class="min-h-screen bg-white py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <!-- <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">
          Sales Analytics Dashboard
        </h1>
        <p class="mt-1 text-sm text-gray-600">
          Comprehensive overview of sales performance across regions
        </p>
      </div> -->

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div
          v-for="(card, index) in summaryCards"
          :key="index"
          class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
        >
          <div class="flex items-center">
            <div :class="['flex-shrink-0 rounded-md p-3', card.bgColor]">
              <component
                :is="card.icon"
                class="w-6 h-6"
                :class="card.iconColor"
              />
            </div>
            <div class="ml-4">
              <!-- <h2 class="text-sm font-medium text-gray-600">
                {{ card.title }}
              </h2>
              <p class="text-lg font-semibold text-gray-900">
                {{ card.value }}
              </p> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Brand Distribution -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <!-- <h2 class="text-lg font-semibold text-gray-900 mb-4">
            Brand Distribution
          </h2> -->
          <apexchart
            type="donut"
            height="350"
            :options="brandChartOptions"
            :series="brandChartSeries"
          />
        </div>

        <!-- Regional Sales -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <!-- <h2 class="text-lg font-semibold text-gray-900 mb-4">
            Regional Sales Distribution
          </h2> -->
          <apexchart
            type="bar"
            height="350"
            :options="regionalChartOptions"
            :series="regionalChartSeries"
          />
        </div>

        <!-- Area Sales 1 -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <!-- <h2 class="text-lg font-semibold text-gray-900 mb-4">
            Area Sales - Region 1
          </h2> -->
          <apexchart
            type="line"
            height="350"
            :options="area1ChartOptions"
            :series="area1ChartSeries"
          />
        </div>

        <!-- Area Sales 2 -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <!-- <h2 class="text-lg font-semibold text-gray-900 mb-4">
            Area Sales - Region 2
          </h2> -->
          <apexchart
            type="line"
            height="350"
            :options="area2ChartOptions"
            :series="area2ChartSeries"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { Chart } from "chart.js/auto";
import axios from "axios";
export default defineComponent({
  name: "Dashboard",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    const chartTheme = {
      mode: "light",
      monochrome: {
        enabled: false,
      },
    };

    return {
      dataGrafik: [],
      brandChartSeries: [],
      regionalChartSeries: [],
      loading: true,
      summaryCards: [
        {
          title: "Total Sales",
          value: "Rp 2.5M",
          icon: "TrendingUpIcon",
          iconColor: "text-blue-600",
          bgColor: "bg-blue-50",
        },
        {
          title: "Top Region",
          value: "JAWA",
          icon: "UsersIcon",
          iconColor: "text-green-600",
          bgColor: "bg-green-50",
        },
        {
          title: "Top Brand",
          value: "SARIAYU",
          icon: "AwardIcon",
          iconColor: "text-purple-600",
          bgColor: "bg-purple-50",
        },
        {
          title: "Growth",
          value: "+12.5%",
          icon: "LineChartIcon",
          iconColor: "text-yellow-600",
          bgColor: "bg-yellow-50",
        },
      ],

      brandChartOptions: {
        theme: chartTheme,
        chart: {
          background: "#ffffff",
        },
        labels: [
          "SARIAYU",
          "RHC",
          "BIOKOS",
          "CARING COLOR",
          "SARIAYU JAMU",
          "BELIA",
          "Quick N Fresh",
          "CI",
          "MIRABELA",
        ],
        colors: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#6366F1",
          "#EC4899",
          "#8B5CF6",
          "#14B8A6",
          "#6B7280",
          "#EF4444",
        ],
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "Total",
                  color: "#111827",
                  formatter: function (w) {
                    return "100%";
                  },
                },
              },
            },
          },
        },
        legend: {
          position: "right",
          fontSize: "14px",
          labels: {
            colors: "#111827",
          },
          markers: {
            width: 12,
            height: 12,
            radius: 6,
          },
        },
        tooltip: {
          theme: "light",
          y: {
            formatter: function (value) {
              return value + "%";
            },
          },
        },
      },
      brandChartSeries: [56.8, 9.5, 15.5, 9.1, 3.2, 2.1, 1.8, 1.5, 5.7],

      regionalChartOptions: {
        theme: chartTheme,
        chart: {
          background: "#ffffff",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ["JAWA", "SUMATERA", "BALI", "KALIMANTAN", "SULAWESI"],
          labels: {
            style: {
              colors: "#111827",
              fontSize: "12px",
              fontWeight: 500,
            },
          },
        },
        yaxis: {
          title: {
            text: "Sales (000)",
            style: {
              color: "#111827",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          labels: {
            style: {
              colors: "#111827",
            },
          },
        },
        colors: ["#3B82F6", "#F59E0B", "#10B981", "#8B5CF6"],
        legend: {
          position: "top",
          fontSize: "14px",
          labels: {
            colors: "#111827",
          },
          markers: {
            width: 12,
            height: 12,
            radius: 6,
          },
        },
        grid: {
          borderColor: "#E5E7EB",
          strokeDashArray: 4,
        },
        tooltip: {
          theme: "light",
          y: {
            formatter: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
      regionalChartSeries: [
        {
          name: "YEARLY AVERAGE",
          data: [200000, 40000, 10000, 8000, 5000],
        },
        {
          name: "AVERAGE 9 BULAN",
          data: [180000, 35000, 9000, 7000, 4000],
        },
        {
          name: "AVERAGE 6 BULAN",
          data: [190000, 38000, 9500, 7500, 4500],
        },
        {
          name: "AVERAGE 3 BULAN",
          data: [195000, 39000, 9800, 7800, 4800],
        },
      ],

      area1ChartOptions: {
        theme: chartTheme,
        chart: {
          background: "#ffffff",
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        xaxis: {
          categories: [
            "JAWA TENGAH",
            "JAWA TIMUR 1",
            "JABODETABEK",
            "JAWA TIMUR 2",
          ],
          labels: {
            style: {
              colors: "#111827",
              fontSize: "12px",
              fontWeight: 500,
            },
          },
        },
        yaxis: {
          title: {
            text: "Sales (000)",
            style: {
              color: "#111827",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          labels: {
            style: {
              colors: "#111827",
            },
          },
        },
        colors: ["#3B82F6", "#F59E0B", "#10B981", "#8B5CF6"],
        legend: {
          position: "top",
          fontSize: "14px",
          labels: {
            colors: "#111827",
          },
          markers: {
            width: 12,
            height: 12,
            radius: 6,
          },
        },
        grid: {
          borderColor: "#E5E7EB",
          strokeDashArray: 4,
        },
        tooltip: {
          theme: "light",
          y: {
            formatter: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
      area1ChartSeries: [
        {
          name: "YEARLY AVERAGE",
          data: [60000, 45000, 40000, 35000],
        },
        {
          name: "AVERAGE 9 BULAN",
          data: [58000, 43000, 38000, 33000],
        },
        {
          name: "AVERAGE 6 BULAN",
          data: [59000, 44000, 39000, 34000],
        },
        {
          name: "AVERAGE 3 BULAN",
          data: [61000, 46000, 41000, 36000],
        },
      ],

      area2ChartOptions: {
        theme: chartTheme,
        chart: {
          background: "#ffffff",
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        xaxis: {
          categories: [
            "SURABAYA",
            "MALANG",
            "YOGYAKARTA",
            "BANDUNG",
            "DENPASAR",
          ],
          labels: {
            style: {
              colors: "#111827",
              fontSize: "12px",
              fontWeight: 500,
            },
          },
        },
        yaxis: {
          title: {
            text: "Sales (000)",
            style: {
              color: "#111827",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          labels: {
            style: {
              colors: "#111827",
            },
          },
        },
        colors: ["#3B82F6", "#F59E0B", "#10B981", "#8B5CF6"],
        legend: {
          position: "top",
          fontSize: "14px",
          labels: {
            colors: "#111827",
          },
          markers: {
            width: 12,
            height: 12,
            radius: 6,
          },
        },
        grid: {
          borderColor: "#E5E7EB",
          strokeDashArray: 4,
        },
        tooltip: {
          theme: "light",
          y: {
            formatter: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
      area2ChartSeries: [
        {
          name: "YEARLY AVERAGE",
          data: [35000, 30000, 25000, 20000, 15000],
        },
        {
          name: "AVERAGE 9 BULAN",
          data: [33000, 28000, 23000, 18000, 13000],
        },
        {
          name: "AVERAGE 6 BULAN",
          data: [34000, 29000, 24000, 19000, 14000],
        },
        {
          name: "AVERAGE 3 BULAN",
          data: [36000, 31000, 26000, 21000, 16000],
        },
      ],
    };
  },

  mounted() {
    this.fetchChartData();
    this.getGrafik();
  },

  methods: {
    async getGrafik() {
      const response = await axios.get("http://localhost:8002/si/grafikTrend");
      this.dataGrafik = response.data.data;
      this.renderChart();
    },
    renderChart() {
      // Ambil elemen canvas
      const canvas = document.getElementById("branchChart");
      const ctx = canvas.getContext("2d");

      // Hitung lebar dinamis berdasarkan jumlah data
      const labels = this.dataGrafik.map((item) => item.nama_cabang);
      const barWidth = 50; // Lebar setiap bar dalam px
      const totalWidth = labels.length * barWidth; // Total lebar chart
      canvas.style.width = `${totalWidth}px`; // Atur lebar canvas secara dinamis

      // Data untuk setiap kategori
      const yearlyData = this.dataGrafik.map((item) => item.total_yearly_average_unit);
      const nineMonthData = this.dataGrafik.map((item) => item.total_9_month_average_unit);
      const sixMonthData = this.dataGrafik.map((item) => item.total_6_month_average_unit);
      const threeMonthData = this.dataGrafik.map((item) => item.total_3_month_average_unit);

      // Tentukan nilai maksimum untuk skala Y (misal, nilai tertinggi + 10% sebagai batas atas)
      const maxValue = Math.max(
        ...yearlyData,
        ...nineMonthData,
        ...sixMonthData,
        ...threeMonthData
      );
      const yAxisMax = Math.ceil(maxValue * 1.2); // Tambahkan margin 20% ke nilai maksimum

      const data = {
        labels: labels, // Cabang
        datasets: [
          {
            label: "Yearly Average",
            data: yearlyData,
            backgroundColor: "rgba(54, 162, 235, 0.7)", // Biru
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 9 Months",
            data: nineMonthData,
            backgroundColor: "rgba(255, 206, 86, 0.7)", // Kuning
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 6 Months",
            data: sixMonthData,
            backgroundColor: "rgba(75, 192, 192, 0.7)", // Hijau
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 3 Months",
            data: threeMonthData,
            backgroundColor: "rgba(153, 102, 255, 0.7)", // Ungu
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      };

      const config = {
        type: "bar",
        data: data,
        options: {
          responsive: false, // Matikan responsivitas agar width diatur manual
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Average Unit by Branch",
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
              max: yAxisMax, // Set nilai maksimum skala Y
            },
          },
        },
      };

      // Render Chart
      new Chart(ctx, config);
    },
    async piechart() {
      const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
    },
    async fetchChartData() {
      this.loading = true; // Tampilkan loading
      try {
        const response = await axios.get("monthly-sales-data");
        const { brandData, regionalData } = response.data;

        this.brandChartSeries = brandData;
        this.regionalChartSeries = regionalData;
      } catch (error) {
        console.error("Gagal memuat data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style>
.apexcharts-tooltip {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.dashboard-card {
  transition: all 0.3s ease;
}

.dashboard-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media (max-width: 768px) {
  .grid {
    gap: 1rem;
  }

  .p-6 {
    padding: 1rem;
  }
}
</style>
