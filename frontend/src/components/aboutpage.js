import StatusInfo from './statusinfo'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AboutPage = () => {

    const [dataStatus, setDataStatus] = useState(null)

    useEffect(() => {
    
        const fetchData = async () =>{
          
          const statusResp = await axios.get('/api/status')
          setDataStatus(statusResp.data)

        }
        fetchData()    
    }, [dataStatus])

    return (
        <div className="row section">
            <div className="jumbotron">
                <legend>About Exoplanets browser</legend>
                <p>This is a MERN stack application to easily search and get data from Exoplanets provided by the Nasa Exoplanet Science Institute</p>
                <p>Since 1992 over 4,000 exoplanets have been discovered outside our solar system. The United States National Aeronautics and Space Administration (NASA) maintains a publicly accessible archive of the data collected available by API.</p>
                <p>This application keeps a local database that allows users to perform fast and easy queries to get data from exoplanets. The local database is updated daily through a routine that performs the consume of a API provided by Nasa Exoplanet Science Institute.</p>
                <p>For moreinformation, visit the <a href="https://exoplanetarchive.ipac.caltech.edu/index.html" target="_blanc">NASA Exoplanet Achive page</a> </p>
                <hr class="my-4"/>
                <StatusInfo dataStatus={dataStatus} />
            </div>            
        </div>
    )
}

export default AboutPage