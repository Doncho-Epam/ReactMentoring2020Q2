import React from 'react';
import './App.css';
import MyFunctionalComponent from './components/functionalComponent';
import {MyClassComponent} from './components/classComponent';
import MyReactComponent from './components/reactComponent';
import {MyElement} from './components/reactCreateElement';
import MyPureComponent from './components/pureComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <MyFunctionalComponent />
      <MyClassComponent />
      <MyReactComponent />
      <MyPureComponent />
      {MyElement}
    </div>
  );
}

export default App;
