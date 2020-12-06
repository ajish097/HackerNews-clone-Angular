import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { PostsComponent } from './posts/posts.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostsComponent,
    CommentSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
