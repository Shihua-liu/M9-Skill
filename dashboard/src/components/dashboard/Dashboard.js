import React from "react"

import Popup from "../popup/popup"
import LeftPane from "../LeftPane/LeftPane"
import RightPane from "../RightPane/RightPane"

import productsobject from "../data/products"
import navitemsobject from "../data/navitems"

import chooseimage from "../../helpers/chooseimg"

import "./Dashboard.css"


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { productCards: [], open: true, cardclicked: {}, editmode: false };
    }

    onButtonclicked = () => {
        this.setState({ open: !this.state.open })
    }

    componentDidMount() {

        this.setState({ productCards: productsobject.products })
    }


    addbuttonclicked = (inputfrompopup) => {



        let imgfromhelper = chooseimage(inputfrompopup)

        let tobeadded = [
            {
                id: this.state.productCards.length + 1,
                name: inputfrompopup,
                img: imgfromhelper
            }
        ]

        let mergedarray = this.state.productCards.concat(tobeadded)
        this.setState({
            productCards: mergedarray,
            open: !this.state.open,
        })
    }

    oncardclicked = (idfromcard) => {
        if (!this.state.productCards[idfromcard - 1].name === "placeholder") {
            this.setState({ editmode: true })
        }
        else {
            this.setState({
                editmode: false,

            })
        }
        this.setState({
            editmode: true,
            open: !this.state.open,
            cardclicked: this.state.productCards[idfromcard - 1],
        })
    }
        render() {
            
            if (this.state.open === true) {
                return (

                    <article className="dashboard">
                        <LeftPane navitems={navitemsobject.navitems} btntxt="PREMIUM" />
                        <RightPane onproductcardclicked={this.oncardclicked} onButtonclick={this.onButtonclicked} productCards={this.state.productCards} headertext="Mijn producten" buttonsymbol="+" buttontext="Voeg product toe" />
                    </article>
                )
            }
            return (
                <Popup editmode={this.state.editmode} cardclicked={this.state.cardclicked} addbuttonclicked={this.addbuttonclicked} />
            )
        }
    }

export default Dashboard