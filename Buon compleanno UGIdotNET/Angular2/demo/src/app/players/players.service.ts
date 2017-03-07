import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {

    baseUrl: string = 'https://microsoft-apiapp7c8e37f824f94d14b9d149721c7c6c8e.azurewebsites.net/api/';

    constructor(private http: Http) { }

    searchPlayers(name: string) {
        return this.http.get(this.baseUrl + 'players/search/' + name)
            .map((res: Response) => res.json());
    }

    searchGoals(playerId: number) {
        return this.http.get(this.baseUrl + 'players/goals/' + playerId)
            .map((res: Response) => res.json());
    }
}
