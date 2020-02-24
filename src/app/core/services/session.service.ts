import { Injectable, Inject } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import localeDEExtra from '@angular/common/locales/extra/de';
import localeEN from '@angular/common/locales/en';
import localeENExtra from '@angular/common/locales/extra/en';
import { NotificationService } from '@shared/services/notification.service';
import { APP_CONFIG } from 'app/configs/app.config';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _locale: string;

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private notificationService: NotificationService
  ) {}

  get locale(): string {
    return this._locale || this.appConfig.locales.german;
  }

  private notifyNotSupportedLocale(locale: string) {
    this.notificationService.showError(`Locale ${locale} is not supported yet`);
  }
}
