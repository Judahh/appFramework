importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/image/componentImage');
importJS('app/view/common/dataInput/componentDataInput');
importJS('app/view/common/form/componentForm');
importJS('app/view/common/chart/componentChart');
importJS('app/view/common/map/componentMap');
importJS('app/view/common/progressBar/componentProgressBar');
importJS('app/view/common/videoHolder/componentVideoHolder');

class ComponentSubDivisor extends Component {
    arrayItem: Array<ComponentItem>;
    arrayImage: Array<ComponentImage>;
    arrayVideoHolder: Array<ComponentVideoHolder>;
    // videoLink: ModelVideoLink;
    arrayDataInput: Array<ComponentDataInput>;
    arrayForm: Array<ComponentForm>;
    arrayChart: Array<ComponentChart>;
    arrayMap: Array<ComponentMap>;
    arrayProgressBar: Array<ComponentProgressBar>;

    view: ComponentView;
    pageBody: ComponentPageBody;
    header: ComponentHeader;
    footer: ComponentFooter;

    pageBodyChecked: boolean;
    headerChecked: boolean;
    footerChecked: boolean;

    page: string;

    routerLink: string;

    code: string;

    appObject: AppObject;

    submit: boolean;

    constructor(father?: Component) {
        super(father);
        this.arrayItem = new Array<ComponentItem>();
        this.arrayItem.type = ComponentItem;
        this.arrayDataInput = new Array<ComponentDataInput>();
        this.arrayDataInput.type = ComponentDataInput;
        this.arrayImage = new Array<ComponentImage>();
        this.arrayImage.type = ComponentImage;
        this.arrayVideoHolder = new Array<ComponentVideoHolder>();
        this.arrayVideoHolder.type = ComponentVideoHolder;
        this.arrayForm = new Array<ComponentForm>();
        this.arrayForm.type = ComponentForm;
        this.arrayChart = new Array<ComponentChart>();
        this.arrayChart.type = ComponentChart;
        this.arrayMap = new Array<ComponentMap>();
        this.arrayMap.type = ComponentMap;
        this.arrayProgressBar = new Array<ComponentProgressBar>();
        this.arrayProgressBar.type = ComponentProgressBar;

        this.pageBodyChecked = false;
        this.headerChecked = false;
        this.footerChecked = false;
    }

    renderAfterUpdateJSON() {
        if (this.routerLink != undefined || this.code != undefined || this.submit) {
            this.element.addEventListener('click', () => this.onClick());
        }
    }

    onClick() {
        if (this.routerLink != undefined) {
            // console.log("CLICK:"+this.routerLink);
            this.getView().goToPage(this.routerLink);
            // console.log("BODY:"+Util.getBrowserLanguage());
        } else if (this.code != undefined) {
            // var age = new this.className();//window[this.className]();
            var appObject = AppObjectFactory.create(this.code, this);
            for (var property in this.appObject) {
                if (this.appObject.hasOwnProperty(property)) {
                    appObject[property] = this.appObject[property];
                }
            }
            this.appObject = appObject;
            // console.log("CODE:" + this.code);
            // console.log("appClass:" + this.appObject.result());
            this.appObject.result(this.element);
        } else {
            this.arrayForm.forEach(form => {
                var currentForm: HTMLFormElement = <HTMLFormElement>form.getElement();
                currentForm.submit();
            });
        }
    }

    private setPageBody() {
        this.pageBody = <ComponentPageBody>this.seekFatherComponent("ComponentPageBody");
        this.pageBodyChecked = true;
    }

    private setHeader() {
        this.header = <ComponentHeader>this.seekFatherComponent("ComponentHeader");
        this.headerChecked = true;
    }

    private setFooter() {
        this.footer = <ComponentFooter>this.seekFatherComponent("ComponentFooter");
        this.footerChecked = true;
    }

    private setView() {
        if (this.getPageBody() != undefined) {
            this.view = <ComponentView>this.pageBody.seekFatherComponent("ComponentView");
            if (this.view != undefined) {
                return;
            }
        }

        if (this.getHeader() != undefined) {
            this.view = <ComponentView>this.header.seekFatherComponent("ComponentView");
            if (this.view != undefined) {
                return;
            }
        }

        if (this.getFooter() != undefined) {
            this.view = <ComponentView>this.footer.seekFatherComponent("ComponentView");
            if (this.view != undefined) {
                return;
            }
        }

        this.view = <ComponentView>this.seekFatherComponent("ComponentView");
    }

    private setPage() {
        if (this.getPageBody() != undefined) {
            this.page = this.pageBody.nextPageName;
            return;
        }

        if (this.getHeader() != undefined) {
            this.page = this.header.getTag();
            return;
        }

        if (this.getFooter() != undefined) {
            this.page = this.footer.getTag();
            return;
        }
    }

    public getView() {
        if (this.view == undefined) {
            this.setView();
        }
        return this.view;
    }

    public getPage() {
        if (this.page == undefined) {
            this.setPage();
        }
        return this.page;
    }

    public getPageBody() {
        if (!this.pageBodyChecked) {
            this.setPageBody();
        }
        return this.pageBody;
    }

    public getHeader() {
        if (!this.headerChecked) {
            this.setHeader();
        }
        return this.header;
    }

    public getFooter() {
        if (!this.footerChecked) {
            this.setFooter();
        }
        return this.footer;
    }
}