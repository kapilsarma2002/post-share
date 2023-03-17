import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../post'
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { PostService } from '../_services/post.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() posts: any;
  @Input() id: any;
  @Input() curComp: any;
  @Input() userPostMap: any;
  // number: number = 0;

  userName: string = '';
  userId: number = -1;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private postService: PostService
  ) {}

  async ngOnInit(): Promise<void> {
    console.log('home')
    this.userId = this.storageService.getUser();
    // console.log(this.userPostMap)

    // this.authService.getUserNameFromId(this.userId).subscribe({
    //   next: (res) => {
    //     this.userName = res;
    //     console.log(this.userName);
    //   },
    //   error: (err) => {
    //     console.log('error occured while retrieving the username from userid!');
    //     console.log(err)
    //   }
    // });

    await firstValueFrom(this.authService.getUserNameFromId(this.userId))
      .then((res) => {
        this.userName = res;
        // console.log(this.userName);
      })
      .catch((err) => {
        console.log('error')
        console.log(err)
      })

  }

  // increase() {
  //   this.number++
  // }

  toggleLike(post: IPost) {
    if(post.isLiked) {
      post.likes--;
    } else {
      post.likes++;
    }
    post.isLiked = !post.isLiked
  }

}
