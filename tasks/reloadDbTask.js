const ReloadLog  = require('../models/reloadLogModel')
const DiscMethod = require('../models/DiscoveryMethodModel')
const Facility = require('../models/FacilityModel')
const Host = require('../models/HostModel')
const PlanetData = require('../models/PlanetDataModel')

const fetch = require('node-fetch') 

const NASA_API = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=JSON'

const ReloadDbTask = async () =>{
    
    createLog()
    const planetsData = await fetchNasaApiData()
    const discmethods = planetsData.map(d => d.pl_discmethod).filter(distinct)
    const facilities = planetsData.map(d => d.pl_facility).filter(distinct)
    const hosts = planetsData.map(d => d.pl_hostname).filter(distinct)
    saveDiscoveryMethods(discmethods)
    saveFacilities(facilities)
    saveHosts(hosts)
    savePlanetData(planetsData)  
    console.log('finish') 
}

const saveDiscoveryMethods = (discmethods) =>{

    DiscMethod.deleteMany({}, ()=>{
        console.log('discovery methods removed')
        discmethods.forEach(methodName => {

            const newMethod = new DiscMethod({name: methodName})
            newMethod.save().then((d)=> console.log(methodName + ' saved'))
        });
    })

}

const  saveFacilities = (facilities) =>{

    Facility.deleteMany({}, ()=>{
        console.log('facilities removed')
        facilities.forEach(facility => {

            const newFacility = new Facility({name: facility})
            newFacility.save().then((d)=> console.log(facility + ' saved'))
        });
    })

}

const  saveHosts = (hosts) =>{

    Host.deleteMany({}, ()=>{
        console.log('hosts removed')
        hosts.forEach(name => {

            const newHost = new Host({name})
            newHost.save().then((d)=> console.log(name + ' saved'))
        });
    })

}

const savePlanetData = (planetsData) =>{

    PlanetData.deleteMany({}, ()=>{
        console.log('planet data removed')
        planetsData.forEach(planetData => {

            const newPlanetData = new PlanetData(planetData)
            newPlanetData.save().then((d)=> console.log(planetData.pl_name + ' saved'))
        });
    })

}
  

const createLog = () =>{
    const message = 'reloading exoplanets database'
    
    const newLog = new ReloadLog({
        log : message
    });

    newLog.save().then(report => console.log(message))
}

const fetchNasaApiData = async () =>{
    
    const resp = await fetch(NASA_API)
    const data = await resp.json()
    return data
}

const distinct = (value, index, self) =>{
	return self.indexOf(value) === index
}


module.exports = ReloadDbTask