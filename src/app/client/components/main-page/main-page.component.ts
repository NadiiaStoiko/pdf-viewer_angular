import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public itemsList = [
    { item: 'Pré-valuation 1', id: 1, checked: false, disabled: false },
    { item: 'Pré-valuation 2', id: 2, checked: false, disabled: false },
    { item: 'Pré-valuation 3', id: 3, checked: false, disabled: false },
    { item: 'Pré-valuation 4', id: 4, checked: false, disabled: false },
    { item: 'Pré-valuation 5', id: 5, checked: false, disabled: false },
    { item: 'Pré-valuation 6', id: 6, checked: false, disabled: false },
    { item: 'Pré-valuation 7', id: 7, checked: false, disabled: false },
    { item: 'Pré-valuation 8', id: 8, checked: false, disabled: false },
    { item: 'Pré-valuation 9', id: 9, checked: false, disabled: false },
    { item: 'Pré-valuation 10', id: 10, checked: false, disabled: false },
    { item: 'Pré-valuation 11', id: 11, checked: false, disabled: false },
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

  public page = 2;
  public pageLabel!: string;

  constructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit(): void {}

  public check(item: any) {
    console.log('click check');
    if (!item.disabled) {
      console.log(item.disabled);

      item.checked = !item.checked;
    }
  }
  public disable(item: any) {
    item.disabled = !item.disabled;
    if (item.disabled) item.checked = false;
  }
}
