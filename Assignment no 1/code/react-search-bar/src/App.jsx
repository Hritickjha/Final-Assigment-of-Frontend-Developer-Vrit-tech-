import { useState } from "react";

import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import { SearchResultsList } from "./Components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;
