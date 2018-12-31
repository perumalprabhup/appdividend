const express = require('express');
const app = express();
const businessRoutes = express.Router();

let Businesss = require('../models/Business');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let business = new Businesss(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
  Businesss.find(function (err, businesses) {
    if (err) {
      console.log(err);
    }

    else {
      res.json(businesses);
    }
  });
});


// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  Businesss.findById(id, function (err, business) {
    res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
  Businesss.findById(req.params.id, function(err, business) {
  if (!business)
    return next(new Error('Could not load Document'));
  else {
      business.person_name = req.body.person_name;
      business.business_name = req.body.business_name;
      business.business_gst_number = req.body.business_gst_number;

      business.save().then(business => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});


businessRoutes.route('/delete/:id').get(function (req, res) {
  Businesss.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
    if (err) {
      res.json(err);
    }
    else {
      res.json('Successfully Removed');
    }
  });
});


module.exports = businessRoutes;
