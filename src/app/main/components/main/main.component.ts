import { Component } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

/**
 * Component class for showing main view.
 * @class MainComponent
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
  animations: [
    trigger('routeFadeIn', [
      transition('* <=> *', [
        query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
        group([
          query(':enter', [
            style({opacity: 0}),
            animate('0.5s ease-in-out', style({opacity: 1}))
          ], {optional: true}),
          query(':leave', [
            style({opacity: 1}),
            animate('0.5s ease-in-out', style({opacity: 0}))
          ], {optional: true}),
        ])
      ])
    ])
  ]
})
export class MainComponent {
  public themeCssClass: string;

  constructor(private router: Router) {
  }

  public getState(): string {
    return this.router.url;
  }

  public onThemeChange(cssClass: string): void {
    this.themeCssClass = cssClass;
  }
}

