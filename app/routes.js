var MailController  = require('./controllers/mail');

module.exports = function(app, io) {

    // =====================================
    // HOME PAGE
    // =====================================
    // index page 
    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    
};