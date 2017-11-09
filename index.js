var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var consign = require("consign");
var cors = require("cors");

var app = express();

// Permitindo cors
app.use(cors())

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(require('method-override')());


consign({cwd:'app'})
    .include('routes')
    .into(app)

// Dizendo qual a porta em que rodará 
//(process.env.PORT é a porta do Heroku)
app.set('port', (process.env.PORT || 4030));

app.listen(app.get('port'), function(){
    console.log("Acrediar e sonhar sempre é preciso na porta " + app.get('port'));
})
