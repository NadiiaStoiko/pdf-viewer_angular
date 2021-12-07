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
    { item: 'Pré-valuation 6', id: 6 },
    { item: 'Pré-valuation 7', id: 7 },
    { item: 'Pré-valuation 8', id: 8 },
    { item: 'Pré-valuation 9', id: 9 },
    { item: 'Pré-valuation 10', id: 10 },
    { item: 'Pré-valuation 11', id: 11 },
  ];

  public eye = {
    srcOn: '/assets/img/img-clientsectoin/eye-green.png',
    srcOf: '/assets/img/img-clientsectoin/eye.png',
  };
  public edit = {
    srcOn: '/assets/img/img-clientsectoin/edit-green.png',
    srcOf: '/assets/img/img-clientsectoin/edit.png',
  };

  public toggler = {
    srcOn: '/assets/img/img-clientsectoin/toggle-green.png',
    srcOf: '/assets/img/img-clientsectoin/toggle_grey.png',
  };

  public selectedItem: any;
  public disabledItem: any;
  public isDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public check(item: any) {
    this.selectedItem = item;
  }
  public disable(item: any) {
    this.disabledItem = item;
    this.isDisabled === true;
  }
}
