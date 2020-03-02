//Necessary dependencies, data and components.
import React, { useState, useEffect, Fragment } from 'react'
import Card from './components/Card/Card.js'
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
  let currentCard;
  const getCurrentCards = _ => {
    const currentCard = cards.slice(indexOfFirstCard, indexOfLastCard)
    return setCardsToRender(currentCard)
  }

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  //Sort cards
  const sortCards = _ => {
    let sortedCards = cards.sort((a, b) => {
      return a.Payee.SubmissionDate < b.Payee.SubmissionDate ? 1 : -1;
    })
    setCards(sortedCards);
    getCurrentCards();
  }

  return(
    <Fragment>
      <Navbar />
      <Card 
        cards={cardsToRender} 
        loading={loading} 
      />
      <Pagination 
        sortCards={sortCards}
        cardsPerPage={cardsPerPage} 
        totalCards={cards.length}
        paginate={paginate}
      />
      <Footer />
    </Fragment>
  )
}

export default App