const DetailsContainer = ({planetDetails}) => {
    
    const getFormatedRangeField = (fieldValue, upperValue, lowerValue, unit) =>{
        
        if(!(fieldValue && upperValue && lowerValue)) return "N/A"

        if (upperValue === (-1)*lowerValue) return `${fieldValue} ± ${upperValue} ${unit}`
        
        return (<div>
            <span className="supersubNumber">{fieldValue}</span>
            <span className="superscript">+{upperValue}</span>
            <span className="subscript">{lowerValue}</span>
            <span className="supersubNumber">{unit}</span>
        </div>)        
    }

    const rowupdate = new Date(planetDetails.rowupdate).toLocaleDateString()
    const isTtv = planetDetails.pl_ttvflag === 1
    const isKepler = planetDetails.pl_kepflag === 1
    const isK2 = planetDetails.pl_k2flag === 1
    return (
            <>
                <legend><p className="text-success">General details</p></legend>
                <div className="row">
                    <div className="col-md-4">Host Name: <p className="text-success">{planetDetails.pl_hostname}</p></div>
                    <div className="col-md-4">Planet Letter: <p className="text-success">{planetDetails.pl_letter}</p></div>
                    <div className="col-md-4">Planet Name: <p className="text-success">{planetDetails.pl_name}</p></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Discovery Method: <p className="text-success">{planetDetails.pl_discmethod}</p></div>
                    <div className="col-md-4">Is Controversial: <p className="text-success">{planetDetails.pl_controvflag}</p></div>
                    <div className="col-md-4">Number of Planets in System: <p className="text-success">{planetDetails.pl_pnum}</p></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Date of Last Update: <p className="text-success">{rowupdate}</p></div>
                    <div className="col-md-4">Discovery Facility: <p className="text-success">{planetDetails.pl_facility}</p></div>
                    <div className="col-md-4">Number of Notes: <p className="text-success">{planetDetails.pl_nnotes}</p></div>
                    </div>
                <div className="row">
                    <div className="col-md-4">
                        { isTtv && <span class="badge badge-pill badge-info">TTV</span>}
                        { isKepler && <span class="badge badge-pill badge-info">Kepler Field</span>}
                        { isK2 && <span class="badge badge-pill badge-info">K2 Mission</span>}
                    </div>
                </div>
                <hr className="my-4"/>
                <h4><p className="text-info">Orbital Details</p></h4>
                <div className="row">
                    <div className="col-md-3">Orbital Period: <p className="text-info">{getFormatedRangeField(planetDetails.pl_orbper, planetDetails.pl_orbpererr1, planetDetails.pl_orbpererr2, 'days')}</p></div>
                    <div className="col-md-3">Orbit Semi-Major Axis: <p className="text-info">{getFormatedRangeField(planetDetails.pl_orbsmax, planetDetails.pl_orbsmaxerr1, planetDetails.pl_orbsmaxerr2, 'au')}</p></div>
                    <div className="col-md-3">Eccentricity: <p className="text-info">{getFormatedRangeField(planetDetails.pl_orbeccen, planetDetails.pl_orbeccenerr1, planetDetails.pl_orbeccenerr2, '')}</p></div>
                    <div className="col-md-3">Inclination: <p className="text-info">{getFormatedRangeField(planetDetails.pl_orbincl, planetDetails.pl_orbinclerr1, planetDetails.pl_orbinclerr2, 'deg')}</p></div>
                </div>
                <hr className="my-4"/>
                <h4><p className="text-warning">Other details</p></h4>
                <div className="row">
                    <div className="col-md-3">Stellar Mass [Solar mass]: <p className="text-warning">{getFormatedRangeField(planetDetails.st_mass, planetDetails.st_masserr1, planetDetails.st_masserr2, '')}</p></div>
                    <div className="col-md-3">Stellar Radius [Solar radii]:<p className="text-warning">{getFormatedRangeField(planetDetails.st_rad, planetDetails.st_raderr1, planetDetails.st_raderr2, '')}</p></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Planet Mass or M*sin(i):<p className="text-warning">{getFormatedRangeField(planetDetails.pl_bmassj, planetDetails.pl_bmassjerr1, planetDetails.pl_bmassjerr2, 'Jupiter mass')}</p></div>
                    <div className="col-md-3">Provenance:<p className="text-warning">{planetDetails.pl_bmassprov}</p></div>
                    <div className="col-md-3">Planet Radius:<p className="text-warning">{getFormatedRangeField(planetDetails.pl_radj, planetDetails.pl_radjerr1, planetDetails.pl_radjerr2,'Jupiter radii')}</p></div>
                    <div className="col-md-3">Planet Density:<p className="text-warning">{getFormatedRangeField(planetDetails.pl_dens, planetDetails.pl_denserr1, planetDetails.pl_denserr2,'g/cm**3')}</p></div>
                </div>
                <div className="row">
                    <div className="col-md-3">RA [sexagesimal]:<p className="text-warning">{planetDetails.ra_str}</p></div>
                    <div className="col-md-3">RA [decimal degrees]:<p className="text-warning">{planetDetails.ra}</p></div>
                    <div className="col-md-3">Dec [sexagesimal]:<p className="text-warning">{planetDetails.dec_str}</p></div>
                    <div className="col-md-3">Dec [decimal degrees]:<p className="text-warning">{planetDetails.dec}</p></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Distance:<p className="text-warning">{getFormatedRangeField(planetDetails.st_dist, planetDetails.st_disterr1, planetDetails.st_disterr2,'pc')}</p></div>
                    <div className="col-md-3">Gaia Distance:<p className="text-warning">{getFormatedRangeField(planetDetails.gaia_dist, planetDetails.gaia_disterr1, planetDetails.gaia_disterr2,'pc')}</p></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Optical Magnitude :<p className="text-warning">{planetDetails.st_optmag} mag</p></div>
                    <div className="col-md-3">Optical Magnitude Unc.:<p className="text-warning">{planetDetails.st_optmagerr ? planetDetails.st_optmagerr + ' mag' : 'N/A'}</p></div>
                </div>
                <div className="row">   
                    <div className="col-md-3">Band:<p className="text-warning">{planetDetails.st_optband ? planetDetails.st_optband : 'N/A'}</p></div>
                    <div className="col-md-3">G-band (Gaia):<p className="text-warning">{planetDetails.gaia_gmag ? planetDetails.gaia_gmag + ' mag': 'N/A'}</p></div>
                    <div className="col-md-3">G-band (Gaia) Unc. :<p className="text-warning">{planetDetails.gaia_gmagerr ? planetDetails.gaia_gmagerr + ' mag' : 'N/A'}</p></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Effective Temperature :<p className="text-warning">{getFormatedRangeField(planetDetails.st_teff, planetDetails.st_tefferr1, planetDetails.st_tefferr2,'K')}</p></div>
                </div>
            </>
    )
}

export default DetailsContainer
