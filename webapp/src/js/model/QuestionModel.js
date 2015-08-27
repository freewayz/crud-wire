/**
 * Created by peter on 8/24/15.
 */



var Question = function (question_id ,question_text, question_answer) {

    this.question_id = question_id;
    this.question_text = question_text;
    this.question_answer = question_answer;
};


/**
 * Overiding the object to string method
 * @returns {string}
 */
Question.prototype.toString = function () {
  return "Question ID " + this.question_id + "\nQuestion " + this.question_text + "\nAnswer" + this.question_answer;
};

module.exports = Question;