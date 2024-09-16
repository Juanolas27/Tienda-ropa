import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    ButtonModule,
    StyleClassModule,
  ],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.sass'
})
export class LoginRegisterComponent {
  date = new Date();
}
