import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../app.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  items: Item[] = [];
  Id: number

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Id = +params.get("id");
      this.items = this.route.snapshot.data['posts'];
    });
  }

  NavigateToNextPage() {
    this.router.navigate(['/posts/' + (this.Id + 1)]);
  }
}
