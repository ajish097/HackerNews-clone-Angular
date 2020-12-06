import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from './../environments/environment'
import { item } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  topPostIds: number[]
  constructor(private http: HttpClient) { 

  }

  getTopPosts(): Observable<number[]> {
    return this.http.get<number[]>(ENDPOINTS.baseUrl + ENDPOINTS.topStories);
  }

  getPostData(postId: number): Observable<item> {
    return this.http.get<item>(ENDPOINTS.baseUrl+ ENDPOINTS.item + postId + '.json');
  }
}
