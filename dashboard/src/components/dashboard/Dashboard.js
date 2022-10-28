import React from "react"

import Popup from "../popup/popup"
import LeftPane from "../LeftPane/LeftPane"
import RightPane from "../RightPane/RightPane"

import Bimg from "../../img/bloem.jpg"
import Cimg from "../../img/cola.jpg"
import Lucht from "../../img/lucht.jpg"
import Nuts from "../../img/nuts.jpg"

import "./Dashboard.css"


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { productCards: [], open: true, };
    }

    onButtonclicked = () => {
        this.setState({ open: !this.state.open })
    }

    componentDidMount() {
        let productCards = [
            {
                name: "placeholder",
            },

            {
                name: "flowers",
                img: Bimg

            },
            {
                name: "cola",
                img: Cimg
            },

        ];
        this.setState({ productCards: productCards })
    }


    addbuttonclicked = (inputfrompopup) => {
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
        }

        let tobeadded = [
            {
                name: inputfrompopup,
                img: tobeaddedimg
            }
        ]

        let mergedarray = this.state.productCards.concat(tobeadded)
        this.setState({
            productCards: mergedarray,
            open: !this.state.open,
        })
    }

    render() {
        let navitems = [
            {
                name: "Home",
                msg: 0,
            },
            {
                name: "Facture",
                msg: 2,
            },
            {
                name: "bestellingen",
                msg: 3,
            },
            {
                name: "Retour",
                msg: 0,
            },
            {
                name: "contact",
                msg: 1,
            },
        ];
        if (this.state.open === true) {
            return (

                <article className="dashboard">
                    <LeftPane navitems={navitems} btntxt="PREMIUM" />
                    <RightPane onButtonclick={this.onButtonclicked} productCards={this.state.productCards} headertext="Mijn producten" buttonsymbol="+" buttontext="Voeg product toe" />
                </article>
            )
        }
        return (
            <Popup addbuttonclicked={this.addbuttonclicked} />
        )
    }
}

export default Dashboard