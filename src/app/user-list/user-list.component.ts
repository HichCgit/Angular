import { Component, OnInit } from '@angular/core';
import { userInterface } from '../interfaces/userInterface';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList?: Array<userInterface>
  userID?: number
  constructor(private userService: UserService) { }



  ngOnInit(): void {

    let CurrentUser: any = localStorage.getItem("auth-user")
    CurrentUser = JSON.parse(CurrentUser)
    this.userID = CurrentUser.id
    console.log(CurrentUser.id)
    this.userService.getUserlist().subscribe({
      next: data => {

        this.userList = JSON.parse(data)
        localStorage.setItem('users', data)

      }
    })
  }

  onSubmit(userID: number) {
    // console.log('yes')
    // stop here if form is invalid

    return this.userService.deleteUser(userID).subscribe({
      next: data => {
        if (data) {
          this.reloadPage()
        }
      }
    })
  }

  reloadPage() {
    localStorage.clear()
    window.location.replace('/')
  }



}
