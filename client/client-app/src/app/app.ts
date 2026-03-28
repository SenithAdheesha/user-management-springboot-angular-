import { Component } from '@angular/core';
import { UserService, User } from './user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App {

  users: User[] = [];

  constructor(private userService: UserService) {}

  loadUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }
}