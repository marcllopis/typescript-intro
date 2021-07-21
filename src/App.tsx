import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import EventButton from './EventButton';
import Input from './Input';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="hello this is title!" age={24} isVisible/>
      <header className="App-header">
        <h1>Main part of the app</h1>
        <Button handleClick={(text) => console.log(text)}/>
        <br />
        <br />
        <EventButton handleEvent={(e) => console.log(e)}/>
        <br />
        <Input />
      </header>
      <Footer
        title={'footer title'}
        subtitle={'some extra text in footer'}
        age={23}
        status={'married'}
        isVisible
        moreText='This is more text default value'
        arrayOfNames={['marc', 'luke']}
      />
    </div>
  );
}

export default App;
