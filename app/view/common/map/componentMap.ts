import { Component } from './../component/component';
import { ImportScript } from './../../../../importScript';
import { Maker } from '../../../maker';

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

  renderAfterUpdate() {
    this.initMap();
  }

  initMap() {
    if (this.key !== undefined) {
      let path = 'https://maps.googleapis.com/maps/api/js?key=' + this.key;
      let _self = this;
      let exists = Maker.run('google', 'maps');
      if (exists === undefined) {
        ImportScript.importFileWithoutExtentionWithCallback(path, 'js', 'map', () => { _self.callback(); });
      } else {
        this.callback();
      }
    }
  }

  callback() {
    // console.log('key:'+this.key);
    this.maps = Maker.run('google', 'maps');
    this.map = new this.maps.Map(this.element, this.options);
    this.arrayMarkerPosition.forEach(markerPosition => {
      let marker = new this.maps.Marker({
        position: markerPosition,
        map: this.map
      });
      this.arrayMarker.push(marker);
    });
    super.renderAfterUpdate();
  }
}
ComponentMap.addConstructor('ComponentMap', ComponentMap);
