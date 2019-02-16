import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  postStatus: number;

  constructor(private fb: FormBuilder, private messageService: MessageService, private cookieService: CookieService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      user: ['', Validators.required ],
      text: ['', Validators.required ]
    });
  }

  onSubmit() {
    if(this.cookieService.check('session_token')) {
      this.messageService.addMessage(this.angForm.value).then(res => {
        this.postStatus = res;

      });
    } else {
      console.log('geen token!')
      this.postStatus = 401;
    }

  }


  ngOnInit() {
  }

}
