import React, {Component} from 'react'

// styles
import '../../assets/stylus/App.styl'

// components
import Header from '../Header'
import Card from '../Card'
import NewsForm from '../NewsForm'
import Footer from '../Footer'

// actions
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isFetching: false,
      notFound: false,
      result: []
    }
  }
  componentDidMount () {
    this.setState({isFetching: true})
    axios.get('http://demo3643409.mockable.io/quotations')
      .then(res => {
        this.setState({
          result: res.data.result,
          isFetching: false
        })
      })
  }
  renderCards (arr) {
    return arr.map((card, index) => (
      <Card
        key={index}
        name={card.currencyObj.name}
        flag={card.currencyObj.full_flag_image}
        abbreviation={card.currencyObj.abbreviation}
        acronym={card.currencyObj.acronym}
        website={card.currencyObj.website}
        quantity={Number(card.quantity)}
        total_value={Number(card.total_value)}
        />
    ))
  }
  render () {
    return (
      <div className='App'>
        <Header />
        <section className='cards'>
          <div className='container'>
            {this.state.isFetching && <div>Carregando...</div>}
            {this.state.result !== [] && this.renderCards(this.state.result)}
          </div>
        </section>
        <NewsForm />
        <Footer author='Lucas Maia e Silva' />
      </div>
    )
  }
}

export default App
