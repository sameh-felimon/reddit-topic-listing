import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RedditPostData } from '../../models/posts';
import * as Utils from 'src/app/shared/utils/utils';

@Component({
  selector: 'golf-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  public post: RedditPostData | undefined;

  @Output()
  public selectPostEvent = new EventEmitter<string>();

  public utils = Utils;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public getPostDetails(id: string | undefined): void {
    this.selectPostEvent.emit(id);
    this.router.navigate(['post', id,]);
  }

}
