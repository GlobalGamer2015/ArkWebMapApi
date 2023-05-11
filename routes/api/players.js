require('dotenv').config();
const express = require('express');
const router = express.Router();
const fs = require('fs');
const { RCONClient } = require('rcon.js');

module.exports = function() {
  router.use(express.json());

  router.post('/', function (req,res) {
    res.send({error: "This API end is not in use."});
  })

  router.post('/Aberration', function (req,res) {
    try {
      const players = fs.readFileSync('./data/Aberration.txt', 'utf8');
      res.send({map: "Aberration", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/CrystalIsles', function (req,res) {
    try {
      const players = fs.readFileSync('./data/CrystalIsles.txt', 'utf8');
      res.send({map: "CrystalIsles", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/Extinction', function (req,res) {
    try {
      const players = fs.readFileSync('./data/Extinction.txt', 'utf8');
      res.send({map: "Extinction", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/Fjordur', function (req,res) {
    try {
      const players = fs.readFileSync('./data/Fjordur.txt', 'utf8');
      res.send({map: "Fjordur", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/Genesis1', function (req,res) {
    try {
      const players = fs.readFileSync('./data/Genesis.txt', 'utf8');
      res.send({map: "Genesis1", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/Genesis2', function (req,res) {
    try {
      const players = fs.readFileSync('./data/Genesis2.txt', 'utf8');
      res.send({map: "Genesis2", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/LostIsland', function (req,res) {
    try {
      const players = fs.readFileSync('./data/LostIsland.txt', 'utf8');
      res.send({map: "LostIsland", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/Ragnarok', function (req,res) {
    try {
      const players = fs.readFileSync('./data/Ragnarok.txt', 'utf8');
      res.send({map: "Ragnarok", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/ScorchedEarth', function (req,res) {
    try {
      const players = fs.readFileSync('./data/ScorchedEarth.txt', 'utf8');
      res.send({map: "ScorchedEarth", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/TheCenter', function (req,res) {
    try {
      const players = fs.readFileSync('./data/TheCenter.txt', 'utf8');
      res.send({map: "TheCenter", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/TheIsland', function (req,res) {
    try {
      const players = fs.readFileSync('./data/TheIsland.txt', 'utf8');
      res.send({map: "TheIsland", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  router.post('/Valguero', function (req,res) {
    try {
      const players = fs.readFileSync('./data/Valguero.txt', 'utf8');
      res.send({map: "Valguero", players});
    }
    catch(err) {
      console.log(err)
    }
  });

  return router;
}