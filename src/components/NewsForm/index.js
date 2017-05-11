import React from 'react'

const NewsForm = ({handleSubmit, handleChange}) => (
  <section className='news'>
    <h3>Receba as melhores cotações via email</h3>
    <div className='container'>
      <div className='news-form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>nome:</label>
          <input onChange={handleChange} type='text' id='name' name='name' required />
          <label htmlFor='email'>email:</label>
          <input onChange={handleChange} type='email' id='email' name='email' required />
          <div className='submit-block'>
            <button type='submit'>Quero receber as cotações via email</button>
          </div>
        </form>
      </div>
    </div>
  </section>
)

export default NewsForm
