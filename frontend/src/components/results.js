import { useState } from 'react'
import ResultsTable from './resultstable'
import ResultsPagination from './resultspagination'
import DetailsModal from './detailsmodal'

const Results = ({planetsData}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [planetID, setPlanetID] = useState(null)
    const [pageSize] = useState(30)
    const totalItems = planetsData.length 
    const lastIndex = currentPage * pageSize 
    const firstIndex = lastIndex - pageSize  
    const paginate = page => setCurrentPage(page)
    const currentPageData = planetsData.slice(firstIndex, lastIndex)

    if(planetsData.length === 0) return (<></>)

    return (
        <div className="container section">
            <ResultsTable planetsData={currentPageData} setPlanetID={setPlanetID} />
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
            <DetailsModal planetId={planetID} />          
        </div>
            
    )
}

export default Results