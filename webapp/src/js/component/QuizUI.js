/**
 * Created by peter on 8/19/15.
 */


var React = require('react');
var QuestionModel = require('../model/QuestionModel');
var QuestionData = require('../data/QuestionData');
var Question = require('../component/Question');
var $ = require('jquery');
var ProgressBar = require('../component/QuizProgress');
var QuizAction = require('../action/actions');

var choice = [
    ["A", "B", "C", "D"],
    ["A", "G", "C", "6"],
    ["A", "B", "C", "D"],
    ["A", "ME", "C", "HK"]
];

var question_answer = [
    ["Who is Abdulaziz", "A"],
    ["Who is React", "B"],
    ["Who is Peter", "C"],
    ["Who is Obama", "A"]
];

var submitbtnstyle = {
    display: 'none'
};

var prevbtnstyle = {

    visibility: 'visible'
};

var nextbtnstyle = {

    display: 'inline-block'
};
var QuizUI = React.createClass({


    handleNavigation: function () {
        console.log("called handleNavigation");
    },

    resetForm: function () {

    },
    increment: function () {
        this.resetForm();
        this.setState({
            count: this.state.count + 1
        });
        this.isVisible();
    },

    isVisible: function () {
        console.log( " COUNT " + this.state.count);
        if (this.state.count === 3) {
            this.setState({count : 0});
            submitbtnstyle['display'] = 'inline-block';
            nextbtnstyle['display'] = 'none';
            //nextbtnstyle.visibility = 'hidden';
            this.setState({visible:'hidden'});
        } else {
            console.log(submitbtnstyle.display);
        }

    },

    decrement: function () {
        this.setState({count: this.state.count - 1});
    },

    submitQuiz: function () {
        QuizAction.getResult()
    },

    getInitialState: function () {
        return {
            count: 0,
            visible: 'hidden',
            counter: 0
        }
    },
    componentDidMount: function () {
    },


    render: function () {

        return (
            <div className="testbox">
                <h1>Crud Wire Competition</h1>
                <hr/>
                <Question question_text={question_answer[this.state.count][0]} choices={choice[this.state.count]}/>
                <br/>
                <h3/>
                <div className="buttons">
                    <a onClick={this.decrement} className="button" style={prevbtnstyle}>Prev</a>
                    <a onClick={this.increment} className="button" style={nextbtnstyle}>Next</a>
                    <a onClick={this.submitQuiz} className="button" style={submitbtnstyle}>Submit</a>
                </div>
            </div>

        )

    }
});

module.exports = QuizUI;