import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from './../environments/environment'
import { Item } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  topPostIds: number[];
  readonly pagePerPost: number;
  constructor(private http: HttpClient) {
    this.pagePerPost = 25;
  }

  async getPosts(pageID: number = 2) {
    let postsData: Array<Item> = [];
    this.topPostIds = await this.getTopPostList().toPromise();
    let { start, end } = this.getRange(pageID);
    let postIDs = this.topPostIds.slice(start, end);
    for (let idx = 0; idx < postIDs.length; idx++) {
      let data: Item = await this.getPostData(postIDs[idx]).toPromise();
      data.postId = idx + 1;
      postsData.push(data);
    }
    return postsData;
  }

  getTopPostList(): Observable<number[]> {
    return this.http.get<number[]>(ENDPOINTS.baseUrl + ENDPOINTS.topStories);
  }

  getPostData(postId: number): Observable<Item> {
    return this.http.get<Item>(ENDPOINTS.baseUrl + ENDPOINTS.item + postId + '.json');
  }

  private getRange(pageID: number) {
    let start = this.pagePerPost * (pageID - 1);
    let end = this.topPostIds.length < this.pagePerPost * (pageID) ? this.topPostIds.length : this.pagePerPost * (pageID);
    return { start, end };
  }
}
