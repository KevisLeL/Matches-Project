const mongoose = require('mongoose');
const HttpError = require('../models/httpError');

const Match = require('../models/match');


const getMatches = async (req, res, next ) => {
  
    let request = {};
    if (req.query.userName) {
      request.userName = req.query.userName;
    } 
    if (req.query.date) {
      request.date = req.query.date
    }
    let matches;
    try {
      matches = await Match.find(request);
    } catch(err) {
      const error = new HttpError('Fetching failed, please try again later', 500);
      return next(error);
    }
  
    res.json({matches: matches.map(match => match.toObject({ getters: true }))});
  };

  const createMatch = async( req, res, next ) => {

    const { userName, result, champion, kills, damage, heal, date } = req.body;

    const createdMatch = new Match({
        userName,
        result,
        champion,
        kills,
        damage,
        heal,
        date
      });
    
      try {
        
        await createdMatch.save();
    
      } catch (err) {
        const error = new HttpError('Creating match failed, try again', 500);
        console.log(err);
        return next(error);
      }
      
      res.status(201).json({match: createdMatch});
    };

    const deleteMatch = async (req, res, next) => {
      const matchId = req.params.mid; 
    
      let match;
      try {
        match = await Match.findById(matchId);
      } catch (err) {
        const error = new HttpError('Something went wrong, could not find match', 500);
        return next(error);
      }
      
      if(!match) {
        const error = new HttpError('Could not find match for that id', 404);
        return next(error);
       }
    
      try {
        await match.remove();
      } catch (err) {
        const error = new HttpError('Something went wrong, could not find match', 500);
        return next(error);
      }
    
      res.status(200).json({message: 'Match succesfully deleted '})
    };


  exports.getMatches = getMatches;
  exports.createMatch = createMatch;
  exports.deleteMatch = deleteMatch;
  