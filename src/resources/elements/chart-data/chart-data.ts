import { bindable, noView } from 'aurelia-framework';

@noView()
export class ChartData {
  @bindable data = [];
  @bindable label = '';
  @bindable backgroundColor = 'rgba(220,220,220,0.2)';
  @bindable borderColor = 'rgba(220,220,220,1)';
  @bindable borderWidth = 2;

  @bindable pointBackgroundColor = 'rgba(220,220,220,1)';
  @bindable pointBorderColor = '#fff';
  @bindable pointHoverBackgroundColor = '#fff';
  @bindable pointHoverBorderColor = 'rgba(220,220,220,1)';

  @bindable hoverBackgroundColor = 'rgba(220,220,220,1)';
  @bindable hoverBorderColor = 'rgba(220,220,220,1)';
  @bindable hoverBorderWidth = 3;
}
