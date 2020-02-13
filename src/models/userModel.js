"use strict";
/************* Modules ***********/
const MONGOOSE = require("mongoose");
const Schema = MONGOOSE.Schema;
/**************************************************
 ************* User Model or collection ***********
 **************************************************/
const userSchema = new Schema({
    email: { type: String, required: true, unique: true, index: true },
    name: { type: String },
    password: { type: String }
});

module.exports = MONGOOSE.model("user", userSchema);
