import React, {Component} from 'react'

// styles
import '../../assets/stylus/App.styl'

// components
import Header from '../Header'
import Card from '../Card'
import Loading from '../utils/loading'
import NewsForm from '../NewsForm'
import Footer from '../Footer'

// actions
import {getCotations, postNewsForm} from '../utils/cotation'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isFetching: false,
      notFound: false,
      result: [],
      name: 'test',
      email: 'test@beetech.com'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async fetchData () {
    this.setState({isFetching: true})
    const url = 'http://demo3643409.mockable.io/quotations'
    let cotations = await getCotations(url)
    this.setState({
      isFetching: false,
      result: cotations.data.result
    })
  }
  componentDidMount () {
    this.fetchData()
    this.timerId = setInterval(
      () => this.fetchData(), 10000
    )
  }
  componentWillUnmount () {
    clearInterval(this.timerId)
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
  handleSubmit (e) {
    e.preventDefault()
    // let url = 'http://demo3643409.mockable.io/newsletter'
    // cotation.postNewsForm(url, {
    //   name: this.state.name,
    //   email: this.state.email
    // }, {
    //   headers: {
    //     autenthication: 'desafiobeetech'
    //   }
    // })
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <div className='App'>
        <Header />
        <section className='cards'>
          <div className='container'>
            {this.state.isFetching && <Loading />}
            <div className='card-line'>
              {this.state.result !== [] && this.renderCards(this.state.result)}
            </div>
          </div>
        </section>
        <NewsForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Footer author='Lucas Maia e Silva' />
      </div>
    )
  }
}

export default App
