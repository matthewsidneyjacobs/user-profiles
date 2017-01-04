var express=require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');


var app = express();


var corsOptions = {
  origin: 'http://localhost:3004'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret:config.sessionSecret}));
app.use(express.static(__dirname + '/public'));


app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriends);



app.listen(3004, function() {
  console.log('listening on port 3004')
})
