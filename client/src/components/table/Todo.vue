<template>
<v-data-table
	:headers="headers"
	:items="desserts"
	sort-by="calories"
	:footer-props="{'items-per-page-options':[]}"
	class="elevation-1"
>
	<template v-slot:top>
	<v-toolbar flat color="white">
		<v-toolbar-title>Edit data with web-sockets</v-toolbar-title>
		<v-divider class="mx-4" inset vertical></v-divider>
		<v-spacer></v-spacer>
		<v-dialog v-model="dialog" max-width="500px">
		<v-card>
			<v-card-title>
			<span class="headline">{{ formTitle }}</span>
			</v-card-title>
			<v-card-text>
			<v-container>
				<v-row>
				<v-col cols="12" sm="6" md="4">
					<v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
				</v-col>
				</v-row>
			</v-container>
			</v-card-text>
			<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
			<v-btn color="blue darken-1" text @click="save">Save</v-btn>
			</v-card-actions>
		</v-card>
		</v-dialog>
	</v-toolbar>
	</template>
	<template v-slot:item.actions="{ item }">
	<v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
	</template>
	<template v-slot:no-data>
	<v-btn color="primary" @click="initialize">Reset</v-btn>
	</template>
</v-data-table>
</template>

<script>
export default {
  name: "Todo",
  props: ["tableData"],
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      desserts: JSON.parse(JSON.stringify(this.tableData)),
      editedIndex: -1,
      editedItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    tableData: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      // eslint-disable-next-line
      handler(val, oldVal) {
        this.initialize();
      }
    }
  },
  methods: {
    initialize() {
      this.desserts = this.tableData;
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.$emit("sendSocket", this.desserts);
      this.close();
    }
  }
};
</script>

<style lang="scss">
.v-data-footer {
  display: none !important;
}
</style>