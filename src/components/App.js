import React from 'react';
// Anywhere you write JSX tags, React must be
// imported, because JSX tags are translated
// to React.createElement(...) calls.
import {QuestionShowPage} from './QuestionShowPage';
import {QuestionIndexPage} from './QuestionIndexPage';
import {NavBar} from './NavBar';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

function App () {
  return (
    <Router >
      <div className="App">
        <NavBar />
        <Route path="/questions" exact component={QuestionIndexPage} />
        <Route path="/questions/:id" component={QuestionShowPage} />
      </div>
    </Router>
  );
}

// import App from './App';
// 👇 will make the value at App available by importing with 👆
// in other files.
export default App;
