import { Component, Input } from '@angular/core';
import { Goal } from './goal.model';
import { Player } from './players.model';
import { PlayersService } from './players.service';

@Component({
    moduleId: module.id,
    selector: 'ugi-goals',
    templateUrl: 'goal.component.html',
    providers: [PlayersService]
})
export class GoalsComponent {

    goals: Goal[];
    _player: Player;

    @Input()
    set player(player: Player) {
        this._player = player;
        if (this._player) {
            this.loadGoals();
        }
    };
    get player() { return this._player; }

    constructor(private playersService: PlayersService) {

    }

    loadGoals() {
        this.playersService.searchGoals(this._player.id)
            .subscribe(goals => this.goals = goals);
    }

}
