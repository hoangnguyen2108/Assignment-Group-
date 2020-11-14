let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let SurveyModel = require('../models/surveys');


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
  
    SurveyModel.TFQS.remove({_id: id}, function(err) {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the Survey list
            res.redirect('/survey');
        }
    });

    
  }

  module.exports.performDeleteMC = (req, res, next) => {
    let id = req.params.id;
    SurveyModel.MCQS.remove({_id: id}, function(err) {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the Survey list
            res.redirect('/survey');
        }
    });
}
