import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { postsReducer, PostsState } from "./posts.reducers";

export interface FeatureState {
    postsState: PostsState;
}

export const reducers: ActionReducerMap<FeatureState> = {
    postsState: postsReducer,
};


export const featureSelector = createFeatureSelector<PostsState>('posts-page');
export const postsStateSelector = createSelector(featureSelector, (state) => state);

export const postsListSelector = createSelector(postsStateSelector, (state) => state.postsList);
export const pageableSelector = createSelector(postsStateSelector, (state) => state.pageable);
export const loadingSelector = createSelector(postsStateSelector, (state) => state.loading);
export const selectedPostSelector = createSelector(postsStateSelector, (state) => state.selectedPost);