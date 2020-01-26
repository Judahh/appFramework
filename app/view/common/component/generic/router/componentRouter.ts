import 'simpleutils';
import { Util } from 'basicutil';
import { ComponentPage } from '../../../../page/componentPage';
import { ComponentGeneric } from '../componentGeneric';
import { GeneticCode } from '../../../child/geneticCode';


export class ComponentRouter extends ComponentGeneric {
    protected currentName: string;
    protected nextName: string;
    protected routerName: string; // notification, page,header,footer
    protected pages: any;
    protected suffix: string; // Notification,empty,empty,empty
    protected main: string; // none,home,header,footer
    protected go: boolean;

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

    protected getNormalizedName(newName?: string) {
        if (newName !== undefined &&
            (newName.indexOf(this.suffix) === -1) &&
            this.suffix !== undefined) {
            newName = newName + this.suffix;
        }

        return newName;
    }

    protected initPage(pageName: string) {
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

    protected setState() {
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
        newName = this.getNormalizedName(newName);

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
            this.updateName();
        }
    }

    public get pageName() {
        return this.currentName;
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

    public updateName() {
        this.currentName = this.nextName;
        this.setState();
        Util.getInstance().clearCookie(this.routerName);
    }
}
ComponentRouter.addConstructor(ComponentRouter);
