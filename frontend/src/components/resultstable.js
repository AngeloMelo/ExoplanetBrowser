const ResultsTable = ({planetsData, setPlanetID}) => {
    
    const rows = planetsData.map((data,i) =>{
        
        const rowUpdate = new Date(data.rowupdate).toLocaleDateString();
        return (
            <tr className="table-primary" key={i}>                
                <td>{data.pl_hostname}</td>
                <td>{data.pl_letter}</td>
                <td><a href={`https://exoplanetarchive.ipac.caltech.edu/overview/${data.pl_name}`} target="_blank" rel="noreferrer">{data.pl_name}</a></td>
                <td>{data.pl_discmethod}</td>
                <td>{data.st_dist}</td>                
                <td>{data.pl_facility}</td>
                <td>{rowUpdate}</td>
                <td><button type="button" className="btn btn-info" onClick={() => setPlanetID(data._id)}>Details</button></td>
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
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>                
                {rows}
            </tbody>
            </table>
    )
}

export default ResultsTable