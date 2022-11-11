import React from "react"

import Question from "../Question/Question"

import questions from "../data/questions";

import { withRouter } from "react-router-dom"

class questionsrouter extends React.Component {

    constructor(props) {
        super(props);
        this.mynumber = this.props.match.params.number
        this.state = { questions: [] }
    }

    componentDidMount() {
        this.setState({ questions: questions })
    }

    onrate = (rating, number) => {
        let oldState = this.state.questions
        let newState = oldState.map(question => {
            if (question.number === number) {
                question.rating = rating
                return question
            }
            return question
        })

        this.setState({question: newState})
    }

    render() {
        this.mynumber = this.props.match.params.number
        let questiontoberendered = this.state.questions.map(questionobject => {
            if (this.mynumber == questionobject.number) {
                return <Question 
                onLast={ () => this.props.onLast(this.state.questions)} 
                last={questionobject.last} 
                onrate={this.onrate} 
                previous={questionobject.previous} 
                next={questionobject.next} 
                number={questionobject.number} 
                key={questionobject.number} 
                question={questionobject.question} 
                rating={questionobject.rating} />
            }
        })


        return (
            <>
                {questiontoberendered}
            </>
        )
    }
}

export default withRouter(questionsrouter);