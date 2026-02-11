import { Component, inject, OnInit, signal } from '@angular/core';
import { Icon } from '../../../../shared/components/icon/icon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { Auth } from '../../../../core/auth/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  imports: [
    Icon,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage implements OnInit {
  private auth = inject(Auth);
  private fb = inject(FormBuilder);

  error = signal<string | null>(null);
  loading = signal(false);

  form = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  async login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    try {
      await this.auth.login(this.form.getRawValue());
    } catch (e: any) {
      this.error.set(e.message);
    } finally {
      this.loading.set(false);
    }
  }

  logit(item: any) {
    console.log(item);
  }
}
