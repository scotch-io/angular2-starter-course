import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  styleUrls: ['./app/app.component.css'],
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
  message: string = 'hello'; 
  users: User[]   = [
    { id: 1, name: 'Chris', username: 'sevilayha' },
    { id: 2, name: 'Nick', username: 'whatnicktweets' },
    { id: 3, name: 'Holly', username: 'hollylawly' }
  ];
  activeUser: User;

  ngOnInit() {
    console.log(this.message, this.users); 
  }

  selectUser(user: User): void {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    this.users.push(event.user);
    console.log(event);
  }

}