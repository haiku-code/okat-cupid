import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import {fetchCats} from './services/data.service';

class App extends React.Component {
  state = {
    cats: []
  };

  componentDidMount = () => {
    fetchCats()
      .then(cats => this.setState({cats}));

  };

  getCat = (id) => {
    return this.state.cats.find(c => c.id === id);
  };

  render = () => {
    return (
      <Router>
        <div className="App">
          <Header/>
          <main className="App-main">
            <Switch>
              <Route path="/profile/:id" render={() => <ProfilePage getCat={this.getCat}/>}/>
              <Route path="/" render={() => <HomePage cats={this.state.cats}/>}/>
              <Route render={() => 'Page not found'}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
