import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Home = () => {
  return (
    <div>
      <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
        <h2>{'TutsPlus - Welcome to React Animations'}</h2>
      </ReactCSSTransitionGroup>
    </div>
  );
};

render(
  <Home />,
  document.getElementById('app')
);


ReactDOM.render(<App />, document.getElementById('app'));
