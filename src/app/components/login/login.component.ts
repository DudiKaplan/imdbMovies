import { Component } from '@angular/core';
import { Credential } from 'src/app/models/credential.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public credential = new Credential();
  public errorLogin: string;


  constructor(private loginService: LoginService, private router: Router) { }

  public login(): void {
    if (this.loginService.login(this.credential)) {
      this.router.navigate(['/secure']);
    } else {
      this.credential = new Credential();
      this.errorLogin = 'שם משתמש או סיסמא שגוים'
    }
  };

  public clearError(): void {
    this.errorLogin = undefined;
  };

}
