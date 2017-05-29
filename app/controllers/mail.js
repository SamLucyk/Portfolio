

//Your api key, from Mailgun’s Control Panel
var api_key = 'key-4e4790b214933e1aa4e95948655918c1';
var domain = 'sandbox69e51f1ab57d4372b838bb842bb9102f.mailgun.org';
var Mailgun = require('mailgun-js');


var MailModule = function(io){

    // Global local variables
    var io = io;


    // UNPAUSE
    this.send = function(req, res){
        
        console.log("SEND FUNCTION START");

        var fromEmail = req.fromEmail;
        var message = req.msg;
        var name = req.first + ' ' + req.last;
        
        var from = name + ' <' + fromEmail + '>';
        var subject = 'Hey Sam. Message from ' + name + ' on your samlucyk.com!';
        

        var mailgun = new Mailgun({apiKey: api_key, domain: domain});
        
        // HTML Message
        var html = subject + '<p>' + message + '</p>' + '<p>Return email: ' + fromEmail + '<p>';

        var data = {
            from: 'sam.lucyk@gmail.com',
            to: 'sam.lucyk@gmail.com',
            subject: subject,
            html: html
        };
        
        // Send the email
        mailgun.messages().send(data, function (err, body) {

            if( err ){
                console.log("Got an error: ", err);
                return false;
            }else{
                console.log(body);
                return true;
            }

        });
        
        console.log("SEND FUNCTION END");
    };


    return this;


};

module.exports = MailModule;
