import React from 'react';
import ReactDOM from 'react-dom';
import { Display } from '@hochoy/cross-framework'

const App = () => {
  return (
    <>
      <h1>Shell application</h1>
      <Display value="npm-installed React Component" />
    </>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));