
import '../styles/aboutme.scss';

class AboutMe{
    aboutMeContainer: HTMLElement;
    title: HTMLElement;
    text: HTMLElement;
    image: HTMLElement;
    constructor(){
        this.aboutMeContainer = document.createElement("div");
        this.text = document.createElement("div");
        this.image = document.createElement("div");
        this.title = document.createElement("h1");

        this.aboutMeContainer.className = "abtContainer";
        this.text.className = "abtText";
        this.image.className = "abtImage";
        this.title.className = "abtTitle";

        this.text.innerHTML = "Irure amet sint tempor veniam nulla ut quis ad dolore est et dolor aute sunt. Nulla pariatur velit dolor reprehenderit ea minim. Aliquip ullamco tempor sit labore enim incididunt nisi ullamco dolore. Esse fugiat pariatur Lorem enim nisi pariatur sint labore tempor esse non. Commodo et nulla officia labore nostrud enim adipisicing. Deserunt ullamco elit id deserunt minim exercitation nostrud laborum. Aliqua aliqua dolor ea aute tempor ea tempor non amet fugiat anim. Nulla exercitation Lorem ut anim labore officia anim. Labore cillum laboris ullamco voluptate. Consequat aliqua nulla voluptate cupidatat nostrud culpa minim qui proident. Eu magna sunt laborum dolor consequat fugiat reprehenderit velit.Anim dolor ut qui anim deserunt deserunt dolore est adipisicing incididunt mollit deserunt. Quis cupidatat adipisicing consequat incididunt cillum minim ex culpa culpa sunt ipsum tempor fugiat dolor. Aliquip ut dolor irure aliqua adipisicing velit dolor culpa ut enim anim pariatur incididunt culpa. Aute amet culpa cupidatat cupidatat sit. Voluptate aute aliquip laborum ipsum labore. Officia qui non minim minim culpa dolor non do do et do.Fugiat sit cillum nisi velit laboris voluptate nisi minim eiusmod anim commodo veniam exercitation eu. Irure nisi aliquip duis est consequat. Aliquip enim labore pariatur proident. Deserunt aute duis aliquip veniam eiusmod. Ipsum velit nulla pariatur dolore laborum."
        this.title.innerHTML = "O mnie";

        this.aboutMeContainer.appendChild(this.title);
        this.aboutMeContainer.appendChild(this.text);
        this.aboutMeContainer.appendChild(this.image);

    }

    render(){
        return this.aboutMeContainer;
    }
}
export {AboutMe};