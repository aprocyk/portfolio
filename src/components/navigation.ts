
import '../styles/navbar.scss';

import {navigationButton} from './navButton';


class NavigationBar {
    container: HTMLElement;
    buttons: string[];
    constructor(){
        this.container = document.createElement("div");
        this.container.className = "navBar";
        this.buttons = ['O mnie', 'Technologie', 'Projekty', 'Kontakt'];

        this.buttons.forEach(element => {
            let but = new navigationButton(element);
            this.container.appendChild(but.render());
        });

    }
    render(){
        return this.container;
    }
}
export {NavigationBar};