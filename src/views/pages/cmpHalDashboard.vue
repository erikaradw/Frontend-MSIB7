<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <h1>Dashboard</h1>
      <p>Hi, Nama Anda</p>
    </header>

    <section class="dashboard-metrics">
      <div class="metric-card" v-for="(metric, index) in metrics" :key="index">
        <h3>{{ metric.title }}</h3>
        <p class="metric-value">{{ metric.value }}</p>
        <p class="metric-note" v-if="metric.note">{{ metric.note }}</p>
      </div>
    </section>

    <section class="charts-section">
      <div class="chart-card">
        <h3>Average Unit by Cabang</h3>
        <div class="scroll-container">
          <canvas id="branchChart"></canvas>
        </div>
      </div>

      <div class="chart-row">
        <div class="chart-card chart-half">
          <h3>Sales Distribution by Brand</h3>
          <canvas id="brandDonutChart"></canvas>
        </div>
        <div class="chart-card chart-half">
          <h3>Average Unit by SKU</h3>
          <canvas id="itemChart"></canvas>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      metrics: [
        { title: "Jumlah SKU", value: "1992", note: null },
        { title: "Average 9 Bulan", value: "0", note: "0%" },
        { title: "Average 6 Bulan", value: "3", note: "0.15%" },
        { title: "Average 3 Bulan", value: "29", note: null },
      ],
      dataGrafik: [],
      dataBrand: [],
      dataSKU: [],
    };
  },
  mounted() {
    this.getGrafik();
    this.getGrafikByBrand();
    // this.getGrafikBySKU();
  },
  methods: {
    async getGrafik() {
      try {
        const response = await axios.get(
          this.$root.apiHost + this.$root.prefixApi + "grafikTrend"
        );
        this.dataGrafik = response.data.data;
        this.renderBranchChart();
      } catch (error) {
        console.error("Error fetching data: ", error);
        Swal.fire(
          "Error!",
          "Failed to fetch grafikTrend data. Please try again.",
          "error"
        );
      }
    },
    async getGrafikByBrand() {
      try {
        const response = await axios.get(
          this.$root.apiHost + this.$root.prefixApi + "grafikTrendByBrand"
        );
        this.dataBrand = response.data.data; // Simpan data dari API
        this.renderBrandDonutChart(); // Render grafik donat
      } catch (error) {
        console.error("Error fetching data: ", error);
        Swal.fire(
          "Error!",
          "Failed to fetch grafikTrendByBrand data. Please try again.",
          "error"
        );
      }
    },
    async getGrafikbySKU() {
      try {
        const response = await axios.get(
          this.$root.apiHost + this.$root.prefixApi + "grafikTrendBySKU"
        );
        this.dataSKU = response.data.data;
        this.renderItemChart();
      } catch (error) {
        console.error("Error fetching data: ", error);
        Swal.fire(
          "Error!",
          "Failed to fetch grafikTrend data. Please try again.",
          "error"
        );
      }
    },

    renderBranchChart() {
      const canvas = document.getElementById("branchChart");
      const ctx = canvas.getContext("2d");

      const labels = this.dataGrafik.map((item) => item.nama_cabang);
      const barWidth = 50;
      const totalWidth = labels.length * barWidth;
      canvas.style.width = `${totalWidth}px`;

      const yearlyData = this.dataGrafik.map(
        (item) => item.total_yearly_average_unit
      );
      const nineMonthData = this.dataGrafik.map(
        (item) => item.total_9_month_average_unit
      );
      const sixMonthData = this.dataGrafik.map(
        (item) => item.total_6_month_average_unit
      );
      const threeMonthData = this.dataGrafik.map(
        (item) => item.total_3_month_average_unit
      );

      const maxValue = Math.max(
        ...yearlyData,
        ...nineMonthData,
        ...sixMonthData,
        ...threeMonthData
      );
      const yAxisMax = Math.ceil(maxValue * 1.2);

      const data = {
        labels: labels,
        datasets: [
          {
            label: "Yearly Average",
            data: yearlyData,
            backgroundColor: "rgba(54, 162, 235, 0.7)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 9 Months",
            data: nineMonthData,
            backgroundColor: "rgba(255, 206, 86, 0.7)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 6 Months",
            data: sixMonthData,
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 3 Months",
            data: threeMonthData,
            backgroundColor: "rgba(153, 102, 255, 0.7)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      };

      const config = {
        type: "bar",
        data: data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
              max: yAxisMax,
            },
          },
        },
      };

      new Chart(ctx, config);
    },
    renderBrandDonutChart() {
      const canvas = document.getElementById("brandDonutChart");
      const ctx = canvas.getContext("2d");

      // Data dari API
      const labels = this.dataBrand.map((item) => item.brand_name); // Nama brand
      const values = this.dataBrand.map(
        (item) => item.total_yearly_average_unit
      );

      // Hitung total nilai
      const totalValue = values.reduce((sum, value) => sum + value, 0);

      // Hitung persentase setiap brand
      const percentages = values.map((value) =>
        ((value / totalValue) * 100).toFixed(2)
      );

      const backgroundColors = [
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 99, 132, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(201, 203, 207, 0.7)",
        "rgba(255, 159, 64, 0.7)",
      ];

      const data = {
        labels: labels,
        datasets: [
          {
            data: values, // Tetap gunakan nilai untuk data grafik
            backgroundColor: backgroundColors, // Warna segmen
            borderColor: backgroundColors.map((color) =>
              color.replace("0.7", "1")
            ), // Tepi segmen
            borderWidth: 1,
          },
        ],
      };

      const config = {
        type: "doughnut",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "right", // Legenda di sisi kanan
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const label = tooltipItem.label || "";
                  const value = tooltipItem.raw || 0;
                  const percentage = ((value / totalValue) * 100).toFixed(2); // Hitung persentase
                  return `${label}: ${percentage}% (${value.toLocaleString()})`; // Tampilkan persentase dan nilai
                },
              },
            },
          },
        },
      };
      new Chart(ctx, config);
    },

    renderItemChart() {
      const canvas = document.getElementById("itemChart");
      const ctx = canvas.getContext("2d");

      const labels = this.dataSKU.map((item) => item.item_name);
      const barWidth = 50;
      const totalWidth = labels.length * barWidth;
      canvas.style.width = `${totalWidth}px`;

      const yearlyData = this.dataSKU.map(
        (item) => item.total_yearly_average_unit
      );
      const nineMonthData = this.dataSKU.map(
        (item) => item.total_9_month_average_unit
      );
      const sixMonthData = this.dataSKU.map(
        (item) => item.total_6_month_average_unit
      );
      const threeMonthData = this.dataSKU.map(
        (item) => item.total_3_month_average_unit
      );

      const maxValue = Math.max(
        ...yearlyData,
        ...nineMonthData,
        ...sixMonthData,
        ...threeMonthData
      );
      const yAxisMax = Math.ceil(maxValue * 1.2);

      const data = {
        labels: labels,
        datasets: [
          {
            label: "Yearly Average",
            data: yearlyData,
            backgroundColor: "rgba(54, 162, 235, 0.7)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 9 Months",
            data: nineMonthData,
            backgroundColor: "rgba(255, 206, 86, 0.7)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 6 Months",
            data: sixMonthData,
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Average 3 Months",
            data: threeMonthData,
            backgroundColor: "rgba(153, 102, 255, 0.7)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      };

      const config = {
        type: "bar",
        data: data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
              max: yAxisMax,
            },
          },
        },
      };

      new Chart(ctx, config);
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  font-family: "Arial", sans-serif;
  background-color: #f4f6f8;
  color: #333333;
  padding: 20px;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 20px;
}

.dashboard-metrics {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.metric-card {
  background: linear-gradient(135deg, #76c7c0, #49a3e1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 22%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  color: #ffffff;
}

.charts-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chart-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.chart-row {
  display: flex;
  gap: 20px;
}

.chart-half {
  flex: 1;
  width: 50%;
}

.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.scroll-container canvas {
  display: inline-block;
}
</style>
