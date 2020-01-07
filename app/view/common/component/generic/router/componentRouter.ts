import 'simpleutils';
import { Util } from 'basicutil';
import { Page } from '../../../../page/page';
import { ComponentGeneric } from '../componentGeneric';
import { GeneticCode } from '../../../child/geneticCode';


export class ComponentRouter extends ComponentGeneric {
    private pages: any;
    private currentName: string;
    private nextName: string;
    private routerName: string; // notification, page,header,footer
    private suffix: string; // Notification,empty,empty,empty
    private main: string; // none,home,header,footer
    private go: boolean;

    constructor(geneticCode?: GeneticCode) { // ex: {specificName: 'ComponentPageBody', routerName: 'page', nextName: geneticCode.nextName, suffix: '', main: 'home'}
        super(geneticCode);
        this.pages = {};
        this.routerName = geneticCode.routerName;
        this.suffix = geneticCode.suffix;
        this.main = geneticCode.main;
        this.go = false;
        this.init(geneticCode.nextName);
        // console.log(father, name, routerName, nextName, suffix, main);
    }

    protected init(nextName?: string) {
        this.name = nextName;
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

    public set name(newName: string) {
        if (newName !== undefined &&
            (newName.indexOf(this.suffix) === -1)) {
                newName = newName + this.suffix;
        }

        let cookie = Util.getInstance().getCookie(this.routerName);
        if (this.currentName === undefined ||
            this.currentName !== newName) {
            this.nextName = newName;
            if (newName) {
                this.initPage(newName);
            } else if (cookie !== '') {
                this.name = cookie;
            } else {
                this.name = this.main;
            }
        }
    }

    public get name() {
        return this.currentName;
    }

    public initPage(pageName: string) {
        this.go = true;
        if (this.pages[pageName] === undefined) {
            this.pages[pageName] = new Page({father: this}, pageName);
        } else {
            if (this.pages[pageName].getArrayChild.length === 0 && this.pages[pageName].getUnknown() === true) {
                this.nextName = 'unknown';
                this.pages[this.nextName].setPage();
            } else {
                this.pages[pageName].setPage();
            }
        }
    }

    public refresh() {
        // console.log('refreshNotification:');
        this.pages = {};
        let name = this.currentName;
        this.currentName = undefined;
        this.name = name;
    }

    public updateFailed(data, page) {
        // console.log('updateFailed:', data);
        page.setUnknown(true);
        this.name = 'unknown';
    }

    public beforeUpdateLanguage() {
        this.currentName = this.nextName;
        if (this.routerName === 'page') {
            window.history.pushState('', '', '/' + this.currentName);
        }
        Util.getInstance().clearCookie(this.routerName);
    }
}
ComponentRouter.addConstructor('ComponentRouter', ComponentRouter);
