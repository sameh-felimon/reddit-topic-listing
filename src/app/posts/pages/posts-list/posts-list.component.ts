import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postsListSelector } from '../../state';
import { getPostsList } from '../../state/posts.actions';

@Component({
  selector: 'golf-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts$ = this.store.select(postsListSelector);

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getPostsList());
  }

}
