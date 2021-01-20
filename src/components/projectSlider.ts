
import '../styles/projectslider.scss';
import {SliderItem} from './sliderItem';

class ProjectSlider{

    cont: HTMLElement;
    slider: HTMLElement;
    sliderItems: any[];
    nextButton:HTMLElement;
    prevButton:HTMLElement;
    itemDisplay: any[];
    itemHolder: any[];

    constructor(){
        this.cont = document.createElement('div');
        this.nextButton = document.createElement('div');
        this.slider = document.createElement('div');
        this.prevButton = document.createElement('div');
        this.sliderItems =[];
        this.itemDisplay = [];
        this.itemHolder = [];

        
        this.nextButton.innerHTML = "N";
        this.prevButton.innerHTML = "P";
        

        this.cont.className = 'contentSlider';
        this.slider.className = 'slider';
        this.nextButton.className = 'next';
        this.prevButton.className = 'prev';

        

        this.fillCarousel();
        this.fillArrays();
        console.log(this.itemDisplay);
        console.log(this.itemHolder);
        this.createCarousel();

        

        
        
        
        

        this.nextButton.addEventListener('click',()=>{
            this.changeNext();
        });
        this.prevButton.addEventListener('click',()=>{
            this.changePrev();
        })

        

        this.cont.appendChild(this.prevButton);
        this.cont.appendChild(this.slider);
        this.cont.appendChild(this.nextButton);
        
    }

    fillCarousel(){
        
        for(let i = 0; i<5;i++){
            let item = new SliderItem();
            
            item.itemButton.innerHTML = `${i}`;
            item.itemLink = `${i}`;
            this.sliderItems.push(item);
        }
        
    }
    fillArrays(){
        this.sliderItems.forEach(e => {
            if(this.itemDisplay.length === 3){
                this.itemHolder.push(e);
            }else{
                this.itemDisplay.push(e);
            }
            
        });

    }
    createCarousel(){
        this.itemDisplay.forEach(e => {
            this.slider.appendChild(e.render());
        });
    }
    animationNext(){
        let cName = 'itemContainer';
        console.log(this.sliderItems);
        this.sliderItems.forEach(e => {
            
            e.setClassName(cName+' itemAnimation');
        });
        setTimeout(()=>{
            this.sliderItems.forEach(e => {
                e.setClassName(cName);
            });
        },1000);
        
    }
    changeNext(){
        
        this.itemHolder.push(this.itemDisplay.pop());
        this.itemDisplay.unshift(this.itemHolder.shift());
        this.slider.removeChild(this.itemHolder[this.itemHolder.length-1].render());
        this.itemDisplay.forEach((e,i) => {
            e.itemContainer.style.order = i;
        });
        this.slider.appendChild(this.itemDisplay[0].render());
    }
    changePrev(){
        this.itemHolder.unshift(this.itemDisplay.shift());
        this.itemDisplay.push(this.itemHolder.pop());
        this.slider.removeChild(this.itemHolder[0].render());
        this.itemDisplay.forEach((e,i)=>{
            e.itemContainer.style.order = i;
        });
        this.slider.appendChild(this.itemDisplay[this.itemDisplay.length -1].render());
    }


    render(){
        return this.cont;
    }
}
export {ProjectSlider};