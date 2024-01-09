import { Component } from '@angular/core';
import { MessageService } from "../message.service";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { }
}
