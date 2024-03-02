import './App.css';
import Counter from "./Counter";
import QuoteFetcher from "./QuoteFetcher";
import QuoteButton from "./QuoteButton";
import QuoteFetcherLoader from "./QuoteFetcherLoader";
import ProfileViewerWithSearch from './ProfileViewerWithSearch';

function App() {
  return (
    <div className="App">
      <ProfileViewerWithSearch />
      {/* <QuoteFetcherLoader /> */}
      {/* <QuoteButton /> */}
      {/* <QuoteFetcher /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
