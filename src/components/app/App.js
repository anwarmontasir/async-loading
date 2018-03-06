import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from '../notes/Notes';
import './App.css';

class App extends Component {

  render() {
    const { loading, error } = this.props;
    return (
      <div className="grid-wrap">
        <header id="main-header" role="banner">
          <h1>App name</h1>
        </header>
        <main id="main-content" role="main">
          <p>{loading ? 'I am loading' : 'I am NOT loading'}</p>
          <Notes />
          { error && 
            <pre style={{ color: 'red ' }}>
              {error.message
                ? error.message
                : error.error ? error.error : error
              }
            </pre>
          }
        </main>
        <footer id="main-footer" role="contentinfo">
          <small>&copy; 2018 this app.</small>
        </footer>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  null
)(App);