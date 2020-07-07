<template>
	<section class="chart">
		<div class="container" v-if="tableData">
		<Todo :tableData="tableData" @sendSocket="sendSocket" />
		<template>
			<v-card class="mx-auto" max-width="544">
			<v-card-text class="card-prime">
				<div>Describe</div>
				<div class="text--primary">
				If you edit data above
				<br />You will see changes bellow happend by websockets
				</div>
			</v-card-text>
			<v-card-text class="card-prime">
				<div>Описание</div>
				<div class="text--primary">
				Если измените данные в таблице выше
				<br />То вы увидите, как поменяются данные в таблице ниже посредством соединения websockets
				</div>
			</v-card-text>
			</v-card>
		</template>
		<v-simple-table v-if="dataTable.length" class="simple-border">
			<template v-slot:default>
			<thead>
				<tr>
				<th class="text-left">Name</th>
				<th class="text-left">Calories</th>
				<th class="text-left">Carbs</th>
				<th class="text-left">Fat</th>
				<th class="text-left">Protein</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in dataTable.flat()" :key="item.name">
				<td class="text-start">{{ item.name }}</td>
				<td class="text-start">{{ item.calories }}</td>
				<td class="text-start">{{ item.carbs }}</td>
				<td class="text-start">{{ item.fat}}</td>
				<td class="text-start">{{ item.protein}}</td>
				</tr>
			</tbody>
			</template>
		</v-simple-table>
		</div>
	</section>
</template>

<script>
import Todo from "@/components/table/Todo";

export default {
  name: "Tables",
  components: {
    Todo
  },
  data() {
	  return {
		dataTable: []
	  }
  },
  computed: {
    tableData() {
      const data = this.$store.state.dataTable
        .flat()
        .map(item => ({ ...item }));
      return data;
    }
  },
  created() {
	  this.$socket.emit('getData')
  },
  mounted() {
    this.$socket.on('setDataTable', (data => {
       this.dataTable = data
    }))
  },
  methods: {
    sendSocket(data) {
      const payload = {
        data
      };
      this.$store.dispatch("dataChange", payload);
    }
  }
};
</script>
<style scoped scoped lang="scss">
.text-start {
  text-align: start;
}
.simple-border {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;
}

.card-prime {
  margin: 35px 0 35px 0;
}
</style>