import { Component } from './../component/component';
import { ImportScript } from './../../../../importScript';

export class ComponentMap extends Component {
  options: any;
  // centerPosition: any;
  arrayMarker: Array<any>;
  arrayMarkerPosition: Array<any>;
  maps: any;
  map: any;
  key: any;

  // IF DATALIST IT NEEDS A INPUT
  // <input list='datalistID' name='inputNAME'>
  // <datalist id='datalistID'>

  constructor(father?: Component) {
    super('map', father);
    this.className = 'ComponentMap';
    this.arrayMarker = new Array<any>();
  }

  renderAfterUpdateJSON() {
    this.initMap();
  }

  initMap() {
    if (this.key !== undefined) {
      let path = 'https://maps.googleapis.com/maps/api/js?key=' + this.key;
      let _self = this;
      let exists;
      // tslint:disable-next-line:no-eval
      eval('exists = google.maps;');
      if (exists === undefined) {
        ImportScript.importFileWithoutExtentionWithCallback(path, 'js', 'map', () => { _self.callback(); });
      } else {
        this.callback();
      }
    }
  }

  callback() {
    // console.log('key:'+this.key);
    // tslint:disable-next-line:no-eval
    eval('this.maps = google.maps;');
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
ComponentMap.addConstructor('ComponentMap', ComponentMap);
