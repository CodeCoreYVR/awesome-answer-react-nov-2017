import React from 'react';
// When you're not export a default from a module
// (e.g. export {QuestionDetails, AnswerDetails}),
// you must braces after `import` to choose the values
// that you are import from the module.
import {QuestionDetails} from './QuestionDetails';
import {AnswerList} from './AnswerList';
import question from '../data/question';

function QuestionShowPage () {
  const {answers = []} = question;
  // To pass props to React elements, set them with
  // "HTML attributes". Each attribute will as a property
  // of the `props` object.

  // When passing props in JSX, any value that
  // is a non-string (e.g. numbers, objects, arrays, functions, etc)
  // must be put inside {}.
  return (
    <main
      className="QuestionShowPage"
      style={{
        padding: '0 20px'
      }}
    >
      {/* I'm a valid comment */}
      <QuestionDetails {...question} />
      <h3>Answers</h3>
      <AnswerList answers={answers} />
    </main>
  );
}

export {QuestionShowPage};
