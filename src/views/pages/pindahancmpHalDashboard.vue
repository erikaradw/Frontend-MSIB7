<template>
    <div class="dashboard">
      <h1 class="dashboard-title">Dashboard</h1>
  
      <div class="filters">
        <select v-model="selectedPeriod" @change="updateChartData">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
          <option value="year">This Year</option>
        </select>
        <label>
          <input
            type="checkbox"
            v-model="showYearComparison"
            @change="updateChartData"
          />
          Compare with Last Year
        </label>
      </div>
  
      <h2>Sales Trends</h2>
      <div class="chart-container">
        <apexchart
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
  
      <div class="stats-container">
        <div v-for="(stat, index) in stats" :key="index" class="stat-box">
          <div class="stat-icon" v-html="stat.icon"></div>
          <h3>{{ stat.title }}</h3>
          <p class="stat-value">{{ stat.value }}</p>
          <p :class="['stat-change', stat.change >= 0 ? 'positive' : 'negative']">
            {{ stat.change >= 0 ? "↑" : "↓" }} {{ Math.abs(stat.change) }}% vs.
            previous month
          </p>
          <apexchart
            type="line"
            height="50"
            :options="sparklineOptions(stat.sparklineColor)"
            :series="[{ data: stat.sparklineData }]"
          ></apexchart>
        </div>
      </div>
  
      <div class="last-orders">
        <h3>Last Orders <span class="see-all">See All</span></h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in lastOrders" :key="order.id">
              <td>
                <!-- <img :src="order.avatar" :alt="order.name" class="avatar" /> -->
                {{ order.name }}
              </td>
              <td>{{ order.date }}</td>
              <td>{{ order.amount }}</td>
              <td :class="order.status.toLowerCase()">{{ order.status }}</td>
              <td><a href="#" class="view-invoice">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div class="top-products">
        <h3>Top Selling Products</h3>
        <apexchart
          type="bar"
          height="300"
          :options="topProductsChartOptions"
          :series="topProductsSeries"
        ></apexchart>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import VueApexCharts from "vue3-apexcharts";
  
  export default defineComponent({
    name: "ComprehensiveSalesDashboard",
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        selectedPeriod: "month",
        showYearComparison: false,
        series: [
          {
            name: "Sales",
            data: [
              5000, 20000, 2000, 25000, 8000, 42000, 7000, 22000, 31000, 2000,
              28000, 25000,
            ],
          },
        ],
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            background: "#ffffff",
            foreColor: "#333333",
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          yaxis: {
            title: {
              text: "Sales",
              style: {
                color: "#333333",
              },
            },
          },
          grid: {
            borderColor: "#e0e0e0",
          },
          fill: {
            colors: ["#7FE5D9"],
          },
          title: {
            text: "Sales Trends",
            align: "left",
            style: {
              color: "#333333",
            },
          },
        },
        stats: [
          {
            title: "Total Order",
            value: "350",
            change: 23.5,
            sparklineData: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            sparklineColor: "#7FE5D9",
            icon: "<svg>...</svg>",
          },
          {
            title: "Total Refund",
            value: "270",
            change: -23.5,
            sparklineData: [50, 40, 60, 30, 45, 55, 40, 30, 35],
            sparklineColor: "#FF6B6B",
            icon: "<svg>...</svg>",
          },
          {
            title: "Average Sales",
            value: "1567",
            change: -23.5,
            sparklineData: [40, 30, 50, 40, 60, 50, 70, 60, 55],
            sparklineColor: "#FF6B6B",
            icon: "<svg>...</svg>",
          },
          {
            title: "Total Income",
            value: "$350.000",
            change: 23.5,
            sparklineData: [30, 40, 45, 50, 55, 60, 65, 70, 75],
            sparklineColor: "#7FE5D9",
            icon: "<svg>...</svg>",
          },
        ],
        lastOrders: [
          {
            id: 1,
            name: "Marcus Bergson",
            date: "Nov 15, 2023",
            amount: "$80,000",
            status: "Paid",
          },
          {
            id: 2,
            name: "Jaydon Vaccaro",
            date: "Nov 15, 2023",
            amount: "$150,000",
            status: "Refund",
          },
          {
            id: 3,
            name: "Corey Schleifer",
            date: "Nov 14, 2023",
            amount: "$87,000",
            status: "Paid",
          },
        ],
        topProductsSeries: [
          {
            name: "Sales",
            data: [44000, 55000, 41000, 67000, 22000],
          },
        ],
        topProductsChartOptions: {
          chart: {
            type: "bar",
            height: 300,
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: [
              "Product A",
              "Product B",
              "Product C",
              "Product D",
              "Product E",
            ],
          },
          title: {
            text: "Top Selling Products",
            align: "center",
          },
        },
      };
    },
    methods: {
      updateChartData() {
        this.fetchSalesData(this.selectedPeriod, this.showYearComparison).then(
          (data) => {
            this.series = data.series;
            this.chartOptions = {
              ...this.chartOptions,
              xaxis: {
                categories: data.categories,
              },
            };
          }
        );
      },
      fetchSalesData(period, compareWithLastYear) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const currentYearData = Array(12)
              .fill(0)
              .map(() => Math.floor(Math.random() * 50000) + 10000);
            const lastYearData = Array(12)
              .fill(0)
              .map(() => Math.floor(Math.random() * 50000) + 10000);
  
            const series = [
              {
                name: "This Year",
                data: currentYearData,
              },
            ];
  
            if (compareWithLastYear) {
              series.push({
                name: "Last Year",
                data: lastYearData,
              });
            }
  
            resolve({
              series,
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            });
          }, 500);
        });
      },
      sparklineOptions(color) {
        return {
          chart: {
            type: "line",
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          colors: [color],
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            marker: {
              show: false,
            },
          },
        };
      },
    },
  });
  </script>
  
  <style scoped>
  .dashboard {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #ffffff;
  }
  .dashboard-title {
    font-size: 28px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
  }
  .filters {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .filters select,
  .filters label {
    font-size: 14px;
  }
  .chart-container {
    margin-bottom: 30px;
  }
  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }
  .stat-box {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .stat-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
  .stat-value {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }
  .stat-change {
    font-size: 14px;
    padding: 2px 8px;
    border-radius: 12px;
    display: inline-block;
  }
  .positive {
    background-color: rgba(127, 229, 217, 0.2);
    color: #4caf50;
  }
  .negative {
    background-color: rgba(255, 107, 107, 0.2);
    color: #f44336;
  }
  .last-orders {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .last-orders h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .see-all {
    color: #7fe5d9;
    font-size: 14px;
    cursor: pointer;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #e0e0e0;
  }
  th {
    color: #666;
    font-weight: normal;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }
  .paid {
    color: #4caf50;
  }
  .refund {
    color: #f44336;
  }
  .view-invoice {
    color: #7fe5d9;
    text-decoration: none;
  }
  .top-products {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  </style>