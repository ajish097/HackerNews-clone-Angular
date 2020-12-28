import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentSectionResolver } from './comment-section/comment-section-resolver.service';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { PostsResolver } from './posts/posts-resolver.service';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'comments/:id', component: CommentSectionComponent, resolve: { 'comments': CommentSectionResolver } },
  { path: 'posts/:id', component: PostsComponent, resolve: { 'posts': PostsResolver } },
  { path: '**', redirectTo: 'posts/1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
