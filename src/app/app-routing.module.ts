import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { PostsResolver } from './posts/posts-resolver.service';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'comments', component: CommentSectionComponent },
  { path: '', component: PostsComponent, resolve: { 'posts': PostsResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
