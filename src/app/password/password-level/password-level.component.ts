import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface StrengthStyles {
  first: string;
  second: string;
  third: string;
}

@Component({
  selector: 'app-password-level',
  templateUrl: './password-level.component.html',
  styleUrls: ['./password-level.component.css'],
})
export class PasswordLevelComponent {
  @Input() public type: string = 'empty';
}
