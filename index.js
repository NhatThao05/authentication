var express = require('express')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var authRoute = require('./routes/auth.route');

var userRoute = require('./routes/user.route'); 
var port = 3000;

var app = express()
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('public'));


app.get('/', function(req, res) {
	res.render('index',{
		name: 'Lam Dai Quang'
	})
});

app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, function() {
	console.log('Server listening on port' + port)
});











