import { PLATFORM } from 'aurelia-pal';
import { RouteConfig } from 'aurelia-router';

export const routes: RouteConfig[] = [{
  route: ['', 'home'],
  name: 'home',
  title: 'Home',
  nav: true,
  moduleId: PLATFORM.moduleName('./pages/home/home')
}, {
  route: 'todos',
  name: 'todo',
  title: 'Todo App',
  nav: true,
  moduleId: PLATFORM.moduleName('./pages/todo/todo')
}, {
  route: 'chart',
  name: 'chart',
  title: 'Chart',
  nav: true,
  moduleId: PLATFORM.moduleName('./pages/chart/chart')
}];
