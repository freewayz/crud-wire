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


/**
 * normally this should be comming from db
 * @type {*[]}
 */
var choice = [
    ["Abuja", "Benue", "Calabar", "Dutse"],
    ["Henry Fayol", "Gorge Hudson", "James Gosling", "Tim Berkley"],
    ["jumia.com", "konga.com", "hotel.ng", "wakanow.com"],
    ["Canada", "London", "Germany", "USA"],
    ["Facebook", "Whatsapp", "Twitter", "Google+"],
    ["Social Networking", "Travelling", "News", "E-Commerce"],
    ["1993", "2001", "2000", "2005"],
    ["Yahoo", "Twitter", "Google Inc", "Facebook"],
    ["2001", "1990", "2011", "2012"]
    ["Mark Zukergberg", "Peter Fayol", "Sim Shagaya", "Larry Page"],
    ["WHO", "German Soldiers", "Japanese Warriors", "American Military"],
    ["Recipe", "Programming Language", "Native Language", "See Plus Plus"],
    ["Larry Tesler", "Thomas Edison", "Nicholas Tesla", "John Bull"]

];

/**
 * The questions and answers this
 * should be comming from DB
 * @type {*[]}
 */
var question_answer = [
    ["Needle Technology Inc is located at which part of Nigeria", "Abuja"],
    ["Who is the founder of the java programming language", "James Gosling"],
    ["Mike Esssien is the CEO of which company", "hotel.ng"],
    ["Google Inc is a company in which part of the World", "USA"],
    ["Which platform is the biggest social networking platform in the world", "Facebook"],
    ["Amazon is known for what", "e-commerce"],
    ["Nigeria enter into the ICT world full as at which year", "2000"],
    ["Larry Page and Sergey  Brin are owners of which company", "Google Inc"],
    ["Which yea did Steve Jobs died", "2011"],
    ["Konga is an ecommerce site owned by", "Sim Shagaya"],
    ["Internet was invented by who","American Military"],
    ["C++ is popularly known as a ", "Programming Language"],
    ["Who is the founder of copy and paste", "Larry Tesler"]
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
        if (this.state.count === choice.length) {
            this.setState({count: 0});
            submitbtnstyle['display'] = 'inline-block';
            nextbtnstyle['display'] = 'none';
            //nextbtnstyle.visibility = 'hidden';
            this.setState({visible: 'hidden'});
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
        //QuizAction.showProgress();
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
                <div>
                    <ProgressBar/>
                </div>

            </div>

        )

    }
});

module.exports = QuizUI;