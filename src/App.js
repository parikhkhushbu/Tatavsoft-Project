import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from './Components/Title';
import About from './Page/About';
import Counter from './Page/Counter';
import Home from './Page/Home';

const App=()=>{
          return(
            <>
            <Title title="Tatvasoft project"></Title>
            <About></About>
            <Counter></Counter>
            <Home></Home>
            </>
          )
}

export default App;