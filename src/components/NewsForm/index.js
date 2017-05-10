import React from 'react'

const NewsForm = () => (
  <section className='news'>
    <div className='container'>
      <form>
        <label htmlFor='name'>nome:</label>
        <input type='text' id='name' />
        <label htmlFor='email'>email:</label>
        <input type='text' id='email' />
        <button type='submit'>Quero receber as cotações via email</button>
      </form>
    </div>
  </section>
)

export default NewsForm
