'use strict';

// Make sure to install these dependencies!
var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var sequelize = require('sequelize');
var db = new sqlite3.Database('db.sqlite');
var expressValidator = require("express-validator");

var app = express();
db.serialize();

// Set views path, template engine and default layout
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');


// The request body is received on GET or POST.
// This middleware just simplifies things a bit.
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
    extended: true
}));


// Get the index page:
app.get('/', function(req, res) {
    res.render('index', {  // Note that .html is assumed.
    	errors: ''
    });
});



app.get('/createRecipe', function(req, res) {
    res.render('createRecipe', {  // Note that .html is assumed.
    	errors: ''
    });
});

app.get('/start', function(req, res) {
    res.render('firstStep', {  // Note that .html is assumed.
    	errors: ''
    });
});


app.get('/Cookwares', function(req, res) {
    res.render('Cookwares', {  // Note that .html is assumed.
    	errors: ''
    });
});

app.get("/Ingredients", function(req, res) {
    res.render('Ingredients', {  // Note that .html is assumed.
    	errors: ''
    });
});

app.get("/loginPage", function(req, res) {
    res.render('Login', {  // Note that .html is assumed.
        errors: '',
        text: ''
    });
});
app.get("/signupPage", function(req, res) {
    res.render('SignUp', {  // Note that .html is assumed.
    	errors: ''
    });
});

app.get("/contactUs", function(req, res) {
    res.render('Contact', {  // Note that .html is assumed.
    	errors: ''
    });
});

app.post('/signup', function(req, res) {
	var username = req.body.username;
	var password = req.body.pword;
	var email = req.body.email;

	db.all("SELECT username FROM users WHERE username = ?", [username],
        function(err, rows) {
        if (err) {
            console.log(err);
            res.render('index', {  // Note that .html is assumed.
       	 		errors: ''
    		});
        } else if (rows.length > 0) {
            // user already exist
            console.log('This username has already existed')
            res.render('index', {  // Note that .html is assumed.
        		errors: ''
    		});

        } else {
            db.run("INSERT INTO 'users' (username, password, " +
            "email) VALUES (?, ?, ?)",
            [username, password, email], function (err) {
                console.log(err);
            });
            console.log('success');
            res.render('index', {  // Note that .html is assumed.
       			errors: ''
    		});
        }
    });

});


app.post('/login', function(req,res) {
	var username = req.body.username;
	var password = req.body.pword;
	console.log(username + ", " + password);
	var query = "SELECT * FROM users WHERE users.username = '" + username +"'";
	console.log(query);
	db.all(query, function(err, rows) {
        if (err) {
           console.log("err");
           res.render('Login', {  // Note that .html is assumed.
        		text: err
    	   });
        } else if(!rows || rows.length > 1) {
            // cannot find this user
            console.log("can't find");
            res.render('Login', {  // Note that .html is assumed.
        		text: 'No such user!',

    	    });
        } else if (rows.length === 1 && password === rows[0].password) {
                /* signin successfully */
            console.log("success");
            res.render('indexLogin', {  // Note that .html is assumed.
        		text: 'Login Successfully!'
    	    });
        } else {
            /* input incorrect, could be wrong password, username or dob */
            console.log("fail");
            console.log(rows);
           	res.render('Login', {  // Note that .html is assumed.
           		text: 'Incorrect Password or Username!'
    		});
        }
    });

});
function create_user(username, password, email) {


}




var server = app.listen(process.env.PORT || 8000);
