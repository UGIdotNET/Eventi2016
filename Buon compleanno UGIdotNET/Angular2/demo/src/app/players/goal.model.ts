/**
 * Goal definition
 */
export class Goal {
    id: number;
    match_id: number;
    minute: number;
    is_penalty: boolean;
    is_own_goal: boolean;
    player: string;
    player_id: number;
    team: string;
    team_id: number;
    match_date: string;
    league: string;
    competition: string;
    home_team: string;
    away_team: string;
    home_goal: number;
    away_goal: number;
}
