import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pageable } from '../../services/posts';
import { pageableLimitSelector, pageableSelector, postsListSelector } from '../../state';
import { changePageable, getPostsList } from '../../state/posts.actions';

@Component({
  selector: 'golf-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts$ = this.store.select(postsListSelector);
  public pageSize$ = this.store.select(pageableLimitSelector)
  public pageable$ = this.store.select(pageableSelector);

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getPostsList());
  }

  public changePageable(pageable: Pageable): void {
    this.store.dispatch(changePageable({ pageable }));
  }
}
