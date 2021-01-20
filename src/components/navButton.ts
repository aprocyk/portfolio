
import '../styles/navbutton.scss';

class navigationButton{
    buttonContainer: HTMLElement;
    buttonText: HTMLElement;
    constructor(text: string){
        this.buttonContainer = document.createElement('div');
        this.buttonText = document.createElement('a');

        this.buttonContainer.className = "buttonCont";
        this.buttonText.className = "buttonText";

        this.buttonText.innerHTML = text;
        

        this.buttonContainer.appendChild(this.buttonText);
    }
    render(){
        return this.buttonContainer;
    }
}
export {navigationButton};