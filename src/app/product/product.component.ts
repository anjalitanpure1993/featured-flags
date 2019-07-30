import { Component, OnInit } from '@angular/core';
import {AppConfigService} from '../app-config.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  featureToggleData;

  constructor(appConfig: AppConfigService) {
    const data = appConfig.getConfig();
    this.featureToggleData = data.FLAGS;
  }

  ngOnInit() {
    setInterval(() => {
      Object.keys(this.featureToggleData).forEach(key => (
        this.featureToggleData[key] = !this.featureToggleData[key]
      ));
    }, 3000);
  }

}
