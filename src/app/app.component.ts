import { Component } from '@angular/core';
import { item } from './app.model';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string
  items: item[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.items = [];
    // this.items.push({
    //   by: 'mvgoogler',
    //   descendants: 4,
    //   id: 12345,
    //   kids: [1,2,3,4],
    //   score: 123,
    //   time: 1175714200,
    //   title: "My YC app: Dropbox - Throw away your USB drive",
    //   type: "story",
    //   url: "http://www.getdropbox.com/u/2/screencast.html"
    // });

    // this.items.push({
    //     by: 'mvgoogler',
    //     descendants: 4,
    //     id: 12345,
    //     kids: [1,2,3,4],
    //     score: 123,
    //     time: 1175714200,
    //     title: "My YC app: Dropbox - Throw away your USB drive",
    //     type: "story",
    //     url: "http://www.getdropbox.com/u/2/screencast.html"
    // });


    this.appService.getTopPosts().subscribe((postIds: number[]) => {
      let newPostIds: number[];
      newPostIds = [];
      for(let i=0; i< 5; i++) {
        newPostIds.push(postIds[i]);
      }
      newPostIds.forEach(postId => {
        this.appService.getPostData(postId).subscribe((data: item) => {
          this.items.push(data);
        });
      });
    });
  }
}
