/**
 * Created by peter on 8/6/15.
 */


var Reflux = require('reflux')


var QuizAction = Reflux.createActions({

    'choiceSelected':{},
    'getResult':{},
    'testAction':{},
    'sendResult':{},
    'showProgress': {}


});


module.exports = QuizAction;