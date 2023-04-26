const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  // console.log('this is getrepos req', req);
  let options = {
    method: 'get',
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios(options)
    .then((response) => {
      return callback(response.data);
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports.getReposByUsername = getReposByUsername;