import { votes } from "./votes";

export interface Comment {
    id: number;
    parentId: number;
    rootId: number;
    message: string;
    totalvote: number;
    dateTime: Date;
    userName: string;
    votes: votes[]
    comments: Comment[]
}