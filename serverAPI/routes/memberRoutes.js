const express = require('express'),
 app = express(),
 routes = express.Router(),
 memberModel = require('../model/memberData');
 billModel = require('../model/billData');
// Defined store route
console.log("1");

routes.route('/addMember')
.get((req,res)=>{
  console.log(2);
  res.status(200).send('Working Bro !!');
})
.post((req, res) =>{
  console.log(req.body.societyMemberId);
  let member = new memberModel({
    societyMemberId: req.body.societyMemberId,
    person_Name: req.body.person_Name,
    flat_Number: req.body.flat_Number,
    fMember_Name: req.body.fMember_Name,
    mobile_Number: req.body.mobile_Number,
    homeContactNumber: req.body.homeContactNumber,
    roles: req.body.roles
  });
  member.save()
    .then((member) => {
      res.status(200).json({'member': 'Added new society member successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


routes.route('/getMember')
.get((req, res) => {
  console.log(4);
   
  memberModel.find({}).then((memberData)=>{
      res.json(memberData);
  }).catch(err =>{
    res.status(400).send('Some Error occured ! Try Later :) ');
  })
});


routes.route('/addBill')
.post((req, res) =>{ 
  let bill = new billModel({
    societyMemberId: req.body.societyMemberId,
    electric: req.body.electric,
    management: req.body.management
  });
  bill.save()
    .then((bill) => {
      res.status(200).json({'bill': 'Added new society bill successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

routes.route('/getBills')
.get((req, res) => {
  console.log(4);
   
  billModel.find({}).then((billData)=>{
      res.json(billData);
  }).catch(err =>{
    res.status(400).send('Some Error occured ! Try Later :) ');
  })
});



module.exports = routes;

