import { useState } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import MyWorks from './pages/myWorks'
import About from './pages/about'
import Contact from './pages/contact'
import React, { Component } from 'react';
import Resume from './pages/resume'
import './App.css';
function App() {
  const [status, setStatus] = useState('About')
  function renderPage() {
    if (status === 'About') {
      return <About />
    } else if (status === 'MyWorks') {

      return <MyWorks />
    } else if (status === 'Contact') {
      return <Contact />
    } else if(status==='Resume') {
      return <Resume/>
    }
  }
  return (
    <div className="App">
      <Header setStatus={setStatus} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

