import { Component, OnInit } from '@angular/core';
import {Message}  from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  private messages: Message[];

  constructor(private ms: MessageService) { }

  ngOnInit() {
    this.ms.getMessages().then(mes => {
      this.messages = mes;
    });
  }



}
