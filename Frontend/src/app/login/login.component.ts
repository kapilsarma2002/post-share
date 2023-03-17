import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() isLoggedIn: boolean = true;
  @Output() getAuthChange = new EventEmitter<boolean>();

  IsSignInComp: boolean = false;

  IsSuccessful: boolean = false;
  IsSignUpFailed: boolean = true;


  form: any = {
    name: null,
    email: null,
    password: null
  }

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    if(this.IsSignInComp) {
      if(this.storageService.getUser()) {
        this.isLoggedIn = true;
      }
    }
  }

  toggle(): void {
    this.IsSignInComp = !this.IsSignInComp
  }

  async submit(): Promise<void> {
    
    if(!this.IsSignInComp) {  // SignUp

      const { name, email, password } = this.form;        

      await firstValueFrom(this.authService.register(name, email, password))
        .then((res) => {
          console.log('resolved')
          console.log(res)
          this.IsSuccessful = true;
          this.IsSignUpFailed = false;
          this.storageService.saveUser(res);
        })
        .catch((err) => {
          console.log('error')
          console.log(err)
        })
    } 
    else {   //SignIn

      const { email, password } = this.form;

      await firstValueFrom(this.authService.login(email, password))
        .then((res) => {
          if(res) {
            this.storageService.saveUser(res);
            this.IsSuccessful = true;
            this.IsSignUpFailed = false;
          } else {
            alert('email or password is wrong!');
          }
        })
        .catch((err) => {
          console.log('error')
          console.log(err)
        })
    }

    if(this.IsSuccessful && !this.IsSignUpFailed) {
      this.isLoggedIn = true
      this.getAuthChange.emit(this.isLoggedIn)
      this.router.navigateByUrl('/')
    } else {
      console.log('signin/signup failed!')
    }
    
  }
}
