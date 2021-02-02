import React from 'react'

const ResultsTable = ({planetsData}) => {
    
    const rows = planetsData.map((data,i) =>{
        const rowUpdate = new Date(data.rowupdate).toLocaleDateString();
        return (
            <tr className="table-primary" key={i}>                
                <td>{data.pl_hostname}</td>
                <td>{data.pl_letter}</td>
                <td><a href={`https://exoplanetarchive.ipac.caltech.edu/overview/${data.pl_name}`} target="_blank">{data.pl_name}</a></td>
                <td>{data.pl_discmethod}</td>
                <td>{data.st_dist}</td>                
                <td>{data.pl_facility}</td>
                <td>{rowUpdate}</td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Host Name</th>
                    <th scope="col">Letter</th>
                    <th scope="col">Planet Name</th>
                    <th scope="col">Discovery Method</th>
                    <th scope="col">Distance [pc]</th>
                    <th scope="col">Discovery Facility</th>
                    <th scope="col">Last Update</th>
                </tr>
            </thead>
            <tbody>                
                {rows}
            </tbody>
            </table>
    )
}

export default ResultsTable