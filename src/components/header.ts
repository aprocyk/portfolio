
class HeaderPart {
    container: HTMLElement;
    text1: HTMLElement;
    text2: HTMLElement;
    text3: HTMLElement;
    constructor(){
        this.container = document.createElement("div");
        this.text1 = document.createElement("div");
        this.text2 = document.createElement("div");
        this.text3 = document.createElement("div");

        this.container.className = "headerContainer";
        this.text1.className = "headerText1";
        this.text2.className = "headerText2";
        this.text3.className = "headerText3";

        this.text1.innerHTML = "Adam Procyk";
        this.text2.innerHTML = "Student of WSEI";
        this.text3.innerHTML = "Aspiring to be Front-End Developer";

        this.container.appendChild(this.text1);
        this.container.appendChild(this.text2);
        this.container.appendChild(this.text3);
    }

    render(){
        return this.container;
    }
}
export {HeaderPart};