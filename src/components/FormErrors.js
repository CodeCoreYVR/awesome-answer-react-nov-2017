import React from 'react';

function FormErrors (props) {
  const {forField, errors = []} = props;

  return (
    <ul
      style={{
        color: 'red',
        padding: '0 0 0 1em',
        margin: 0,
        fontSize: '0.8em',
        listStyle: 'circle'
      }}
      className='FormErrors'
    >
      {errors
        .filter(e => e.field === forField)
        .map((e, i) => <li key={i}>{e.message}</li>)
      }
    </ul>
  );
}

export {FormErrors};
