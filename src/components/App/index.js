import React, {Component} from 'react'

// styles
import '../../assets/stylus/App.styl'

// components
import Card from '../Card'
import NewsForm from '../NewsForm'
import Footer from '../Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header>
          <div className='container'>
            header
          </div>
        </header>
        <section className='cards'>
          <div className='container'>
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <NewsForm />
        <Footer />
      </div>
    )
  }
}

export default App
