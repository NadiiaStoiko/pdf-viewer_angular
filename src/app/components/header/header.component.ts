import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isShow = false;
  public visibility: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    this.isShow = !this.isShow;
    this.visibility = !this.visibility;
  }
}
