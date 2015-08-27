

var React = require('react');
var QuizAction = require('../action/actions');



var Choice = React.createClass({




    propsType:{
        choice_text : React.PropTypes.string.isRequired,
        question : React.PropTypes.string.isRequired
    },

    handleClick : function (event) {
        var _answer = event.target.value.trim();
        var _question = React.findDOMNode(this.refs.hidden_value).value;
        QuizAction.choiceSelected(_question, _answer);
    },

    componentDidMount: function () {

    },

    render : function () {
        return(
            <div className="acoounttype">
                <input type="radio" id={this.props.choice_text} name="group1" className="radio" value={this.props.children} onClick={this.handleClick} />
                <label htmlFor={this.props.choice_text} className="radio">{this.props.children}</label>
                <input type="hidden" ref="hidden_value" value={this.props.question}/>
            </div>
        );
    }
});

module.exports = Choice;