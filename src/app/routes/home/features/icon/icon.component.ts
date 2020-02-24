import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
} )
export class IconComponent implements OnInit {
  @Input() name: string;
  readonly PATH = '/assets/images/icons/';

  constructor() {
  }

  ngOnInit(): void {
  }

  getImagePath(): string {
    return `${ this.PATH }${ this.name }.svg`;
  }

}
