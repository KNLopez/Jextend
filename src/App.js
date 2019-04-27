import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Projects from './components/Projects/Projects'
import Topbar from './components/Topbar/Topbar'
import './main.less';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="main">
          <Topbar />
          <Route exact path ={process.env.PUBLIC_URL + '/'} component={ Projects } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
