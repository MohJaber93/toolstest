import React from 'react';
import './App.css';
import Error from './Error'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <div className="App">
        <ErrorBoundary>        
           <Error error='notError'/>
          <Error error='error'/>
        </ErrorBoundary>
    </div>
  );
}

export default App;
