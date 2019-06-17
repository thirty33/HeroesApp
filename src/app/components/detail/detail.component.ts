import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
  selector: 'app-custom-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  @Input() hero: Hero; 
  constructor() { }

  ngOnInit() {
  }

}