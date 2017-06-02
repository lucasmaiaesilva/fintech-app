// import React from 'react'
// import {mount} from 'enzyme'
// import {expect} from 'chai'
// import sinon from 'sinon'
// import App from '../src/components/App'
// import Header from '../src/components/Header'
// import Card from '../src/components/Card'
// import NewsForm from '../src/components/NewsForm'
// import Footer from '../src/components/Footer'
//
// describe('<App />', () => {
//   it('should render all sub-components', () => {
//     const wrapper = mount(<App />)
//     const before = wrapper.containsAnyMatchingElements([
//       <Header />,
//       <Card />,
//       <NewsForm />,
//       <Footer />
//     ])
//   })
//
//   it('should call componentDidMount once', () => {
//     sinon.spy(App.prototype, 'componentDidMount')
//     mount(<App />)
//     expect(App.prototype.componentDidMount.calledOnce).to.be.equal(true)
//   })
//   it('should renderCards be a function', () => {
//     sinon.spy(App.prototype, 'renderCards')
//     mount(<App />)
//     expect(App.prototype.renderCards).to.be.a('function')
//   })
// })
