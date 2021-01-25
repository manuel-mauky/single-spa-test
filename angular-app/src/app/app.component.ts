import { Component } from '@angular/core';
import { assetUrl } from '../single-spa/asset-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';

  // prepend webpack public path to image source
  logoUrl = assetUrl('angular.svg');
}
