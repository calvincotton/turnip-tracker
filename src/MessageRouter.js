const actions = require('./Actions.js');

const handleSubscribe = (message) => {
  const username = message.author.username;
  const subscribedMessage = `Signing up ${username} for the Turnup Tracker...`;
  message.channel.send(subscribedMessage).catch(console.log);
};

const handleEcho = (message) => {
  const echo = message.content.replace(actions.ECHO, '').trim();
  message.channel.send(echo).catch(console.log);
};

const getCommand = (message) => {
  const trimmed = message.content.trim();
  const command = trimmed.split(' ')[0].toLowerCase();
  return command;
};

exports.route = (message) => {
  switch(getCommand(message)) {
    case actions.SUBSCRIBE:
      handleSubscribe(message);
      break;

    case actions.ECHO:
      handleEcho(message);
      break;

    default:
      break;
  }
};
