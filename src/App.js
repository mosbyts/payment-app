//Necessary dependencies, data and components.
import React, { useState, useEffect, Fragment } from 'react'
import DisplayCard from './components/DisplayCard/DisplayCard.js'
import Pagination from './components/Pagination/Pagination'
import Navbar from './components/Navbar/Navbar'
import Data from './utils/sample.json'
import Footer from './components/Footer/Footer.js'

//Handles pagination and data display.
const App = () => {
  
  //Set up consts for pagination.
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);
  const [cardsToRender, setCardsToRender] = useState([]);

  //Use the react hook to load each card
  useEffect(() => {
    const fetchData = async () => {
      const res = await Data
      setLoading(true)
      setCards(res)
      setCardsToRender(
        res.slice(
          currentPage * cardsPerPage - cardsPerPage,
          currentPage * cardsPerPage
        )
      )
      setLoading(false)
    }
    fetchData()
  }, [currentPage, cardsPerPage]);

  //Get current cards
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const getCurrentCards = _ => {
    const currentCard = cards.slice(indexOfFirstCard, indexOfLastCard)
    return setCardsToRender(currentCard)
  }

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  //Sort cards by most recent date
  const sortDescCards = _ => {
    let sortedDescCards = cards.sort((a, b) => {
      return a.Payee.SubmissionDate < b.Payee.SubmissionDate ? 1 : -1;
    })
    setCards(sortedDescCards);
    getCurrentCards();
  }

    //Sort cards by least recent date
    const sortAscCards = _ => {
      let sortedAscCards = cards.sort((a, b) => {
        return a.Payee.SubmissionDate > b.Payee.SubmissionDate ? 1 : -1;
      })
      setCards(sortedAscCards);
      getCurrentCards();
    }

  return(
    <Fragment>
      <Navbar />
      <Pagination 
        sortDescCards={sortDescCards}
        sortAscCards={sortAscCards}
        cardsPerPage={cardsPerPage} 
        totalCards={cards.length}
        paginate={paginate}
      />
      <DisplayCard 
        cards={cardsToRender} 
        loading={loading} 
      />
      <Footer />
    </Fragment>
  )
}

export default App