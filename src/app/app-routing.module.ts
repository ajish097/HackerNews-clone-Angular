import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'comments', component: CommentSectionComponent },
  { path: '', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
