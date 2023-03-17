import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypostsRoutingModule } from './my-posts-routing.module';
import { MyPostsComponent } from './my-posts.component';


@NgModule({
  declarations: [
    // MyPostsComponent
  ],
  imports: [
    CommonModule,
    MypostsRoutingModule
  ]
})
export class MyPostsModule { }
