import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../_services/auth-token.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-app-entete',
  templateUrl: './app-entete.component.html',
  styleUrls: ['./app-entete.component.css']
})
export class AppEnteteComponent implements OnInit {

  isLogin = false;
  constructor(private userService: UserService, private tokenS: AuthTokenService) { }

  ngOnInit(): void {
    if (this.tokenS.getToken() && this.tokenS.getUser) {
      this.isLogin = true;

    }
  }


  logout() {
    this.reloadPage()
    return this.tokenS.logout()
  }

  reloadPage(): void {
    window.location.replace('/');
  }

}

