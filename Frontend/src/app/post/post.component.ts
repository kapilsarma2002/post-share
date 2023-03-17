import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PostService } from '../_services/post.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(
    private router: Router,
    private fb : FormBuilder,
    private postService: PostService,
    private storageService: StorageService
  ) {}

  postForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  });

  async onSubmit(): Promise<void> {
    console.log('post comp is ')
    // console.log(this.storageService.getUser())
    // console.log(this.postForm.value.title)
    // console.log(this.postForm.value.content)

    await firstValueFrom(this.postService.postPost(
      this.storageService.getUser(),
      this.postForm.value.title,
      this.postForm.value.content
    ))

    window.location.reload();
    this.router.navigateByUrl('/');
  }

}
