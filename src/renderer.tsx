import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
class GMTBlogEditor extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello.</h1>
      </div>
    );
  };
}

ReactDOM.render(
  <React.StrictMode>
    <GMTBlogEditor />
  </React.StrictMode>,
  document.getElementById('root')
);
