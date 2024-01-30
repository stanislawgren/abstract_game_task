
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    games(): Game[] | Promise<Game[]>;
    players(): Player[] | Promise<Player[]>;
    player(id: string): Player | Promise<Player>;
    teams(): Team[] | Promise<Team[]>;
    team(id: string): Team | Promise<Team>;
}

export interface Game {
    ID_game: number;
    date: Date;
    location: string;
    time: string;
}

export interface Player {
    ID_player: number;
    first_name: string;
    last_name: string;
    number: number;
    ID_team: number;
}

export interface Team {
    ID_team: number;
    name: string;
    players?: Nullable<Nullable<Player>[]>;
}

type Nullable<T> = T | null;
