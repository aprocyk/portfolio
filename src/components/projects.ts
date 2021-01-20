
import '../styles/projects.scss';
import {ProjectSlider} from './projectSlider';

class Projects{
    cont: HTMLElement;
    projectContainer: HTMLElement;
    fakeContainer: HTMLElement;
    sliderContainer: HTMLElement;
    text: HTMLElement;
    title: HTMLElement;
    gitLink: HTMLElement;
    constructor(){
        this.cont = document.createElement('div');
        this.projectContainer = document.createElement('div');
        this.sliderContainer = document.createElement('div');
        this.fakeContainer = document.createElement('div');
        this.title = document.createElement('h1');
        this.text = document.createElement('div');
        this.gitLink = document.createElement('div');

        this.cont.className = 'cont';
        this.fakeContainer.className = 'fakeCont';
        this.projectContainer.className = 'projectCont';
        this.sliderContainer.className = 'sliderCont';
        this.title.className = 'projectTitle';
        this.text.className = 'projectText';
        this.gitLink.className = 'gitLink';

        let slider = new ProjectSlider();
        this.sliderContainer.appendChild(slider.render());


        this.projectContainer.appendChild(this.title);
        this.projectContainer.appendChild(this.sliderContainer);
        this.projectContainer.appendChild(this.text);
        this.projectContainer.appendChild(this.gitLink);

        this.cont.appendChild(this.fakeContainer);
        this.cont.appendChild(this.projectContainer);
    }
    

    render(){
        return this.cont;
    }
}
export {Projects};