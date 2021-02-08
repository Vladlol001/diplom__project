const Search = () => {
  let search = document.querySelector('.fa-search');

  search.addEventListener('click', () => {
    let headerSearch = document.querySelector('.header__search').value.trim();
    localStorage.setItem('search', headerSearch);
    return headerSearch;
  })
}

export default Search;