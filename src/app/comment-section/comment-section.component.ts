import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  constructor(private appservice: AppService, private route: ActivatedRoute) { }
  Id: string;
  comments: Array<Item> = []
  commentsTree: Item
  commentsTreeArray: Array<Item> = []
  parentId: number;
  ngOnInit(): void {
    this.comments = this.route.snapshot.data['comments'];
    this.route.paramMap.subscribe(params => {
      this.Id = params.get("id");
      this.commentsTree = { id: parseInt(this.Id) } as Item;
    })
  }

  ngDoCheck() {
    this.appservice.prepareCommentData(this.comments, this.commentsTree);
    this.commentsTreeArray = this.commentsTree.comments;
  }
}
