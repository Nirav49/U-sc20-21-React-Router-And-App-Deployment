import React, { useRef, useState } from 'react';
import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './QuoteForm.module.css';
import {Prompt} from 'react-router-dom';

const QuoteForm = (props) => {
  const [focused, setFocused] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setFocused(true);
  }

  return (
    <React.Fragment>
    <Prompt when = {focused} message ={location => 'Be,sure to leave form beacuse it will erase all your entered data'}/>
      <Card>
        <form onFocus={formFocusedHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label >Author</label>
            <input type='text' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label>Text</label>
            <textarea rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
