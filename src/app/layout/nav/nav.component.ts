import { Component, OnInit } from '@angular/core';
import { FakeAuthServiceService } from 'src/app/demo/demo-service/service/fake-auth-service.service';
import { Link } from 'src/app/models/link.models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isConnected!: boolean;
  links!: Link[];

  constructor(
    private readonly _fakeAuthService: FakeAuthServiceService
  ) { }

  ngOnInit(): void {
    this.links = [
      {
        title: 'Home',
        url: '/home'
      },
      {
        title: 'About',
        url: '/about'
      },
      {
        title: 'Demo',
        url: '/demo',
        children: [
          {
            title: 'Bindings',
            url: '/demo/demo01'
          },
          {
            title: 'Pipes',
            url: '/demo/demo02'
          },
          {
            title: 'Directives',
            url: '/demo/demo03'
          },
          {
            title: 'Directives2',
            url: '/demo/demo04'
          },
          {
            title: 'Input/Output',
            url: '/demo/demo05'
          },
          {
            title: 'Service',
            url: '/demo/demo06'
          },
          {
            title: 'Formulaire',
            url: '/demo/demo07'
          },
          {
            title: 'Routing',
            url: '/demo/demo08'
          },
          {
            title: 'Http',
            url: '/demo/demo09'
          }
        ],
        isVisible: false
      },
      {
        title: 'Exercice',
        children: [
          {
            title: 'Timer',
            url: '/exo/exo01'
          }
        ],
        isVisible: false
      }
    ];

    this._fakeAuthService.isConnected$.subscribe(
      (value) => this.isConnected = value
    )
  }

  toggleIsVisible(link: Link) {
    link.isVisible = !link.isVisible;
  }
}
