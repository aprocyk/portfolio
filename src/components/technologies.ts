
import '../styles/technologies.scss';
import {Graph} from './graph';

class Technologies {

    techContainer: HTMLElement;
    techGraph: HTMLElement;
    techTitle: HTMLElement;
    techText: HTMLElement;
    graph: SVGElement;
    
    constructor(){
        this.techContainer = document.createElement('div');
        this.techGraph = document.createElement('div');
        this.techText = document.createElement('div');
        this.techTitle = document.createElement('h1');
        this.graph = new Graph().render();
        
        this.techTitle.innerHTML = "Technologie";
        this.techText.innerHTML = "Ullamco tempor elit amet laboris occaecat consequat id ea non ullamco et. Veniam ad ad ex irure nulla magna nisi deserunt ipsum aliqua. Irure cillum fugiat anim aliquip sit do. Laboris eu non tempor mollit ut culpa cillum cupidatat non adipisicing.Elit cupidatat adipisicing do nisi aliqua fugiat. Amet do deserunt fugiat adipisicing duis ipsum esse minim nostrud. Do laborum pariatur consectetur in. In labore ullamco nisi et nulla consequat irure.Labore occaecat deserunt in nostrud occaecat non et. Nulla amet veniam eu nisi nulla esse laboris. Sit tempor laborum aliquip dolor dolore amet deserunt est id irure. Velit enim cillum eu nulla eiusmod Lorem enim aute cupidatat in pariatur Lorem. Mollit voluptate eu aliqua aliqua et cupidatat non aliquip est mollit non pariatur ea. Do dolor est consequat qui sunt consequat minim mollit do irure culpa nostrud id."
        
        this.techGraph.appendChild(this.graph);


        this.techContainer.className = "techContainer";
        this.techTitle.className = "techTitle"
        this.techGraph.className = "techGraph";
        this.techText.className = "techText";

        

        this.techContainer.appendChild(this.techTitle);
        this.techContainer.appendChild(this.techGraph);
        this.techContainer.appendChild(this.techText);

    }

    render(){
        return this.techContainer;
    }
}

export {Technologies};