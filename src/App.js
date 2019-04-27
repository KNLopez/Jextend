import React from 'react';
import BrowserRouter, { Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Projects from './components/Projects'
import './main.less';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Route exact path ={process.env.PUBLIC_URL + '/'} component={ Projects } />
      </div>
    </BrowserRouter>
  );
}

export default App;
