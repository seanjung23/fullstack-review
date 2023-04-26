import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    var request = {
      username: term
    };

    $.ajax({
      method: 'POST',
      url: '/repos',
      data: JSON.stringify(request), //do some json stuff
      contentType: 'application/json' //define app/json
    }).done(() => {
      console.log('done');
    }).fail((error) => {
      console.error(error);
    });

    console.log(`${term} was searched`);
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));