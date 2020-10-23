import React from 'react'
import './pagination.css'
const Pagination = ({currentPage, numberOfPages }) => {
    console.log("numberOfPages", numberOfPages, currentPage)
    const isFirst = currentPage === 1
    const isLast = currentPage === numberOfPages
    const prevPage = currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
    const nextPage = '/page/' + (currentPage + 1).toString()
    return (

        <div className="pagination">
            {
                isFirst ?(<a href="/" disabled="disabled">&laquo;</a>):(<a href={prevPage} >&laquo;</a>)
            }
            {
                Array.from({length: numberOfPages},(_,i)=>{
                    return (

                        currentPage===i+1?(<a key={`page-number${i+1}`} className="active" href={`/ ${i===0 ? '':'page'+(i+1)}`}>{i+1}</a>)
                            :
                            (<a key={`page-number${i+1}`}  href={`/ ${i===0 ? '':'page'+(i+1)}`}>{i+1}</a>)
                    )
                })
            }

           
            {
                isLast ? (<a href={nextPage} aria-disabled>&raquo;</a>):(<a href={nextPage} >&raquo;</a>)
            }
        </div>
    )
}

export default Pagination