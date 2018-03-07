import { AppObject } from './../appObject';

export class AppObjectEvent extends AppObject {
  name: string;
  link: string;
  code: string;
  runFunction: string;
  appObject: AppObject;
  running: boolean;

  constructor(father?: any /*AppObject*/) {
    super(father);
    this.className = 'AppObjectEvent';
  }

  public renderAfterUpdateJSON() {
    if (this.name !== undefined) {
      if (this.name === 'build') {
        this.onEvent(this);
        this.running = true;
      } else if (this.name === 'router') {
        this.addEventListener('click');
      } else if (this.name === 'authorization') {
        if (!this.onEvent(this)) {
          this.destroyFather();
        }
      } else {
        this.addEventListener(this.name);
      }
    }
  }

  public destroyFather() {
    // console.log('FATHER DESTROY:', this.father, this);
    if (this.father !== undefined) {
      this.father.destroyElement();
      delete this.father;
    }
  }

  public checkLink(runFunction) {
    if (runFunction(this.link)) {
      return this.link;
    }
    return null
  }

  private addEventListener(event?: string) {
    let father = this.getFather();
    let element = father.getElement();
    element.addEventListener(event, () => father.onEvent(this));
  }
}
AppObjectEvent.addConstructor('AppObjectEvent', AppObjectEvent);
