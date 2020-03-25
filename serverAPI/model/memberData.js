
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let memberData = new Schema({
  
societyMemberId:{
        type:String,
        required: true
    },
    person_Name: {
    type: String,
    required: true
  },
  flat_Number:{
    type: Number,
    required: true
  },
  fMember_Name: {
    type: String,
    required:true
  },
  mobile_Number:{
    type: Number,
    required: true
  },
  homeContactNumber:{
      type:Number,
      required: true
  },
  roles:{
      type:String,
      required:true
  } 
},{
  timestamps: true
});

module.exports = mongoose.model('memberData', memberData);