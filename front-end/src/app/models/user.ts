import { Followings } from "./Followings";

export interface User {
    id?: number;
    email?: string;
    name?: string;
    username: string;
    followings?: Followings[];
}