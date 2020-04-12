require('dotenv').config();
const router = require('./MessageRouter.js');


const start = client => {
  client.on('message', router.route);

  client.on('ready', _ => {
    console.log('Tracking turnips...');
  });

  client.login(process.env.TOKEN)
    .catch(error => {
      console.log(error);
    });
};


module.exports = {
  start: start
};
