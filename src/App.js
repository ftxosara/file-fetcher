import React from 'react';
import './App.css';
import FileFetcher from './components/FileFetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-4">File Fetcher</h1>
      </header>
      <FileFetcher />
    </div>
  );
}

export default App;