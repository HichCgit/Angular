import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTokenService } from '../_services/auth-token.service';
import { AuthService } from '../_services/auth-user.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['' as string, Validators.required],
    password: ['', Validators.required],
  })
  isLogIn = false;
  isLogFailed = false
  errorMessage = ""

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenS: AuthTokenService, private route: Router) { }

  ngOnInit(): void {
    if (this.tokenS.getToken()) {
      this.isLogIn = true;

    }
  }

  get f() { return this.loginForm.controls; }


  ngConnect() {

  }
  onSubmit() {


    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    return this.authService.login(this.loginForm.value).subscribe({
      next: data => {
        console.log(data)
        this.tokenS.saveToken(data.token);
        this.tokenS.saveUser(data)
        this.isLogFailed = false;
        this.isLogIn = true;
        this.reloadPage()


      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLogFailed = true;
      }
    })



  }
  reloadPage(): void {
    window.location.replace('/user/list');
  }
}
