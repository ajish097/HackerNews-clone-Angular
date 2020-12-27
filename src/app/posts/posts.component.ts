import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  name: string
  items: Item[] = [];

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = this.route.snapshot.data['posts'];
  }
}
