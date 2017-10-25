importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentMap extends Component {
  options: any;
  // centerPosition: any;
  arrayMarker: Array<any>;
  arrayMarkerPosition: Array<any>;
  maps: any;
  map: any;
  key: any;

  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, "map");
    this.arrayMarker = new Array<any>();
  }

  renderAfterUpdateJSON() {
    this.initMap();  
  }

  initMap() {
    if (this.key != undefined) {
      let path = "https://maps.googleapis.com/maps/api/js?key=" + this.key;
      let _self = this;
      let exists;
      eval("exists = google.maps;");
      if(exists==undefined){
          importFileWithoutExtentionWithCallback(path, 'js', () => { _self.callback(); });
      }else{
          this.callback();
      }
  }
  }

  callback() {
    // console.log("key:"+this.key);
    eval("this.maps = google.maps;");
    this.map = new this.maps.Map(this.element, this.options);
    this.arrayMarkerPosition.forEach(markerPosition => {
      let marker = new this.maps.Marker({
        position: markerPosition,
        map: this.map
      });
      this.arrayMarker.push(marker);
    });
    super.renderAfterUpdateJSON();  
  }
}