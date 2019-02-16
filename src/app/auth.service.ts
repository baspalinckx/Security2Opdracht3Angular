import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri = 'http://localhost:3000/api/v1/login';


  constructor(private http: Http, private cookieService: CookieService) { }

  login(user: User) {
    console.log('service reatched');
  return this.http.post(this.uri, user)
    .toPromise()
    .then(response => {
      console.log(response.json().token);
      if(!this.cookieService.check('session_token')) {
        this.cookieService.set('session_token', response.json().token);
      }
      return response.json().status;
    })
    .catch((error)=> {
      return 401;
  });
  }
}
