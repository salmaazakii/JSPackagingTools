;import image from '../../assets/0.png'
import './image.scss'

function imgComp(){
    const pic = document.createElement("img");
    pic.src = image;
    pic.classList.add('bord')
    return pic;
}

document.body.appendChild(imgComp());