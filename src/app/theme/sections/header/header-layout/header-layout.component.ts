import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavConfig } from '@shared/interfaces/navConfig';

@Component( {
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
} )
export class HeaderLayoutComponent implements OnInit, AfterViewInit {
  @Input() navConfig: NavConfig;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
