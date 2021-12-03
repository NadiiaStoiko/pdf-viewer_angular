import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public icons = [
    {
      src: '/assets/img/img-sidebar/home.svg',
      srcActive: '/assets/img/img-sidebar/home _green.svg',
      alt: 'home',
      text: 'À Tableau de bord',
    },
    {
      src: '/assets/img/img-sidebar/directory.svg',
      srcActive: '/assets/img/img-sidebar/directory _green.svg',
      alt: 'directory',
      text: 'Dossiers',
    },
    {
      src: '/assets/img/img-sidebar/calendar.svg',
      srcActive: '/assets/img/img-sidebar/calendar_green.svg',
      alt: 'calendar',
      text: 'Session',
    },
    {
      src: '/assets/img/img-sidebar/location.svg',
      srcActive: '/assets/img/img-sidebar/location _green.svg',
      alt: 'location',
      text: 'Provenance',
    },
    {
      src: '/assets/img/img-sidebar/clock_circle.svg',
      srcActive: '/assets/img/img-sidebar/clock_circle _green.svg',
      alt: 'clock',
      text: 'Suivi modifications',
    },
    {
      src: '/assets/img/img-sidebar/user_grey.svg',
      srcActive: '/assets/img/img-sidebar/user_green.svg',
      alt: 'user',
      text: 'Utilisateurs',
    },
    {
      src: '/assets/img/img-sidebar/school.svg',
      srcActive: '/assets/img/img-sidebar/school _green.svg',
      alt: 'school',
      text: 'Formations',
    },
    {
      src: '/assets/img/img-sidebar/copyright.svg',
      srcActive: '/assets/img/img-sidebar/copyright _green.svg',
      alt: 'copyright',
      text: 'BPF',
    },
    {
      src: '/assets/img/img-sidebar/evro.svg',
      srcActive: '/assets/img/img-sidebar/evro _green.svg',
      alt: 'money',
      text: 'Couts',
    },
    {
      src: '/assets/img/img-sidebar/download.svg',
      srcActive: '/assets/img/img-sidebar/download _green.svg',
      alt: 'download',
      text: 'Import Leads',
    },
    {
      src: '/assets/img/img-sidebar/download.svg',
      srcActive: '/assets/img/img-sidebar/download _green.svg',
      alt: 'download',
      text: 'Import IPBX',
    },
    {
      src: '/assets/img/img-sidebar/compare_arrows.svg',
      srcActive: '/assets/img/img-sidebar/compare_arrows _green.svg',
      alt: 'arrows',
      text: 'Compteurs',
    },
    {
      src: '/assets/img/img-sidebar/load.svg',
      srcActive: '/assets/img/img-sidebar/load _green.svg',
      alt: 'load',
      text: 'Relances',
    },
    {
      src: '/assets/img/img-sidebar/setting.svg',
      srcActive: '/assets/img/img-sidebar/setting _green.svg',
      alt: 'setting',
      text: 'Parametres',
    },
    {
      src: '/assets/img/img-sidebar/on.png',
      srcActive: '/assets/img/img-sidebar/on_green.svg',
      alt: 'picture',
      text: 'Déconnexion',
    },
  ];

  public activeItem = false;
  public selectedIcon: any;
  constructor() {}

  ngOnInit(): void {}

  public isActive(icon: any) {
    this.activeItem = !this.activeItem;
    this.selectedIcon = icon;
  }
}
