import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable, RedditDto } from './posts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private redditUrl = environment.RedditUrl;
  constructor(private readonly httpClient: HttpClient) {

  }

  public getPostsList(pageable?: Pageable): Observable<RedditDto> {
    let url = this.redditUrl;

    if (pageable?.limit) {
      url += `?limit=${pageable?.limit}`;
    }

    return this.httpClient.get<RedditDto>(url);
  }

}
