
import '../styles/style.scss';
import {NavigationBar} from './navigation';
import {HeaderPart} from './header';
import {AboutMe} from './aboutMe';
import {Technologies} from './technologies';
import {Projects} from './projects';


class App {


    constructor(){
        
    }
    
    renderNavBar(){
        let navBar = new NavigationBar();
        document.body.appendChild(navBar.render());
    }
    renderHeaderPart(){
        let hedPart = new HeaderPart();
        document.body.appendChild(hedPart.render());
    }
    renderAboutMe(){
        let abtMe = new AboutMe();
        document.body.appendChild(abtMe.render());
    }
    renderTechnologies(){
        let tech = new Technologies();
        document.body.appendChild(tech.render());
    }
    renderProjects(){
        let proj = new Projects();
        document.body.appendChild(proj.render());
    }

}
const portfolio = new App();
portfolio.renderNavBar();
portfolio.renderHeaderPart();
portfolio.renderAboutMe();
portfolio.renderTechnologies();
portfolio.renderProjects();
