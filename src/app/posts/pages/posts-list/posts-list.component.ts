import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'golf-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() posts: number[] = [1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
