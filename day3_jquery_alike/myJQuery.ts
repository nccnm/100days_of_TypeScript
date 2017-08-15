class ElementManager {
    private elements: NodeListOf<Element>;

    constructor(selector: string) {
        this.elements = document.querySelectorAll(selector);
    }

    css(style: string | Object, value: string = '') {
        if (typeof style === 'string') {
            this.setStyle(style, value);

            return this;
        }

        for (const property in style) {
            this.setStyle(property, style[property]);
        }

        return this;
    }

    private setStyle(property: string, value: string) {
        for (let i = 0; i < this.elements.length; i++) {
            const el = this.elements.item(i) as HTMLElement;
            el.style[property] = value;
        }
    }
}

export default function $(selector: string) {
    return new ElementManager(selector);
}