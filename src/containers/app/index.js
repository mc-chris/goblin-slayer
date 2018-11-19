import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from '../about';
import HeatMap from '../heatmap';
import Home from '../home';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/heatmap">HeatMap</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/heatmap" component={HeatMap} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
