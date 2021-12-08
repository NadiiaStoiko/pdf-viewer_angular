import { Component, OnInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { NgModel } from '@angular/forms';

export interface itemsList {
  item: string;
  id: number;
  date: any;
  checked: boolean;
  disabled: boolean;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public itemsList = [
    {
      item: 'Pré-valuation 1',
      id: 1,
      date: new Date(),
      file: '/assets/Interview Script_1.pdf',
      checked: false,
      disabled: false,
    },
    {
      item: 'Pré-valuation 2',
      id: 2,
      date: new Date(),
      file: '/assets/Interview Script_2.pdf',
      checked: false,
      disabled: false,
    },
    {
      item: 'Pré-valuation 3',
      id: 3,
      date: new Date(),
      file: '/assets/Interview Script_3.pdf',
      checked: false,
      disabled: false,
    },
    {
      item: 'Pré-valuation 4',
      id: 4,
      date: new Date(),
      file: '/assets/Interview Script_4.pdf',
      checked: false,
      disabled: false,
    },
    {
      item: 'Pré-valuation 5',
      id: 5,
      date: new Date(),
      file: '/assets/Interview Script_5.pdf',
      checked: false,
      disabled: false,
    },
    {
      item: 'Pré-valuation 6',
      id: 6,
      date: new Date(),
      file: '/assets/Interview Script_6.pdf',
      checked: false,
      disabled: false,
    },
    {
      item: 'Pré-valuation 7',
      id: 7,
      date: new Date(),
      file: '/assets/Interview Script_7.pdf',
      checked: false,
      disabled: false,
    },
    {
      item: 'Pré-valuation 8',
      id: 8,
      date: new Date(),
      file: '/assets/Interview Script_8.pdf',
      checked: false,
      disabled: false,
    },
    {
      item: 'Pré-valuation 9',
      id: 9,
      date: new Date(),
      file: '/assets/Interview Script_9.pdf',
      checked: false,
      disabled: false,
    },
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

  public itemName: string = '';
  public fileSrc: string = '';

  constructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit(): void {}

  public check(item: any) {
    console.log('click check');
    if (!item.disabled) item.checked = !item.checked;
  }
  public disable(item: any) {
    item.disabled = !item.disabled;
    if (item.disabled) item.checked = false;
  }

  public loadPdf(item: any) {
    if (!item.disabled) this.fileSrc = item.file;
  }
}
