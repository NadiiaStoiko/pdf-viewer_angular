import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isShow = false;

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    this.isShow = !this.isShow;
  }
}
