import { AppObject } from './../appObject';

export class AppObjectEvent extends AppObject {
  name: string;
  code: string;
  runFunction: string;
  eventListener: boolean;

  constructor(father?: any /*AppObject*/) {
    super(father);
    this.eventListener = false;
  }
}
AppObjectEvent.addConstructor(AppObjectEvent.name, AppObjectEvent);
