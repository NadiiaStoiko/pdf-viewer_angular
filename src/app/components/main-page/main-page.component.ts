import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public itemsList = [
    { item: 'Pré-valuation 1', id: 1 },
    { item: 'Pré-valuation 2', id: 2 },
    { item: 'Pré-valuation 3', id: 3 },
    { item: 'Pré-valuation 4', id: 4 },
    { item: 'Pré-valuation 5', id: 5 },
  ];

  public isSelected = false;

  constructor() {}

  ngOnInit(): void {}
  public toggle() {
    this.isSelected !== this.isSelected;
  }
}
