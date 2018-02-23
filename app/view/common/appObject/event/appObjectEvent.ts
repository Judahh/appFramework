import { AppObject } from './../appObject';

export class AppObjectEvent extends AppObject {
  name: string;
  code: string;
  runFunction: string;
  eventListener: boolean;

  constructor(father?: any /*AppObject*/) {
    super(father);
    console.log('FATHER:', this.father, this);
    this.eventListener = false;
  }

  public renderAfterUpdateJSON() {
    if (this.name !== undefined) {
      if (this.name === 'build') {
        this.onEvent(this);
        this.running = true;
      } else if (this.name === 'authorization') {
        if (!this.onEvent(this)) {
          this.destroyFather();
        }
      } else if (!this.eventListener) {
        this.getFather().addEventListener(this);
      }
    }
  }

  public destroyFather() {
    console.log('FATHER DESTROY:', this.father, this);
    if (this.father !== undefined) {
      this.father.destroyElement();
      delete this.father;
    }
  }
}
AppObjectEvent.addConstructor(AppObjectEvent.name, AppObjectEvent);
