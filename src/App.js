import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import {StoreProvider} from './store/storeConfig';

const App = () => {


  return (
    <StoreProvider>
      <Router>
        <div className="App">
          <Header/>
          <main className="App-main">
            <Switch>
              <Route path="/profile/:id" component={ProfilePage}/>
              <Route path="/" component={HomePage}/>
              <Route render={() => 'Page not found'}/>
            </Switch>
          </main>
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
