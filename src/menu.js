import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor() {
        super(".menu");
        this.modules = {};
        this.posX = 0;
        this.posY = 0;
        document.body.addEventListener("contextmenu", this.clickBodyHandler);
        this.el.addEventListener("click", this.clickMenuHandler);
    }

    clickBodyHandler = (evt) => {
        this.posX = evt.pageX;
        this.posY = evt.pageY;
        evt.preventDefault();
        this.open();
    };

    clickMenuHandler = (evt) => {
        const type = evt.target.dataset.type;
        this.modules[type].trigger();
        this.close();
    };

    open = () => {
        this.el.style.left = this.posX + "px";
        this.el.style.top = this.posY + "px";
        this.el.classList.add("open");
    };

    close = () => {
        this.el.classList.remove("open");
    };

    add = (module) => {
        this.modules[module.type] = module;
        this.el.insertAdjacentHTML("beforeend", module.toHTML());
    };
}