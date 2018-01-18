import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// In React, a function that returns a React element (or JSX)
// is called a "component".

// React component function's names must begin with a capital letter.
function QuestionDetails (props = {}) {
  const {author = {}} = props;

  return (
    // JSX tags are translated into React.createElement() function
    // calls which output React elements.
    <div className="QuestionDetails">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>By {author.full_name}</p>
      <p><strong>View Count:</strong> {props.view_count}</p>
      <p><strong>Created At:</strong> {props.created_at}</p>
      <p><strong>Updated At:</strong> {props.updated_at}</p>
    </div>
  );
}

function AnswerDetails () {
  return (
    <div>
      <p>What kind of idiot picks a password no one can guess?</p>
      <p>By Jon Snow</p>
      <p><strong>Created At:</strong> 2017-01-01</p>
    </div>
  );
}

function QuestionShowPage () {
  // To pass props to React elements, set them with
  // "HTML attributes". Each attribute will as a property
  // of the `props` object.
  return (
    <main className="QuestionShowPage">
      <QuestionDetails
        title="What is your favourite colour?"
        body="Red, magenta, blue, indigo, purple, etc."
        created_at="2017-01-01"
        updated_at="2017-01-01"
        view_count={901}
        author={{full_name: "Jon Snow"}}
      />
      <h3>Answer</h3>
      <AnswerDetails />
    </main>
  );
}

function App () {
  return (
    <QuestionShowPage />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();






// bump
