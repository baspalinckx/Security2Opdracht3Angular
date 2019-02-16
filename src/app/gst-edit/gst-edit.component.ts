import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  angForm: FormGroup;
  loginStatus: number;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }


  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  onSubmit() {
    this.authService.login(this.angForm.value).then(res => {
      this.loginStatus = res;
      if(this.loginStatus == 200) {
        console.log('ingelogd!');
      } else {
        console.log('niet ingelogd!');

      }
    });
  }

  }
