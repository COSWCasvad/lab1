import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { APIService } from './../common/api.service';
import { AuthService } from './../common/auth.service';
import { AppConfiguration } from './../common/config/app-configuration.service';


@Injectable()
export class UsersService extends APIService {
    public config: AppConfiguration;
    public authService: AuthService;
    public http: Http;

    constructor( ) {
    super(this.config, this.authService, this.http);
  }

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }
}