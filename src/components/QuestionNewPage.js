import React, {Component} from 'react';
import {QuestionForm} from './QuestionForm';
import {Question} from '../requests/questions';

class QuestionNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newQuestion: {
        title: "",
        body: ""
      },
      validationErrors: []
    };

    this.createQuestion = this.createQuestion.bind(this);
    this.updateNewQuestion = this.updateNewQuestion.bind(this);
  }

  updateNewQuestion (data) {
    const {newQuestion} = this.state;

    this.setState({
      newQuestion: {...newQuestion, ...data}
    });
  }

  createQuestion () {
    const {history} = this.props;
    const {newQuestion} = this.state;
    Question
      .create(newQuestion)
      .then(data => {
        if (data.errors) {
          this.setState({
            validationErrors: data.errors.filter(e => /RecordInvalid/.test(e.type))
          });
        } else {
          const {id} = data;
          history.push(`/questions/${id}`)
        }
      });
  }

  render () {
    const {validationErrors, newQuestion} = this.state;

    return (
      <main
        className="QuestionNewPage"
        style={{padding: '0  20px'}}
      >
        <h2>Questions</h2>
        <QuestionForm
          errors={validationErrors}
          question={newQuestion}
          onChange={this.updateNewQuestion}
          onSubmit={this.createQuestion}
        />

      </main>
    );
  }
}

export {QuestionNewPage};
