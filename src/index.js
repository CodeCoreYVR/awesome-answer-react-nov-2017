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

function AnswerDetails (props) {
  return (
    <div>
      <p>{props.body}</p>
      <p>By {props.author_full_name}</p>
      <p><strong>Created At:</strong> {props.created_at}</p>
    </div>
  );
}

function QuestionShowPage () {
  // To pass props to React elements, set them with
  // "HTML attributes". Each attribute will as a property
  // of the `props` object.

  // When passing props in JSX, any value that
  // is a non-string (e.g. numbers, objects, arrays, functions, etc)
  // must be put inside {}.
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
      <AnswerDetails
        body="Magenta with a tinge of teal"
        author_full_name="Jane Doe"
        created_at="2017-01-01"
      />
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
