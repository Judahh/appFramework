import 'simpleutils';
import { Util } from 'basicutil';
import { ComponentPage } from '../../../../page/componentPage';
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
        // console.log(father, pageName, routerName, nextName, suffix, main);
    }

    protected init(nextName?: string) {
        this.pageName = nextName;
    }

    public getNextName() {
        return this.nextName;
    }

    public getPages() {
        return this.pages;
    }

    public toGo() {
        return this.go;
    }

    public went() {
        this.go = false;
    }

    public set pageName(newName: string) {
        if (newName !== undefined &&
            (newName.indexOf(this.suffix) === -1) &&
            this.suffix !== undefined) {
            newName = newName + this.suffix;
        }

        let cookie = Util.getInstance().getCookie(this.routerName);
        if (this.currentName === undefined ||
            this.currentName !== newName) {
            this.nextName = newName;
            if (newName) {
                this.initPage(newName);
            } else if (cookie !== '') {
                this.pageName = cookie;
            } else {
                this.pageName = this.main;
            }
        }
    }

    public get pageName() {
        return this.currentName;
    }

    public initPage(pageName: string) {
        this.go = true;
        if (this.pages[pageName] === undefined) {
            this.pages[pageName] = new ComponentPage({ father: this, file: pageName });
        } else {
            if (this.pages[pageName].getChildrenLength() === 0 && this.pages[pageName].getUnknown() === true) {
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
        let pageName = this.currentName;
        this.currentName = undefined;
        this.pageName = pageName;
    }

    public updateFailed(data, page) {
        // console.log('updateFailed:', data);
        page.setUnknown(true);
        this.pageName = 'unknown';
    }

    public renderAfterUpdate() {
        this.currentName = this.nextName;
        if (this.routerName === 'page') {
            window.history.pushState('', '', '/' + this.currentName);
        }
        Util.getInstance().clearCookie(this.routerName);
    }
}
ComponentRouter.addConstructor(ComponentRouter);
