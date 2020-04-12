const Discord = require('discord.js');
const client = new Discord.Client();
const tracker = require('./TurnipTracker.js');
tracker.start(client);
