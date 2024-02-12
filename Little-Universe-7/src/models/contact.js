const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
   subject:{
       type:String,
       required:true,
         unique: true
   },
   text:{
       type:String,
       required:true,
         unique: true
   }
});

// defining collections //

const Contact = new mongoose.model("Contact", contactSchema);
module.exports = Contact;