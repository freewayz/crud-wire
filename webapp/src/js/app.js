/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');

var QuizUI = require('./component/QuizUI');
var QuizStore = require('./store/store');


var QuizApp = React.createClass({

    mixins : [Reflux.connect(QuizStore, "quizStore")],


    render: function () {
        return(
            <div>
                <QuizUI/>
            </div>
        )
    }
});

React.render(<QuizApp/> , document.getElementById('main-app'));