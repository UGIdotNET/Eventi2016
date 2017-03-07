import { Component } from '@angular/core';
import { Player } from './players.model';
import { GoalsComponent } from './goal.component';
import { PlayersService } from './players.service';

@Component({
    moduleId: module.id,
    selector: 'ugi-players',
    templateUrl: 'players.component.html',
    directives: [GoalsComponent],
    providers: [PlayersService]
})
export class PlayersComponent {
    playerList: Player[];
    currentPlayer: Player;
    searchText: string;

    constructor(private playersService: PlayersService) {
       /* this.playerList = [
            { id: 1, name: 'Player 1' },
            { id: 2, name: 'Player 2' },
            { id: 3, name: 'Player 3' },
        ];*/
    }

    searchPlayer() {
        console.log('Search ' + this.searchText);

        this.playersService.searchPlayers(this.searchText)
            .subscribe(players => this.playerList = players);
    }

    selectPlayer(player: Player) {
        this.currentPlayer = player;
        console.log(player);
    }
}
