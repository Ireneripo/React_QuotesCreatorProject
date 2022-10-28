import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Juan', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Pedro', text: 'Learning React is great!' },
  { id: 'q3', author: 'Laura', text: 'Learning React is awesome!' },
  { id: 'q4', author: 'Ana', text: 'Learning React is amazing!' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
