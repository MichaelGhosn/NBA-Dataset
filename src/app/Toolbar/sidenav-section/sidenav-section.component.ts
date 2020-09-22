import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav-section',
  templateUrl: './sidenav-section.component.html',
  styleUrls: ['./sidenav-section.component.scss']
})
export class SidenavSectionComponent implements OnInit {

  sections: Array<{ name: string, routerLink: string }> = [
    {
      name: 'Main',
      routerLink: '/NBA/Main'
    },
    {
      name: 'Players',
      routerLink: '/NBA/Players'
    },
    {
      name: 'Teams',
      routerLink: '/NBA/Teams'
    },
    {
      name: 'Games',
      routerLink: '/NBA/Games'
    },
    {
      name: 'Stats',
      routerLink: '/NBA/Stats'
    },
    {
      name: 'Season Average',
      routerLink: '/NBA/Season Average'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
