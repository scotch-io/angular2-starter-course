import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserFormComponent, UserProfileComponent } from './users/index';
 
@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    UserFormComponent,
    UserProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}