import { Util } from './../../../../util/util';
import { Page } from '../../../../page/page';
import { ComponentGeneric } from '../componentGeneric';
// tslint:disable-next-line:no-empty

export class ComponentRouter extends ComponentGeneric {
    private pages: any;
    private currentName: string;
    private nextName: string;
    private routerName: string;//notification, page,header,footer
    private suffix: string;//Notification,empty,empty,empty
    private main: string;//none,home,header,footer

    private go: boolean;

    constructor(father?: any, name?: string, routerName?: string, nextName?: string, suffix?: string, main?: string) {
        super(father, name);
        this.pages = {};
        this.routerName = routerName;
        this.suffix = suffix;
        this.main = main;
        this.go = false;
        this.goTo(nextName);
        // console.log(father, name, routerName, nextName, suffix, main);
    }

    public getNextName() {
        return this.nextName;
    }

    public toGo() {
        return this.go;
    }

    public went() {
        this.go = false;
    }

    public goTo(name?: string, page?) {
        if (name !== undefined &&
            (name.indexOf(this.suffix) === -1)) {
            name = name + this.suffix;
        }
        if (page !== undefined) {
            page.setUnknown(name);
        }

        let cookie = Util.getInstance().getCookie(this.routerName);
        if (this.currentName === undefined ||
            this.currentName !== name) {
            this.nextName = name;
            if (name) {
                this.initPage(name);
            } else if (cookie !== '') {
                this.goTo(cookie);
            } else {
                this.goTo(this.main);
            }
        }
    }

    public initPage(pageName: string) {
        this.go = true;
        if (this.pages[pageName] === undefined) {
            this.pages[pageName] = new Page(this, pageName);
        } else {
            if (this.pages[pageName].arrayFrame.length === 0) {
                this.nextName = this.pages[pageName].getUnknown();
                this.pages[this.nextName].setPage();
            }else{
                this.pages[pageName].setPage();
            }
        }
    }

    public refresh() {
        // console.log('refreshNotification:');
        let name = this.currentName;
        this.currentName = undefined;
        this.goTo(name);
    }

    public updateFailed(data, page) {
        // console.log('updateFailed:', data);
        this.goTo('unknown', page);
    }

    public renderAfterUpdate() {
        super.renderAfterUpdate();
        this.currentName = this.nextName;
        if (this.routerName === 'page') {
            window.history.pushState('', '', '/' + this.currentName);
        }
        Util.getInstance().clearCookie(this.routerName);
        // console.log('renderAfterUpdateJSON:');
    }
}
ComponentRouter.addConstructor('ComponentRouter', ComponentRouter);