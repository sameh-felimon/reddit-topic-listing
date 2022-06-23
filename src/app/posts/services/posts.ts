import { Time } from "@angular/common";

export interface RedditDto {
    kind: string;
    data: RedditResponse;
}


export interface RedditResponse {
    after: string;
    before: string;
    dist: number;
    children: RedditPostData[];
    modhash: string;
}

export interface RedditPostData {
    kind: RedditResponseTypes;
    data: RedditPostDataProperties;
}

export interface RedditPostDataProperties {
    thumbnail: string;
    created: Time;
    num_comments: number;
    author: string;
    score: number;
    title: string;
}

export enum RedditResponseTypes {
    t1 = 'Comment',
    t2 = 'Account',
    t3 = 'Link',
    t4 = 'Message',
    t5 = 'Subreddit',
    t6 = 'Award',
}

export interface Pageable {
    limit?: number;
    before?: string | null;
    after?: string | null;
    isNext?: boolean | null;
}