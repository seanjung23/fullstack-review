const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String, //name
  html_url: String, //html_url
  owner: {
    login: String
  }, //owner.login
  starr: Number, //stargazers_count
  description: String //description
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('this is repos', repos);
  return Repo.insertMany(repos)
    .then((data) => {
    console.log('data saved!');
    return data;
    })
    .catch((error) => {
    console.log('failed saving data!', error);
    })
}

let findTop = () => {
  Repo.find({})
    .sort({stargazers_count: -1})
    .limit(25);
}

module.exports.save = save;
module.exports.findTop = findTop;