import { Injectable } from '@angular/core';
import { Credential } from 'src/app/models/credential.model';

import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user = 'admin'
  private password = '$2a$10$UUrXe4QMBQ7YGTzcCSLphug3UHBrxqkfRq0htrZm1uVDyB913t1eO'
  public isLogin = false;

  public login(credential: Credential): boolean {

    if (credential.user === this.user && bcrypt.compareSync(credential.password, this.password)) {
      return this.isLogin = true;
    } else {
      return false;
    }
  }
}
