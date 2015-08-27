var React = require('react');
var Choice = require('../component/Choice');
var QuizAction = require('../action/actions');
var Reflux = require('reflux');


var Question = React.createClass({
    propsType: {

        choices: React.PropTypes.array.isRequired,
        question_text : React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        console.log("Question Mounted");
    },
    render: function () {
        var _q_t = this.props.question_text;
        var choice = this.props.choices.map(function (item, key) {
            return (<Choice question={_q_t} choice_text={"test"+key}>{item}</Choice>)
        });
        return (

                <form>
                    {this.props.question_text}
                    <br/>
                    <br/>
                    {choice}
                </form>

        )
    }
});

module.exports = Question;
