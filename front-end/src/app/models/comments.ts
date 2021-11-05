export interface comment{
    id: number;
    message: string;
    totalVote: number;
    date: Date;
    username: string;
    rootId: number;
    commentId?: number;
}