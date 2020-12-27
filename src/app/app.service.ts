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
  comments: Array<Item> = [];
  constructor(private http: HttpClient) {
    this.pagePerPost = 20;
  }

  async getPosts(pageID: number = 1) {
    let postsData: Array<Item> = [];
    let getPostsPromiseArray: Array<Promise<Item>> = [];
    this.topPostIds = await this.getTopPostList().toPromise();
    let { start, end } = this.getRange(pageID);
    let postIDs = this.topPostIds.slice(start, end);
    postIDs.forEach((postID) => {
      getPostsPromiseArray.push(this.getPostData(postID).toPromise());
    });

    Promise.all(getPostsPromiseArray)
      .then((response: Item[]) => {
        response.forEach((post: Item, idx: number) => {
          post.postId = idx + 1;
          postsData.push(post);
        })
      })
      .catch((error) => {
        console.log(error);
      });
    return postsData;
  }

  getTopPostList(): Observable<number[]> {
    return this.http.get<number[]>(ENDPOINTS.baseUrl + ENDPOINTS.topStories);
  }

  getPostData(postId: number): Observable<Item> {
    return this.http.get<Item>(ENDPOINTS.baseUrl + ENDPOINTS.item + postId + '.json');
  }

  async getComments(Id: number) {
    await this.makeCall(this.comments, [Id])
    return this.comments;
  }

  private getRange(pageID: number) {
    let start = this.pagePerPost * (pageID - 1);
    let end = this.topPostIds.length < this.pagePerPost * (pageID) ? this.topPostIds.length : this.pagePerPost * (pageID);
    return { start, end };
  }

  async makeCall(comments: Array<Item>, list: number[]) {

    if (list && list.length == 0)
      return;

    for (let i = 0; i < list?.length; i++) {
      let response = await this.getPostData(list[i]).toPromise()
      comments.push(response); 
      this.makeCall(comments, response?.kids);
    }
  }

  prepareCommentData(comments: Array<Item>, commentsTree: Item) {
    let childComments = this.comments.filter((comment: Item) => {
      return comment?.parent === commentsTree.id
    })
    if (!childComments)
      return
    commentsTree.comments = childComments;
    for (let i = 0; i < commentsTree.comments.length; i++) {
      this.prepareCommentData(comments, commentsTree.comments[i]);
    }
  }

}
