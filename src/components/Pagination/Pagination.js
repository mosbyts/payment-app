import React from 'react'
import './style.css'

const Pagination = ({
    sortDescCards,
    sortAscCards,
    cardsPerPage,
    totalCards,
    paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div className='text-center paginationDiv'>
            <button onClick={e => sortDescCards(e, sortDescCards)}>Newest</button>
            <button onClick={e => sortAscCards(e, sortAscCards)}>Oldest</button> 
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination