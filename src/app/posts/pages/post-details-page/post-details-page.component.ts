import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedPostSelector } from '../../state';

@Component({
  selector: 'golf-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.scss']
})
export class PostDetailsPageComponent implements OnInit {
  public postDetails$ = this.store.select(selectedPostSelector)
  
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

}
