/*! Copyright © 2020-2021 Cepheid. All Rights Reserved. */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { pageableSelector } from '.';
import { Pageable } from '../services/posts';
import { PostsService } from '../services/posts.service';
import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {
    constructor(
        private readonly store: Store,
        private readonly actions$: Actions,
        private readonly postsService: PostsService,
    ) { }

    public getPostsList$ = createEffect(() => combineLatest([
        this.store.select(pageableSelector),
        this.actions$.pipe(ofType(PostsActions.getPostsList)),
    ])
        .pipe(
            switchMap(([pageable]) => this.postsService.getPostsList(pageable as Pageable)
                .pipe(
                    map((posts) => PostsActions.getPostsListSuccess({ posts })),
                    catchError(({ message }) => of(PostsActions.failure({ message }))),
                ),
            ),
        ),
    );

    public failure$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(PostsActions.failure),
                tap(({ message }) => console.error(message)),
            ),
        { dispatch: false },
    );
}
