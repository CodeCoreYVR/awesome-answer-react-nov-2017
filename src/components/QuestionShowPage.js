import React, {Component} from 'react';
// When you're not export a default from a module
// (e.g. export {QuestionDetails, AnswerDetails}),
// you must braces after `import` to choose the values
// that you are import from the module.
import {QuestionDetails} from './QuestionDetails';
import {AnswerList} from './AnswerList';
import question from '../data/question';

class QuestionShowPage extends Component {
  // When you create your own constructor, you overwrite
  // the constructor in the parent class, Component.
  // The parent constructor must still be called which
  // is we super(props) as first line of code inside
  // our constructor.

  // We use constructor primarily to set an initial state
  // for our component.
  constructor (props) {
    super(props);

    this.state = {
      question: question
    };
  }

  render () {
    const {answers = []} = this.state.question;
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
        <QuestionDetails {...this.state.question} />
        <h3>Answer</h3>
        <AnswerList answers={answers} />
      </main>
    );
  }
}

export {QuestionShowPage};
