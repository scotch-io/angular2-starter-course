import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-form',
  styles: [`
    form     {
      padding: 10px;
      background: #ECF0F1;
      border-radius: 3px;
      margin-bottom: 30px;
    }
  `],
  template: `
    <form (submit)="onSubmit($event)" #form="ngForm" *ngIf="active">

      <div class="form-group" [ngClass]="{ 'has-error': name.invalid && name.touched }">
        <input type="text" class="form-control" name="name" placeholder="Name" required
          [(ngModel)]="newUser.name" #name="ngModel">

        <span class="help-block" *ngIf="name.invalid && name.touched">Name is required.</span>
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': username.invalid && username.touched }">
        <input type="text" class="form-control" name="username" placeholder="Username" required
          [(ngModel)]="newUser.username" #username="ngModel">

        <span class="help-block" *ngIf="username.invalid && username.touched">Username is required.</span>
      </div>

      <button type="submit" class="btn btn-block btn-primary" [disabled]="form.invalid">Create User</button>

    </form>
  `
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter();
  newUser: User   = new User();
  active: boolean = true;

  // process the new user form
  onSubmit(event) {
    this.userCreated.emit({ user: this.newUser });

    // trick to clear and reset the form
    this.newUser = new User();
    this.active  = false;
    setTimeout(() => this.active = true, 0);

    // prevent the default form submission
    event.preventDefault();
  }

}