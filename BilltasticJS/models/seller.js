var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose');

var Seller = new Schema({
	name: String,
	email: String,
	username: String,
	password: String
});

Seller.plugin(passportLocalMongoose);

module.exports = mongoose.model("Seller", Seller);