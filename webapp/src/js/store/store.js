/**
 * This stores the state of our
 * React action
 * Created by peter on 8/9/15.
 */


var React = require('react');
var Reflux = require('reflux');
var QuizAction = require('../action/actions');
var db = new  (require('../component/LocalStorageCache'))(localStorage, JSON);
var SendMail = new (require('../report/SendMail'))();
var ProgressBar = require('progressbar.js');

var element = document.getElementById('example-animation-container');
//var circle = new ProgressBar.Circle(element, {
//    color: '#FCB03C',
//    strokeWidth: 3,
//    trailWidth: 1,
//    duration: 1500,
//    text: {
//        value: '0'
//    },
//    step: function(state, bar) {
//        bar.setText((bar.value() * 100).toFixed(0));
//    }
//});


var QuizStore = Reflux.createStore({

    listenables:[QuizAction],


    onChoiceSelected: function (question, answer) {
        console.log("Store for Selected choice  Called");
        db.insert(question, answer);
    }
    ,
    
    onTestAction : function (result) {
        //window.alert("Store Called  " + result);
    },
    
    onGetResult : function () {
        console.log("Getting Result Stored Called ");
        console.log(db.get_all());
    },
    
    onSendMail : function (to, subject, body) {
        SendMail.transport(to,subject,body);
    },
    
    onShowProgress : function () {
        //circle.animate(1, function() {
        //    circle.animate(0);
        //})
    }
});

module.exports = QuizStore;