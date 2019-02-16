import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Message} from './message.model';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // private headers = new Headers({'Content-Type': 'application/json'});
  private uri = 'http://localhost:3000/api/v1/messages';
  private messageList: Message[];
  private authHeaders: Headers;


  constructor(private http: Http, private cookieService: CookieService) { }

  getMessages() {
    return this.http.get(this.uri)
      .toPromise()
      .then(response => {
        this.messageList = response.json().messages as Message[];
        return response.json().messages as Message[];
      })
      .catch(error => {
        return error;
      });
  }

  addMessage(message: Message) {
      this.authHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.cookieService.get('session_token')}`,
      });

      return this.http.post(this.uri, message, {headers: this.authHeaders})
        .toPromise()
        .then(response => {
          console.log(response.json().token);
          return response.json().status;
        })
        .catch((error)=> {
          return 401;
      });

  }
}
