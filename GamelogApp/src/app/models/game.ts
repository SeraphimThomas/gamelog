import { User } from "./user";

export interface Game {
    user?: User;
    gameid?: number;
    gamename: string;
    gamesystem: string;
    playtime: number;
    dateadded?: Date;
    datechanged?: Date;
    apiid?: number;
}