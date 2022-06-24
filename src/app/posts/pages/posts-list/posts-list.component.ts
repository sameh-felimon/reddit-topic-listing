import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pageable } from '../../models/posts';
import { loadingSelector, pageableLimitSelector, pageableSelector, postsListSelector } from '../../state';
import { changePageable, getPostsList, selectPost } from '../../state/posts.actions';

@Component({
  selector: 'golf-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts$ = this.store.select(postsListSelector);
  public pageSize$ = this.store.select(pageableLimitSelector)
  public pageable$ = this.store.select(pageableSelector);
  public isLoading$ = this.store.select(loadingSelector);

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getPostsList());
  }

  public changePageable(pageable: Pageable): void {
    this.store.dispatch(changePageable({ pageable }));
  }

  public selectPostClick(id: string): void {
    this.store.dispatch(selectPost({ id }));
  }
}
