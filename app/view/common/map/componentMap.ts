importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentMap extends Component {
  options: any;
  // centerPosition: any;
  marker: any;
  markerPosition: any;
  maps: any;
  map: any;
  key: any;

  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, "map");
  }

  renderAfterUpdateJSON() {
    this.initMap();
  }

  initMap() {
    if (this.key != undefined) {
      var path = "https://maps.googleapis.com/maps/api/js?key=" + this.key;
      // var _self = this;
      importFileWithoutExtentionWithCallback(path, 'js', this);
    }
  }

  callback() {
    // console.log("key:"+this.key);
    eval("this.maps = google.maps;");
    this.map = new this.maps.Map(this.element, this.options);
    if (this.markerPosition != undefined) {
      var marker = new this.maps.Marker({
        position: this.markerPosition,
        map: this.map
      });
    }
  }
}