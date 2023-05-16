const express = require('express');
const router = express.Router();
const fs = require('fs');
const { RCONClient } = require('rcon.js');
const cron = require('node-cron');

let jobData = fs.readFileSync('./config.json');
let data = JSON.parse(jobData);

module.exports = function() {

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['Aberration'].Active === true) {
      console.log('Running Job: Aberration')
      try {
        const Aberration = new RCONClient({
          host: data['servers']['Aberration'].IP,
          port: data['servers']['Aberration'].RconPort
        });
        Aberration.login(data['servers']['Aberration'].Password)
        .then(() => {
          Aberration.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFile('./data/Aberration.txt', players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            Aberration.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  });


  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['CrystalIsles'].Active === true) {
      console.log('Running Job: Crystal Isles')
      try {
        const CrystalIsles = new RCONClient({
          host: data['servers']['CrystalIsles'].IP,
          port: data['servers']['CrystalIsles'].RconPort
        });
        CrystalIsles.login(data['servers']['CrystalIsles'].Password)
        .then(() => {
          CrystalIsles.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/CrystalIsles.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            CrystalIsles.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['Extinction'].Active === true) {
      console.log('Running Job: Extinction')
      try {
        const Extinction = new RCONClient({
          host: data['servers']['Extinction'].IP,
          port: data['servers']['Extinction'].RconPort
        });
        Extinction.login(data['servers']['Extinction'].Password)
        .then(() => {
          Extinction.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/Extinction.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            Extinction.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['Fjordur'].Active === true) {
      console.log('Running Job: Fjordur')
      try {
        const Fjordur = new RCONClient({
          host: data['servers']['Fjordur'].IP,
          port: data['servers']['Fjordur'].RconPort
        });
        Fjordur.login(data['servers']['Fjordur'].Password)
        .then(() => {
          Fjordur.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/Fjordur.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            Fjordur.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['Genesis'].Active === true) {
      console.log('Running Job: Genesis')
      try {
        const Genesis = new RCONClient({
          host: data['servers']['Genesis'].IP,
          port: data['servers']['Genesis'].RconPort
        });
        Genesis.login(data['servers']['Genesis'].Password)
        .then(() => {
          Genesis.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/Genesis.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            Genesis.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['Genesis2'].Active === true) {
      console.log('Running Job: Genesis 2')
      try {
        const Genesis2 = new RCONClient({
          host: data['servers']['Genesis2'].IP,
          port: data['servers']['Genesis2'].RconPort
        });
        Genesis2.login(data['servers']['Genesis2'].Password)
        .then(() => {
          Genesis2.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/Genesis2.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            Genesis2.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['LostIsland'].Active === true) {
      console.log('Running Job: Lost Island')
      try {
        const LostIsland = new RCONClient({
          host: data['servers']['LostIsland'].IP,
          port: data['servers']['LostIsland'].RconPort
        });
        LostIsland.login(data['servers']['LostIsland'].Password)
        .then(() => {
          LostIsland.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/LostIsland.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            LostIsland.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['Ragnarok'].Active === true) {
      console.log('Running Job: Ragnarok')
      try {
        const LostIsland = new RCONClient({
          host: data['servers']['Ragnarok'].IP,
          port: data['servers']['Ragnarok'].RconPort
        });
        LostIsland.login(data['servers']['Ragnarok'].Password)
        .then(() => {
          LostIsland.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/Ragnarok.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            LostIsland.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['ScorchedEarth'].Active === true) {
      console.log('Running Job: Scorched Earth')
      try {
        const ScorchedEarth = new RCONClient({
          host: data['servers']['ScorchedEarth'].IP,
          port: data['servers']['ScorchedEarth'].RconPort
        });
        ScorchedEarth.login(data['servers']['ScorchedEarth'].Password)
        .then(() => {
          ScorchedEarth.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/ScorchedEarth.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            ScorchedEarth.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['TheCenter'].Active === true) {
      console.log('Running Job: The Center')
      try {
        const TheCenter = new RCONClient({
          host: data['servers']['TheCenter'].IP,
          port: data['servers']['TheCenter'].RconPort
        });
        TheCenter.login(data['servers']['TheCenter'].Password)
        .then(() => {
          TheCenter.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/TheCenter.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            TheCenter.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['TheIsland'].Active === true) {
      console.log('Running Job: The Island')
      try {
        const TheIsland = new RCONClient({
          host: data['servers']['TheIsland'].IP,
          port: data['servers']['TheIsland'].RconPort
        });
        TheIsland.login(data['servers']['TheIsland'].Password)
        .then(() => {
          TheIsland.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/TheIsland.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            TheIsland.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  cron.schedule("*/30 * * * * *", function() {
    if (data['servers']['Valguero'].Active === true) {
      console.log('Running Job: Valguero')
      try {
        const Valguero = new RCONClient({
          host: data['servers']['Valguero'].IP,
          port: data['servers']['Valguero'].RconPort
        });
        Valguero.login(data['servers']['Valguero'].Password)
        .then(() => {
          Valguero.command('ListAllPlayerPos')
          .then(response => {
            var players = response.body.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync("./data/Valguero.txt", players, { encoding: 'utf8', flag: 'w' }, function(err) { if (err) { console.log(err) } });
            Valguero.destroy();
          })
        })
      }
      catch(err) {
        console.log(err) 
      }
    }
  })

  return router;
}