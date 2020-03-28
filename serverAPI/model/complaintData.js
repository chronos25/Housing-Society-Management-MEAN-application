
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let complaints = new Schema({
  
societyMemberId:{
        type:String,
        required: true
    },
    subject: {
    type: String,
    required: true
  },
  complaintBody:{
      type: String,
      required: true
  }
},{
  timestamps: true
});

module.exports = mongoose.model('complaints', complaints);