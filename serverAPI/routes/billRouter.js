const express = require('express'),
 app = express(),
 routes = express.Router(), 
 billModel = require('../model/billData');
// Defined store route
console.log("1");



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

routes.route('/viewBills')
.get((req, res) => {
  console.log(4);
   
  billModel.find({}).then((billData)=>{
      res.json(billData);
  }).catch(err =>{
    res.status(400).send('Some Error occured ! Try Later :) ');
  })
});



module.exports = routes;

