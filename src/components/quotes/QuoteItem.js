import classes from './QuoteItem.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const QuoteItem = (props) => {
  return (
    <React.Fragment>
      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.text}</p>
          </blockquote>
          <figcaption>{props.author}</figcaption>
        </figure>
        <Link className='btn' to={`/quotes/${props.id}`}>
          View Full 
      </Link>
      </li>
    </React.Fragment>
  );
};

export default QuoteItem;
