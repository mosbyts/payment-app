import React from 'react'

const Pagination = ({
    sortCards,
    cardsPerPage,
    totalCards,
    paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div>
            <button onClick={e => sortCards(e, sortCards)}>Sort By Date</button>
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