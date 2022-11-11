import "./Question.css"

import React from "react"
import { withRouter, Link } from "react-router-dom"

class Question extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            rating: 0,
        }
    }

    componentDidMount() {
        this.setState({ rating: this.props.rating })
    }

    onstarclicked = (rating) => {
        this.setState({
            rating: rating,
        }, () => {
            this.props.onrate(this.state.rating, this.props.number)
        })
    }


    render() {

        let nextbuttontoberendered = <Link className="question__button" to={this.props.next}> volgende </Link>

        if (this.props.last === true) {
            nextbuttontoberendered = <Link onClick={this.props.onLast} className="question__button" to={this.props.next}> volgende </Link>
        }

        let starsarray = [];
        for (let i = 1; i <= this.state.rating; i++) {
            starsarray.push(<i key={i} onClick={() => this.onstarclicked(i)} className="question__star fa-solid fa-star"></i>)
        }
        for (let i = this.state.rating + 1; i < 6; i++) {
            starsarray.push(<i key={i} onClick={() => this.onstarclicked(i)} className="question__star fa-regular fa-star"></i>)
        }
        return (
            <article className="question">
                <header className="question__header">
                    <h2 className="question__heading">#{this.props.number} {this.props.question}</h2>
                </header>
                <section className="question__section">
                    <p className="question__text">1 = zeer slecht, 5 = super goed</p>
                    <div className="question__stars">
                        {starsarray}
                    </div>
                </section>

                <footer className="question__footer">
                    <Link className="question__button" to={this.props.previous}> terug </Link>
                    {nextbuttontoberendered}
                </footer>
            </article>
        );
    }

}

export default withRouter(Question);