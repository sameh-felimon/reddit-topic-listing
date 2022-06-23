import { createReducer, on } from "@ngrx/store";
import { Pageable, RedditDto } from "../services/posts";
import * as PostsActions from './posts.actions';

export interface PostsState {
    postsList?: RedditDto;
    pageable: Pageable;
    loading: boolean;
    selectedPost?: string;
}

const initialState: PostsState = {
    postsList: undefined,
    pageable: { limit: 25, before: null, after: null },
    loading: false,
    selectedPost: undefined,
};

export const postsReducer = createReducer(
    initialState,

    on(
        PostsActions.getPostsList,
        (state) => ({
            ...state,
            loading: true,
        }),
    ),

    on(
        PostsActions.changePageable,
        (state, { pageable }) => ({
            ...state,
            pageable: {
                ...state.pageable,
                ...pageable
            },
            loading: true,
        }),
    ),

    on(
        PostsActions.getPostsListSuccess,
        (state, { posts }) => ({
            ...state,
            postsList: posts,
            loading: false,
        }),
    ),
);
