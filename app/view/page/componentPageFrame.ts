import { Component } from '../common/component/component';
import { ComponentGeneric } from '../common/component/generic/componentGeneric';
import { Page } from './page';

export class ComponentPageFrame extends Component {
    background: ComponentGeneric;
    private minWidth: number;
    private maxWidth: number;
    private minHeight: number;
    private maxHeight: number;
    private fullPage: Page;

    constructor(sVG?: boolean, arrayType?: string[]) {
        super('pageFrame', sVG, arrayType);
        this.className = 'ComponentPageFrame';
        this.background = new ComponentGeneric('ComponentBackground');
    }

    public setFather(father) {
        super.setFather(father);
        this.fullPage = father;
      }

    public setMinWidth(minWidth: number) {
        this.minWidth = minWidth;
    }

    public setMaxWidth(maxWidth: number) {
        this.maxWidth = maxWidth;
    }

    public setMinHeight(minHeight: number) {
        this.minHeight = minHeight;
    }

    public setMaxHeight(maxHeight: number) {
        return this.maxHeight;
    }

    public getFullPage() {
        return this.fullPage;
    }

    public getMinWidth() {
        return this.minWidth;
    }

    public getMaxWidth() {
        return this.maxWidth;
    }

    public getMinHeight() {
        return this.minHeight;
    }

    public getMaxHeight() {
        return this.maxHeight;
    }
}
ComponentPageFrame.addConstructor('ComponentPageFrame', ComponentPageFrame);
