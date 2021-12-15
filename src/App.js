import React from 'react';
import Login from './components/login/Login';
import {
  BrowserRouter as Router, Route,
} from "react-router-dom";
import Board from "./pages/profile/Board"
import BoardNew from './pages/profile/BoardNew';
import Footer from './components/Footer';
import BoardList from './pages/profile/BoardList';
import './style.css';




function App () {

  return (
    <div className="App">
      <Router>
        <div>
            <Route path='/' component={BoardList} />
            <Route path='/board' component={Board} />
            <Route path='/boardnew' component={BoardNew} />
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}
 
export default App;