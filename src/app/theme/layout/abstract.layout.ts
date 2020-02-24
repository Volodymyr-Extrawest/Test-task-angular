import { AfterViewInit, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavConfig } from '@shared/interfaces/navConfig';

export abstract class AbstractLayoutComponent implements OnInit, AfterViewInit {
  navConfig: NavConfig;
  private activatedRoute: ActivatedRoute;

  protected constructor( private injector: Injector ) {
    this.activatedRoute = this.injector.get( ActivatedRoute );
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe( ( navConfig: NavConfig ) => {
      this.navConfig = navConfig;
    } );
  }

  ngAfterViewInit() {
  }
}
