import Bimg from "../img/bloem.jpg"
import Cimg from "../img/cola.jpg"
import Lucht from "../img/lucht.jpg"
import Nuts from "../img/nuts.jpg"

function chooseimage(inputfrompopup) {
    let tobeaddedimg;
    switch (inputfrompopup) {
        case ("lucht"):
            tobeaddedimg = Lucht
            break;
        case ("cola"):
            tobeaddedimg = Cimg
            break;
        case ("bloemen"):
            tobeaddedimg = Bimg
            break;
        case ("Nuts"):
            tobeaddedimg = Nuts
            break;
        default:
            tobeaddedimg = Nuts
            break
    }
    return tobeaddedimg
}

export default  chooseimage 

