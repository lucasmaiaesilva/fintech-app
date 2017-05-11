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
      result: [],
      name: 'test',
      email: 'test@beetech.com'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount () {
    this.getCotations('http://demo3643409.mockable.io/quotations')
    // setInterval(this.getCotations('http://demo3643409.mockable.io/quotations'), 1000)
  }
  componentWillUnmount () {
    // clearInterval(this.timerId)
  }
  getCotations (url) {
    this.setState({isFetching: true})
    axios.get(url)
      .then(res => {
        this.setState({
          result: res.data.result,
          isFetching: false
        })
      })
  }
  postNewsForm (url, obj) {
    axios.post(url, obj)
    .then(function (response) {
      alert(`Dados enviados com sucesso, retorno status ${response.status}`)
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
  handleSubmit (e) {
    e.preventDefault()
    // do the logic of submit here
    this.postNewsForm('http://demo3643409.mockable.io/newsletter', {
      name: this.state.name,
      email: this.state.email
    })
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
            <div className='card-line'>
              {this.state.isFetching && <div>Carregando...</div>}
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
