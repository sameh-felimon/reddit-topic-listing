import { Component, Input, OnInit } from '@angular/core';
import { RedditPostData } from '../../services/posts';

@Component({
  selector: 'golf-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: RedditPostData | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
