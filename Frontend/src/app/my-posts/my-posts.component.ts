import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPost } from 'src/post';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})

export class MyPostsComponent implements OnInit {

  @Input() posts: any;
  @Input() id: any;
  @Input() userPostMap: any;
  MyPosts: IPost[] = [];

  constructor(
    private storageService: StorageService
  ) {}

  async ngOnInit(): Promise<void> {
    console.log('posts is ')
    console.log(this.posts)
    console.log(this.id)
    this.posts.map((post: any) => {
     if (post.authorID === this.id) {
      this.MyPosts.push(post);
     }
    })
    console.log('myposts is')
    console.log(this.MyPosts)
  }

  toggleLike(post: IPost) {
    if(post.isLiked) {
      post.likes--;
    } else {
      post.likes++;
    }
    post.isLiked = !post.isLiked
  }
}
