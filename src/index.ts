import { defineModule } from '@directus/extensions-sdk';
import MainView from './views/Main.vue';
import CreateTournamentView from './views/CreateTournament.vue';

export default defineModule({
	id: 'bft-admin',
	name: 'Babyfoot tournament',
	icon: 'emoji_events',
	routes: [
		{
			path: 'tournament',
			component: MainView,
			children: [
				{
					path: 'create',
					component: CreateTournamentView
				}
			]
		},
	],
});
