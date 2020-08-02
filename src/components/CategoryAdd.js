import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CategoryAdd = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputValue = event => setInputValue(event.target.value) 

  const handleSubmit = event => {
    event.preventDefault()
    if(inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        autoFocus={true}
        placeholder="¿Qué estas buscando?"
        onChange={handleInputValue}/>
    </form>
  )
}

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}
