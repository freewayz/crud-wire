/**
 * Created by peter on 8/27/15.
 */



SendMail = function () {
};



SendMail.prototype ={
    transport : function (to, subject, body) {
        window.open('mailto:' + this.to + '?subject=' + this.subject + '&body= ' + this.body);
    }
};

module.exports = SendMail;