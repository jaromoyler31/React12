
import './App.css';
import React, {useState, useEffect} from 'react';
import Loader from './components/Loader';
import FCRouter from './components/FCRouter';



function App() {

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  })

  return <>
    <div className="App">
      { isLoading==true?
        <Loader></Loader>:
        <FCRouter></FCRouter>
      }
  </div>
  </>
}

export default App;
