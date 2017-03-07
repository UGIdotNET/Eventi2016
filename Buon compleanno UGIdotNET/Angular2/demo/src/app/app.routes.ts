import { provideRouter, RouterConfig } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { MatchComponent } from './match/match.component';

const routes: RouterConfig = [
    { path: '', component: MatchComponent },
    { path: 'match', component: MatchComponent },
    { path: 'players', component: PlayersComponent }
    //{ path: 'hero/:id', component: HeroDetailComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
