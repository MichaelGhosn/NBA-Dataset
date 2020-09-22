import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-translate-section',
  templateUrl: './translate-section.component.html',
  styleUrls: ['./translate-section.component.scss']
})
export class TranslateSectionComponent implements OnInit {

  SupportedLanguages: Array<{ language: string }> = [
    {
      language: 'en'
    },
    {
      language: 'fr'
    }
  ];

  constructor(public translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.route.queryParams.subscribe(params => {
        if (params !== {} && params.hasOwnProperty('lang')) {
          this.ChangeLanguage(params.lang);
        } else {
          this.ChangeLanguage('en');
        }
      });
    }, 100);
  }

  ChangeLanguage(newLanguage: string): void {
    this.translate.use(newLanguage);
    this.ReloadQueryParams(newLanguage);
  }

  ReloadQueryParams(newLanguageUsed: string): void {
    this.router.navigate([], {
      queryParams: { lang: newLanguageUsed },
      queryParamsHandling: 'merge',
    });
  }

}
