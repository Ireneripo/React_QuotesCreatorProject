import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Juan', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Pedro', text: 'Learning React is great!' },
  { id: 'q3', author: 'Laura', text: 'Learning React is awesome!' },
  { id: 'q4', author: 'Ana', text: 'Learning React is amazing!' },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  console.log(match);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quotes found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      />
      <Route
        path={match.path}
        exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
