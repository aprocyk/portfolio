import '../styles/graph.scss';
import { Svg, SVG, SvgType } from '@svgdotjs/svg.js'


class Graph {
    containerGraph: any;
    graph: Svg;
    delay: number;
    constructor(){
        this.containerGraph = document.createElement('div');
        this.delay = 0;
        
        this.graph = SVG().addTo(this.containerGraph).size(700, 400).addClass('graph');

        

        this.createBar(120,350,'orange','HTML5','src/img/htmllogo.png','intermediate');
        this.createBar(190,350,'blue','CSS3','src/img/csslogo.png','intermediate');
        this.createBar(260,350,'yellow','JS','src/img/jslogo.png','intermediate');

        this.createLine(100,350,690,350,'lineX');
        this.createLine(100,350,100,10,'lineY');

        this.createLabels();

    }

    createLine(x1:number,y1:number,x2:number,y2:number, className:string){
        let line = this.graph.line(x1,y1,x2,y2).addClass('grid '+className);

    }

    createLabels(){
        let group = this.graph.group();

        let label1 = this.graph.text('Begginer').move(30, 280).addClass('begginer');
        let label2 = this.graph.text('Intermediate').move(5, 160).addClass('intermediate');
        let label3 = this.graph.text('Expert').move(45, 40).addClass('expert');
        
        group.add(label1);
        group.add(label2);
        group.add(label3);
        
    }

    createBar(xPos:number, yPos:number,fill:string, label:string,imagePath:string, level:string){
        let group = this.graph.group();
        let bounding = this.containerGraph.getBoundingClientRect().bottom;
        let del = this.delay;
        let rectHeight = 20;
        switch(level){
            case 'expert':
                rectHeight = 300;
                break;
            case 'intermediate':
                rectHeight = 180;
                break;
            case 'begginer':
                rectHeight = 60;
                break;
            default:
                rectHeight = 20;
        }

        let bar = this.graph.rect(30,20).move(xPos,yPos).addClass('bar bar'+label);
        bar.rotate(180,xPos+15,yPos);
        bar.attr({fill: fill})
        window.addEventListener('scroll', scroller);
        
        function scroller(){
            let offset = bounding - document.body.getBoundingClientRect().bottom;
            let position = bounding - (offset);
            if(window.scrollY - position >= 0){
                bar.animate({
                    duration:2000,
                    delay:200 + del,
                    ease:'>'
                }).height(rectHeight);
                // setTimeout(()=>{
                //     if(bar.height() > 280){
                //         bar.animate({
                //             duration:500,
                //             delay:200,
                //             ease:'>'
                //         }).attr({fill: 'red'})
                //     } else if(bar.height() > 50 && bar.height() < 160){
                //         bar.animate({
                //             duration:500,
                //             delay:200,
                //             ease:'>'
                //         }).attr({fill: 'green'})
                //     } else if (bar.height() > 150 && bar.height() < 280){
                //         bar.animate({
                //             duration:500,
                //             delay:200,
                //             ease:'>'
                //         }).attr({fill: 'red'})
                //     }
                // },2200 + del);
                window.removeEventListener('scroll', scroller);
            }
        }
        
        if(bar.height() == 120){
            console.log('bork');
        }
        this.delay += 2200;
        let img = this.graph.image(imagePath).size(35,35).move(xPos -3,yPos + 5).addClass('label'+label);
        // let lab = this.graph.text(label).move(xPos - 10,yPos + 20).addClass('label'+label);
        group.add(bar);
        group.add(img);
    }

    render(){
        return this.containerGraph;
    }
}

export {Graph};