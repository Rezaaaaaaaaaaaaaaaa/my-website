import React from 'react';
import { Link } from 'react-router-dom';
import './ProcessUnitPage.css';

const ProcessesPage = () => (
  <div className="process-unit-page">
    <h1>Process Units by Category</h1>
    <h2>Chemical Processes</h2>
    <ul>
      <li><Link to="/reactor">Reactor</Link></li>
      <li><Link to="/distillation">Distillation Column</Link></li>
    </ul>
    <h2>Physical Separation</h2>
    <ul>
      <li><Link to="/separator">Separator</Link></li>
    </ul>
    <h2>Heat Transfer</h2>
    <ul>
      <li><Link to="/heat-exchanger">Heat Exchanger</Link></li>
    </ul>
    <h2>Biological Treatment</h2>
    <ul>
      <li><em>Coming soon...</em></li>
    </ul>
  </div>
);

export default ProcessesPage;
