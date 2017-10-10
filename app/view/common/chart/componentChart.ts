importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentChart extends Component {
  arrayData: Array<any>;
  options: any;
  chartType: string;

  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, "chart");
  }

  renderAfterUpdateJSON() {
    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    let _self = this;
    google.charts.setOnLoadCallback(() => { _self.drawChart(); });
    // Draw the chart and set the chart values

  }

  drawChart() {
    var data = google.visualization.arrayToDataTable(this.arrayData);
    // Display the chart inside the <div> element with id="piechart"
    console.log(this.element.id);
    var chart;
    eval ("chart = new google.visualization."+this.chartType+"(this.element);");
    chart.draw(data, this.options);
  }
}