import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/home.vue'
import Audio from '../pages/Audio/audio.vue'
import Broadcast from '../pages/Broadcast/broadcast.vue'
import Group from '../pages/Group/group.vue'
import Mine from '../pages/Mine/mine.vue'
import Login from '../pages/login/login-phone.vue'
import LoginSea from '../pages/login/login-sea.vue'

import Flem from '../components/audio/film.vue'
import City from '../components/audio/city.vue'
import Music from '../components/audio/music.vue'
import Ready from '../components/audio/ready.vue'
import Tv from '../components/audio/tv.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/home',
			name: 'Home1',
			component: Home //模块这个不需要使用引号
		},
		{
			path: '/audio',
			name: 'audio1',
			component: Audio,
			children: [
				{
					path: 'film',
					name: 'Flem',
					component: Flem
				},
				{
					path: 'city',
					name: 'City',
					component: City
				},
				{
					path: 'music',
					name: 'Music',
					component: Music
				},
				{
					path: 'ready',
					name: 'Ready',
					component: Ready
				},
				{
					path: 'tv',
					name: 'Tv',
					component: Tv
				},
			]
		},
		{
			path: '/broadcast',
			name: 'Broadcast1',
			component: Broadcast
		},
		{
			path: '/group',
			name: 'Group1',
			component: Group
		},
		{
			path: '/mine',
			name: 'Mine1',
			component: Mine
		},
		{
			path: '/login',
			name: 'Login1',
			component: Login
		},
		{
			path: '/loginSea',
			name: 'LoginSea1',
			component: LoginSea
		},



	]
})
