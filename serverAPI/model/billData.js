
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let bills = new Schema({
  
societyMemberId:{
        type:String,
        required: true
    },
    electric: {
    type: String,
    required: true
  },
  management:{
      type: String,
      required: true
  }
},{
  timestamps: true
});

module.exports = mongoose.model('bills', bills);
