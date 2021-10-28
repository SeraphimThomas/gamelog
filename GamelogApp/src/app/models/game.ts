
export interface Game {
    userid: number;
    gameid: number;
    gamename: string;
    gamesystem: string;
    playtime?: number;
    dateadded: Date;
    datachanged: Date;
}