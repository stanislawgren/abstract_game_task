
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    games(): Game[] | Promise<Game[]>;
    game_participants(): GameParticipant[] | Promise<GameParticipant[]>;
    game_players(): GamePlayer[] | Promise<GamePlayer[]>;
    game(id: string): Game | Promise<Game>;
    players(): Player[] | Promise<Player[]>;
    player(id: string): Player | Promise<Player>;
    player_games(id: string): PlayerGames | Promise<PlayerGames>;
    teams(): TeamPlayers[] | Promise<TeamPlayers[]>;
    team(id: string): TeamPlayers | Promise<TeamPlayers>;
}

export interface Game {
    ID_game: number;
    date: Date;
    location: string;
    time: string;
    game_teams: GameParticipant[];
}

export interface GameParticipant {
    ID_participation: number;
    ID_game: number;
    ID_team: number;
    team: TeamGame;
    players: GamePlayer[];
}

export interface GamePlayer {
    ID_game_player: number;
    ID_player: number;
    ID_game: number;
    ID_team: number;
    player: Player;
}

export interface GameWithTeam {
    ID_game: number;
    date: Date;
    location: string;
    time: string;
    team: Team;
}

export interface GameDetails {
    ID_game: number;
    date: Date;
    location: string;
    time: string;
}

export interface GamePlayerDetails {
    ID_game_player: number;
    ID_player: number;
    ID_game: number;
    ID_team: number;
    game: GameDetails;
    team: Team;
}

export interface PlayerGames {
    ID_player: number;
    first_name: string;
    last_name: string;
    number: number;
    ID_team: number;
    games: GamePlayerDetails[];
}

export interface Player {
    ID_player: number;
    first_name: string;
    last_name: string;
    number: number;
    ID_team: number;
    team: Team;
}

export interface TeamPlayers {
    ID_team: number;
    name: string;
    players?: Nullable<Nullable<Player>[]>;
}

export interface TeamGame {
    ID_team: number;
    name: string;
    players: GamePlayer[];
}

export interface Team {
    ID_team: number;
    name: string;
}

type Nullable<T> = T | null;
