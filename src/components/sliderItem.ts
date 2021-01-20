
import '../styles/slideritem.scss';

class SliderItem{

    itemContainer: HTMLElement;
    itemButton: HTMLElement;
    itemLink: string;

    constructor(){

        this.itemContainer = document.createElement('div');
        this.itemButton = document.createElement('div');

        this.itemLink = '';
        this.itemButton.innerHTML = 'View';
        this.itemButton.addEventListener('click',()=>{
            window.open('https://www.google.com','mywindow');
        });

        this.itemContainer.className = 'itemContainer';
        this.itemButton.className = 'itemButton';

        this.itemContainer.appendChild(this.itemButton);
    
    }
    setClassName(className:string){
        this.itemContainer.className = className;
    }
    getClassName(){
        return this.itemContainer.className;
    }

    render(){
        return this.itemContainer;
    }
}

export {SliderItem};