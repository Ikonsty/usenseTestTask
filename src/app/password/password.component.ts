import { Component } from '@angular/core';
import { PasswordComplexityService } from '../password-complexity.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  public complexity: string = '';
  public passwordType: 'password' | 'text' = 'password';
  passwordForm!: FormGroup; // It will be asigned OnInit

  constructor(
    private fb: FormBuilder,
    private _PasswordComplexityService: PasswordComplexityService
  ) {}

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: '',
    });

    this.onChanges();
  }

  onChanges(): void {
    this.passwordForm.get('password')?.valueChanges.subscribe((val) => {
      this.complexity =
        this._PasswordComplexityService.checkPasswordComplexity(val);
    });
  }

  togglePasswordType(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
