import { NavModel, Router } from 'aurelia-router';
import { bindable } from 'aurelia-framework';

export class NavBar {
  @bindable() router: Router;
  @bindable() itemClicked: (item: NavModel) => Function;

  constructor() {
    this.router = null;
  }

  public itemClick(item: NavModel) {
    this.itemClicked(item);
  }
}
