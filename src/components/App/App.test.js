import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

// describe('App component', () => {
//   it('should render children components', () => {
//     const wrapper = shallow(<App />);
//      expect(wrapper.containsAllMatchingElements([
//       <Header>
//         <h1>SWAPI API</h1>
//       </Header>,
//       <Main />,
//       <Footer />
//     ])).to.eql(true);
//   });
// });
