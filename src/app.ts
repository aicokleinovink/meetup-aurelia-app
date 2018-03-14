import { Router, RouterConfiguration, NavModel } from 'aurelia-router';
import { routes } from 'app.routes';

export class App {
  public router: Router;

  constructor() {
    this.router = null;
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Meetup Aurelia app';
    config.map(routes);
  }

  public navBarItemClicked(item: NavModel) {
    this.router.navigate(item.href);
  }
}
