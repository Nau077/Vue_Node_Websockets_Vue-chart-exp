<template >
<header>
	<div class="container">
	<li v-for="(item, i) in navbar" :key="i">
		<router-link :to="{path:item.router}" index="i" class="router-t">{{item.names}}</router-link>
	</li>
	</div>
</header>
</template>

<script>
export default {
	name: "Menu",
	data() {
		return {
		navbar: [
			{ names: "Tables", router: "/" },
			{ names: "Charts", router: "/chart" },
			{ names: "About", router: "/about" }
		]
		};
	}
};
</script>

<style lang="scss">
.v-application a {
  color: rgb(56, 54, 54) !important;
}
header {
	width: 100%;
	color: rgb(248, 248, 248);
	background-color: rgb(245, 239, 239);
	width: 100%;
	.container {
		display: flex;
		width: 100%;
		max-width: 200px;
		justify-content: space-around;
		margin: auto;
		height: 60px;
		align-items: center;
	}
	li {
		display: flex;
		align-items: center;
	}
	li a {
		font-weight: bold;
		text-decoration: none;
	}
	li a.router-link-exact-active {
		color: #42b983 !important;
	}
}
</style>