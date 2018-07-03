var mongoose = require('mongoose');
var {Create_acc} = require('./account/account_schema');


var newacc_fun =function(req,res) {

        var newuser= new Create_acc({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            date_of_join: new Date()
        });
        newuser.save().then((doc)=>{
            res.status(201).send(doc);
        },
        (e)=>{
            res.status(401).send(e);
        }); 
	};
module.exports = newacc_fun;
