var express = require("express");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("localhost:8080/mean");

var Schema = mongoose.Schema;
var commentSchema = new Schema({
    author: String,
    text: String
});
var Comment = mongoose.model("Comment", commentSchema);