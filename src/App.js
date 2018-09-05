import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header/>
        <MainContent/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App
