<template>
<section class="chart" v-if="chartData.labels" >
	<AreaChart :chartData="chartData"/>
	<PieChart />
	<BarChart />
	<RadarChart />
	<LineChart />
</section>
</template>

<script>
import AreaChart from "@/components/chart/AreaChart.vue";
import PieChart from "@/components/chart/PieChart.vue";
import BarChart from "@/components/chart/BarChart.vue";
import RadarChart from "@/components/chart/RadarChart.vue";
import LineChart from "@/components/chart/LineChart.vue";

export default {
  name: "Chart",
  components: {
    AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart
  },
  computed: {
    chartData() {
      return this.$store.state.dataChart;
    }
  }
};
</script>
<style scoped scoped lang="scss">
section {
  padding: 15px;
  div {
    margin-top: 50px;
  }
}
</style>