import { Component, OnInit } from '@angular/core';
import { Routes } from '../../routes';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
	routes = Routes;
  constructor() { }

  ngOnInit() {
  }

}