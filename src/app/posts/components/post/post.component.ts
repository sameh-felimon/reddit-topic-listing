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

  public getPostedInHours(time: any): number {
    return new Date(time).getHours();
  }

  public isValidImage(url: string | undefined) {
    return url && url != 'self' && /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

}
