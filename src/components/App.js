import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import List from './List'
import Photo from './Photo'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="hero">
          <div className="hero-body">
            <Route exact path="/" component={List} />
            <Route path="/photo/:id" component={Photo} />
          </div>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
