import React from 'react'
import './pagination.css'
import {Link} from 'gatsby'
const Pagination = ({ numberOfPages, currentPage }) => {
    console.log("numberOfPages", numberOfPages, currentPage)
    const isFirst = currentPage === 1
    const isLast = currentPage === numberOfPages
    const prevPage = currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
    const nextPage = '/page/' + (currentPage + 1).toString()
    return (

        <div className="pagination">
            {
                isFirst ?(<Link to="/" disabled="disabled">&laquo;</Link>):(<Link to={prevPage} >&laquo;</Link>)
            }
            {
                Array.from({length: numberOfPages},(_,i)=>{
                    return (

                        currentPage===i+1?(<Link key={`page-number${i+1}`} className="active" to={`/ ${i===0 ? '':'page'+(i+1)}`}>{i+1}</Link>)
                            :
                            (<Link key={`page-number${i+1}`}  to={`/ ${i===0 ? '':'page'+(i+1)}`}>{i+1}</Link>)
                    )
                })
            }

           
            {
                isLast ? (<Link to={nextPage} aria-disabled>&raquo;</Link>):(<Link to={nextPage} >&raquo;</Link>)
            }
        </div>
    )
}

export default Pagination