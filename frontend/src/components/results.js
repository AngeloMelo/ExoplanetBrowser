import { useState } from 'react'
import ResultsTable from './resultstable'
import ResultsPagination from './resultspagination'

const Results = ({planetsData, showDetails}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize] = useState(30)
    const totalItems = planetsData.length 
    const lastIndex = currentPage * pageSize 
    const firstIndex = lastIndex - pageSize  
    const paginate = page => setCurrentPage(page)
    const currentPageData = planetsData.slice(firstIndex, lastIndex)

    if(planetsData.length === 0) return (<></>)

    return (
        <div className="container section">
            <ResultsTable planetsData={currentPageData} showDetails={showDetails} />
            <div>
                <div className="d-flex align-items-center justify-content-center">
                    <ResultsPagination 
                        pageSize={pageSize}
                        totalItems={totalItems}
                        current={currentPage}
                        paginate={paginate}
                    />
                </div>    
            </div>            
        </div>
            
    )
}

export default Results