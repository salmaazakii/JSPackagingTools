import './divComp.css';
function divComp() {
    const element = document.createElement("div");
    element.innerHTML = "welcome to my first div!";
    element.classList.add('compSt')
    return element;
};

document.body.appendChild(divComp());