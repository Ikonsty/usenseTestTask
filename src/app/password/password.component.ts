import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  public passwordType = 'password';

  public password = '';
  public msg = '';
  public msgStyle = {};

  public firstStyle = {};
  public secondStyle = {};
  public thirdStyle = {};

  // clear colors of all three sections
  clearColors() {
    this.firstStyle = { backgroundColor: '#9ca3af' };
    this.secondStyle = { backgroundColor: '#9ca3af' };
    this.thirdStyle = { backgroundColor: '#9ca3af' };
    this.msg = '';
    this.msgStyle = { color: '#9ca3af' };
  }

  makeStrong() {
    this.firstStyle = { backgroundColor: '#16a34a' };
    this.secondStyle = { backgroundColor: '#16a34a' };
    this.thirdStyle = { backgroundColor: '#16a34a' };
    this.msg = 'Your password is strong';
    this.msgStyle = { color: '#16a34a' };
  }

  makeMedium() {
    this.firstStyle = { backgroundColor: '#eab308' };
    this.secondStyle = { backgroundColor: '#eab308' };
    this.msg = 'Your password is medium: ';
    this.msgStyle = { color: '#eab308' };
  }

  makeEasy() {
    this.firstStyle = { backgroundColor: '#dc2626' };
    this.msg = 'Your password is easy: ';
    this.msgStyle = { color: '#dc2626' };
  }

  makeShort() {
    this.firstStyle = { backgroundColor: '#dc2626' };
    this.secondStyle = { backgroundColor: '#dc2626' };
    this.thirdStyle = { backgroundColor: '#dc2626' };
    this.msg = 'Your password is too short';
    this.msgStyle = { color: '#dc2626' };
  }

  checkPassword() {
    const numRegex = /[0-9]/;
    const letterRegex = /[a-zA-Z]/;
    const specialRegex = /[^a-zA-Z0-9\s]/;

    const hasNum = numRegex.test(this.password);
    const hasLet = letterRegex.test(this.password);
    const hasSpecial = specialRegex.test(this.password);

    this.clearColors();

    if (this.password.length >= 8) {
      switch (true) {
        case hasNum && hasLet && hasSpecial:
          this.makeStrong();
          break;
        case hasNum && hasLet:
          this.makeMedium();
          this.msg += 'add a special character';
          break;
        case hasNum && hasSpecial:
          this.makeMedium();
          this.msg += 'add a letter';
          break;
        case hasSpecial && hasLet:
          this.makeMedium();
          this.msg += 'add a number';
          break;
        case hasNum:
          this.makeEasy();
          this.msg += 'add letters and a special character';
          break;
        case hasLet:
          this.makeEasy();
          this.msg += 'add numbers and a special character';
          break;
        case hasSpecial:
          this.makeEasy();
          this.msg += 'add letters and a number';
          break;
        default: // hypothetical variant that can`t appear
      }
    } else if (this.password.length === 0) {
    } else {
      this.makeShort();
    }
  }

  togglePasswordType() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}
