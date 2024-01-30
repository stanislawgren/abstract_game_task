
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    players(): Player[] | Promise<Player[]>;
    teams(): Team[] | Promise<Team[]>;
}

export interface Player {
    ID_player: string;
    first_name: string;
    last_name: string;
    number: number;
    ID_team: string;
}

export interface Team {
    ID_team: string;
    name: string;
}

type Nullable<T> = T | null;
