import { createAction, props } from '@ngrx/store';
import { Pageable, RedditDto } from '../services/posts';

export const getPostsList = createAction('[Posts] Get posts');

export const getPostsListSuccess = createAction(
    '[Posts] Get posts success',
    props<{ posts: RedditDto }>(),
);

export const changePageable = createAction('[Posts] Change pageable', props<{ pageable: Pageable }>());

export const failure = createAction('[Posts] Failure', props<{ message: string }>());

