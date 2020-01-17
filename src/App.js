import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import {fetchCats} from './services/data.service';

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats()
      .then(cats => setCats(cats));
  }, []);


  const getCat = (id) => {
    return cats.find(c => c.id === id);
  };

  return (
    <Router>
      <div className="App">
        <Header/>
        <main className="App-main">
          <Switch>
            <Route path="/profile/:id" render={() => <ProfilePage getCat={getCat}/>}/>
            <Route path="/" render={() => <HomePage cats={cats}/>}/>
            <Route render={() => 'Page not found'}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
