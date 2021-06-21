import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Loading from './components/loading'
import Footer from './components/footer'
import About from './components/about'

import './App.css'

const App = () => {
  const [cat, setCat] = useState('');
  const [done, setDone] = useState(undefined);

  const [loading, setLoading] = useState(undefined);


  useEffect(() => {
    getCat();
  }, [])

  const getCat = () => {
    setDone(undefined);
    setLoading(undefined);

    setTimeout(() => {
      fetch('https://aws.random.cat/meow').then(res => res.json()).then(data => {
        setCat(data.file);
        setLoading(true);
        setTimeout(() => {
          setDone(true)
        },900 )
      })
    }, 1000 )
  }

  return (
    <Router>
      <div className='container'>
        <h3 className='title' >Get random Cat images</h3>
        <div className="button-container">
          <button className='cat-button' onClick={getCat} >Get Cat</button>
        </div>
        <div className="cat-container">
          <div className="cat-pic">
          <Route path='/' exact render={() => (
          <>
            { !done ? (
              <Loading loading={loading} />
            ) : (
              <img className='cat-image' src={cat} alt="cat"/>
            ) }
            </>
            )} />
            <Route path='/about' component={About} ></Route>
            <Footer/>
          </div>
        </div>
      </div>
      
    </Router>
  )
}

export default App;