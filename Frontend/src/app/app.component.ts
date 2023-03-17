import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/post';
import { AuthService } from './_services/auth.service';
import { StorageService } from './_services/storage.service';
import { PostService } from './_services/post.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  Title: string = 'No Title';
  id: number = -1;
  isLoggedIn: boolean = true;
  Posts: any = [];
  userPostMap: any = new Map();
  curComp: string = '';
  userName: string = '';

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private authService: AuthService,
    private postService: PostService
  ) {}

  async ngOnInit(): Promise<void> {
    this.id = await this.storageService.getUser();
    await firstValueFrom(this.authService.getUserNameFromId(this.id))
      .then((res) => {
        console.log('res is : ')
        this.userName = res
        console.log(res)
      })
      .catch((err) => {
        console.log('error is : ')
        console.log(err)
      })
    // await this.authService.getUserNameFromId(this.id).subscribe({
    //   next: (res) => {
    //     console.log('response is : ')
    //     console.log(res)
    //   },
    //   error: (err) => {
    //     console.log('error is : ')
    //     console.log(err)
    //   }
    // })
    this.curComp = 'home';

    await firstValueFrom(this.postService.getPosts())
      .then((res) => {
        this.Posts = res;
        // console.log(this.Posts);
      })
      .catch((err) => {
        console.log('error in retrieving posts');
        console.log(err)
      })
    
    // this.postService.getPosts().subscribe({
    //   next: (res) => {
    //     this.Posts = res;
    //     console.log(this.Posts)
    //   },
    //   error: (err) => {
    //     console.log('error in retrieving posts');
    //     console.log(err)
    //   }
    // });

    this.Posts.sort((a: IPost,b: IPost) => {
      let x: any = new Date(a.createdAt);
      let y: any = new Date(b.createdAt);
      return y - x;
    });
    console.log(this.Posts.length)
    this.Posts.map((val: any) => {
      // await this.authService.getUserNameFromId(val.authorID).subscribe({
      //   next: (res: string) => {
      //     this.userPostMap.set(val.postID, res)
      //     console.log('map is ' , this.userPostMap)
      //   },
      //   error: (err) => {
      //     console.error(err)
      //   }
      // })

      firstValueFrom(this.authService.getUserNameFromId(val.authorID))
      .then((res) => {
        this.userPostMap.set(val.postID, res)
        // console.log('map is')
        // console.log(this.userPostMap)
      })
      .catch((err) => {
        console.log('err is ', err)
      })
    })
    console.log('map end')

    this.isLoggedIn = this.storageService.isLoggedIn();
    console.log(this.isLoggedIn)

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      console.log('user is ' + user);
      this.userName = user.username;
      console.log('username is '+ this.userName);
    } 
  }

  toggleComp(str: string) {
    this.curComp = str;
  }

  signOut(): void {
    this.storageService.signOut();
    window.location.reload();
  }

}
