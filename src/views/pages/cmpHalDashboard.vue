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
    </section>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import axios from "axios";

export default {
  data() {
    return {
      metrics: [
        { title: "Jumlah SKU", value: "1992", note: null },
        { title: "Average 3 Bulan", value: "29", note: null },
        { title: "Average 6 Bulan", value: "3", note: "0.15%" },
        { title: "Average 9 Bulan", value: "0", note: "0%" },
      ],
      dataGrafik: [],
    };
  },
  mounted() {
    this.getGrafik();
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
    renderBranchChart() {
      const canvas = document.getElementById("branchChart");
      const ctx = canvas.getContext("2d");

      // Hitung lebar dinamis berdasarkan jumlah data
      const labels = this.dataGrafik.map((item) => item.nama_cabang);
      const barWidth = 50; // Lebar setiap bar dalam px
      const totalWidth = labels.length * barWidth; // Total lebar chart
      canvas.style.width = `${totalWidth}px`; // Atur lebar canvas secara dinamis

      // Data untuk setiap kategori
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
              max: yAxisMax, // Set nilai maksimum skala Y
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

.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.scroll-container canvas {
  display: inline-block;
}
</style>
