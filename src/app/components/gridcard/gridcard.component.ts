import { Component, Input, OnInit } from '@angular/core';
import { IDish } from 'src/app/interfaces/dish/dish.interface';

@Component({
  selector: 'app-gridcard',
  templateUrl: './gridcard.component.html',
  styleUrls: ['./gridcard.component.css']
})
export class GridcardComponent implements OnInit {
  @Input() dish: IDish;
  constructor() { }

  ngOnInit(): void {
  }

}
