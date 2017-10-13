importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentMap extends Component {
  options: any;
  // centerPosition: any;
  marker: any;
  markerPosition: any;
  maps: any;
  map: any;

  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, "map");
    eval ("this.maps = google.maps;");
  }

  renderAfterUpdateJSON() {
    // Load google maps
    // let _self = this;
    // charts.setOnLoadCallback(() => { _self.drawChart(); });
    this.drawMap();
  }

  drawMap() {
    this.map = new this.maps.Map(this.element, this.options);
    if(this.markerPosition!=undefined){
      var marker = new this.maps.Marker({
        position: this.markerPosition,
        map: this.map
      });
    }
  }
}