import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  public messages = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessages().subscribe((data) => {
      this.messages = data;
      console.log(data);
    });
  }
}
