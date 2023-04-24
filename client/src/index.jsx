import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: JSON.stringify(term), //do some json stuff
      contentType: 'application/json' //define app/json
    });
    console.log(`${term} was searched`);
    // console.log('this is term:', term);
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