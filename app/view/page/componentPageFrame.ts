import { Component } from '../common/component/component';

export class ComponentPageFrame extends Component {
    private minWidth: number;
    private maxWidth: number;
    private minHeight: number;
    private maxHeight: number;

    constructor(geneticCode?: GeneticCode) {
        super({...{className: 'ComponentPageFrame', tag: 'pageFrame'}, ...geneticCode});
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
        this.maxHeight = maxHeight;
    }

    public getFullPage(): ComponentPage {
        return <ComponentPage> this.getFather();
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
import { ComponentPage } from './componentPage';
import { GeneticCode } from '../common/child/geneticCode';

ComponentPageFrame.addConstructor(ComponentPageFrame);
