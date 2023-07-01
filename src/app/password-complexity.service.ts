import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordComplexityService {
  constructor() {}

  checkPasswordComplexity(password: string): string {
    const numRegex: RegExp = /[0-9]/;
    const letterRegex: RegExp = /[a-zA-Z]/;
    const specialRegex: RegExp = /[^a-zA-Z0-9\s]/;

    const hasNum: boolean = numRegex.test(password);
    const hasLet: boolean = letterRegex.test(password);
    const hasSpecial: boolean = specialRegex.test(password);

    if (password.length >= 8) {
      if (hasNum && hasLet && hasSpecial) {
        return 'strong';
      } else if (
        (hasNum && hasLet) ||
        (hasNum && hasSpecial) ||
        (hasSpecial && hasLet)
      ) {
        return 'medium';
      } else if (hasNum || hasLet || hasSpecial) {
        return 'easy';
      }
    }
    if (password.length === 0) {
      return 'empty';
    }

    return 'short';
  }
}
