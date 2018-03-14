import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/checkbox/checkbox'),
    PLATFORM.moduleName('./elements/chart/chart'),
    PLATFORM.moduleName('./elements/chart-data/chart-data')
  ]);
}
