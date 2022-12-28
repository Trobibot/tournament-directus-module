import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'bft-admin',
	name: 'Babyfoot tournament',
	icon: 'emoji_events',
	routes: [
		{
			path: '',
			component: ModuleComponent
		},
	],
});
