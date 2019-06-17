import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../classes/hero';
import { MessagesService } from '../../services/messages/messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  @Input() hero: Hero; 
  constructor(public messagesService: MessagesService) { }

  ngOnInit() {
  }

}