import SearchForm from './searchform'
import Results from './results'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function PlanetsPage() {

  const [planetsData, setPlanetsData] = useState([])
  const [facilities, setFacilities] = useState([])
  const [discoveryMethods, setDiscoveryMethods] = useState([])
  
  const [hosts, setHosts] = useState([])
  const [, setLoading] = useState(false)
  const [queryValid, setQueryValid] = useState(true)
   
  const facilityInputRef = useRef(null)
  const hostInputRef = useRef(null)
  const methodInputRef = useRef(null)

  useEffect(() => {
    
    const fetchData = async () =>{
      
      setLoading(true)

      const facilitiesResp = await axios.get('/api/facilites')
      setFacilities(facilitiesResp.data)

      const discmethodsResp = await axios.get('/api/discmethods')
      setDiscoveryMethods(discmethodsResp.data)

      const hostsResp = await axios.get('/api/hosts')
      setHosts(hostsResp.data)

      setLoading(false)
    }
    fetchData()    
  }, [])


  const search = async () =>{

    const hostName = hostInputRef.current.value
    const facility = facilityInputRef.current.value
    const method = methodInputRef.current.value

    validQuery(hostName, facility, method)
    if(!queryValid) return    
     
    let planetsQuery = ''

    if(hostName)
    {
      let nameyQuery = `name=${hostName}`
      planetsQuery = (planetsQuery === '') ? '?' : `${planetsQuery}&` 
      planetsQuery = planetsQuery + nameyQuery
    }

    if(facility)
    {
      let facilityQuery = `facility=${facility}`
      planetsQuery = (planetsQuery === '') ? '?' : `${planetsQuery}&` 
      planetsQuery = planetsQuery + facilityQuery
    }

    if(method)
    {
      let methodQuery = `method=${method}`
      planetsQuery = (planetsQuery === '') ? '?' : `${planetsQuery}&` 
      planetsQuery = planetsQuery + methodQuery
    }

    const planetsResp = await axios.get('/api/planets' + planetsQuery)
    const { data } = planetsResp
    setPlanetsData(data)
  }

  const clear = () =>{

    setPlanetsData([])

    hostInputRef.current.value = ''
    facilityInputRef.current.value = ''
    methodInputRef.current.value = ''
    setQueryValid(true)

  }

  const validQuery = (hostName, facility, method) =>{

    const valid = hostName || facility || method
    setQueryValid(valid)
  }

  const emptyQueryWarning = 
    <div class="alert alert-dismissible alert-danger">
      <strong>Error:&nbsp;</strong>select at least one query field.
    </div>
  return (
    <>
      <SearchForm 
        facilities={facilities} 
        discoveryMethods={discoveryMethods} 
        hosts={hosts} 
        facilityInputRef={facilityInputRef}
        methodInputRef={methodInputRef}
        hostInputRef={hostInputRef}
        clearAction={clear}
        searchAction={search}
      />     

      <div className="row section">
      
      { !queryValid ? emptyQueryWarning : <Results planetsData={planetsData} />}
      
      </div>
    </>
  )
}

export default PlanetsPage