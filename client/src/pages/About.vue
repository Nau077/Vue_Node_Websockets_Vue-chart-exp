<template>
	<section class="about">
		<template>
			<v-card class="mx-auto" max-width="644">
			<v-card-text class="card-prime">
				<div>Table</div>
				<div class="text--primary">
				If you edit data at table page
				<br />You will see table changes happend by websockets
				</div>
				<div>Chart</div>
				<div class="text--primary">
				Если поменяете данные на странице таблицы
				<br /> Увидите данные измененные посредством websockets
				</div>
			</v-card-text>
			<v-card-text class="card-prime">
				<div>Chart js</div>
				<div class="text--primary">
				On page "charts you can see how can vue works with different charts"
				<br />The first chart data are gotten by websockets
				</div>
			</v-card-text>
			<v-card-text class="card-prime">
				<div>Chart js</div>
				<div class="text--primary">
				На странице chart вы можете увидеть, как vue умеет с графиками
				<br /> Данные первого графика получены через websockets
				</div>
			</v-card-text>
			</v-card>
		</template>
	</section>
</template>

<script>
export default {
	name: 'About'
}
</script>
<style scoped scoped lang="scss">
section.about {
	margin-top: 50px;
}
.v-card__text {
	padding: 45px;
	text-align: left;
}
.v-card__text {
	font-size: 20px;
}
</style>