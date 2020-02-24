import { Menu } from './menu';

export enum LayoutOutType {
  WEB = 'WEB'
}

export interface NavConfig {
  type: LayoutOutType;
  menus: Menu[];
  showSideNav?: boolean;
}
