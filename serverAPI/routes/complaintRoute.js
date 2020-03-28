const express = require('express'),
 app = express(),
 routes = express.Router(),
 complaintModel = require('../model/complaintData');
// Defined store route
console.log("1");

routes.route('/addComplaint')
.get((req,res)=>{
  console.log(2);
  res.status(200).send('Working Bro !!');
})
.post((req, res) =>{ 
  let complaint = new complaintModel({
    societyMemberId: req.body.societyMemberId,
    subject: req.body.subject,
    complaintBody: req.body.complaintBody,
    
  });
  complaint.save()
    .then((complaint) => {
      res.status(200).json({'complaint': 'Added new Complaint successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


routes.route('/viewComplaints')
.get((req, res) => {
  console.log(4);
   
  complaintModel.find({}).then((complaintData)=>{
      res.json(complaintData);
  }).catch(err =>{
    res.status(400).send('Some Error occured ! Try Later :) ');
  })
})

 

module.exports = routes;

