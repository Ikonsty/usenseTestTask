import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { PasswordLevelComponent } from './password/password-level/password-level.component';

@NgModule({
  declarations: [AppComponent, PasswordComponent, PasswordLevelComponent],
  imports: [BrowserModule, MatIconModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
