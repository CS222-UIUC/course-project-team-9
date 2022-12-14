import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
 
const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts)

    const resultsArray = posts.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()) || post.class_and_section.toLowerCase().includes(e.target.value.toLowerCase()) || post.description.toLowerCase().includes(e.target.value.toLowerCase()))
  
    setSearchResults(resultsArray)
  }
  
  return (
    <header>
      <form className='search' onSubmit={handleSubmit}>
        <input
          className='search__input'
          type='text'
          id='search'
          onChange={handleSearchChange}
        />
        <button className='search__button'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  )
}

export default SearchBar