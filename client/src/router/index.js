import Vue from 'vue'
import VueRouter from 'vue-router'
import TableSocket from '@/pages/TableSocket'
import Chart from '@/pages/Chart'
import About from '@/pages/About'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'TableSocket',
		component: TableSocket
	},
	{
		path: '/Chart',
		name: 'Charts',
		component: Chart
	},
	{
		path: '/About',
		name: 'About',
		component: About
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
