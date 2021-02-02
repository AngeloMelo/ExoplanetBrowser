import React from 'react'

const DetailsContainer = ({planetData}) => {

    if(!planetData) return (<></>)
    
    const planetName = "Jupiter"
    return (
        <div className="container section">
            <div className="jumbotron">
                <legend>Planet Details</legend>
                <div className="row">
                    <div className="col-md-4">Host Name:</div>
                    <div className="col-md-4">Planet Letter</div>
                    <div className="col-md-4">Planet Name</div>
                </div>
                <div className="row">
                    <div className="col-md-4">Discovery Method:</div>
                    <div className="col-md-4">Is Controversial:</div>
                    <div className="col-md-4">Number of Planets in System</div>
                </div>
                <div className="row">
                    <div className="col-md-4">Date of Last Update:</div>
                    <div className="col-md-4">Discovery Facility:</div>
                    <div className="col-md-4">Number of Notes</div>
                </div>
                <div className="row">
                    <div className="col-md-4">TTV Flag:</div>
                    <div className="col-md-4">Kepler Field Flag:</div>
                    <div className="col-md-4">K2 Mission Flag</div>
                </div>
                <hr className="my-4"/>
                <h4>Orbital Details</h4>
                <div className="row">
                    <div className="col-md-3">Orbital Period [days]</div>
                    <div className="col-md-3">Upper Unc. [days]</div>
                    <div className="col-md-3">Lower Unc. [days]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Orbit Semi-Major Axis [au]</div>
                    <div className="col-md-3">Upper Unc. [au]</div>
                    <div className="col-md-3">Lower Unc. [au]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Eccentricity</div>
                    <div className="col-md-3">Upper Unc.</div>
                    <div className="col-md-3">Lower Unc.</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Inclination [deg]</div>
                    <div className="col-md-3">Upper Unc. [deg]</div>
                    <div className="col-md-3">Lower Unc. [deg]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <hr className="my-4"/>
                <h4>Stellar Details</h4>
                <div className="row">
                    <div className="col-md-3">Stellar Mass [Solar mass]</div>
                    <div className="col-md-3">Upper Unc. [Solar mass]</div>
                    <div className="col-md-3">Lower Unc. [Solar mass]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Stellar Radius [Solar radii]</div>
                    <div className="col-md-3">Upper Unc. [Solar radii]</div>
                    <div className="col-md-3">Lower Unc. [Solar radii]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Eccentricity</div>
                    <div className="col-md-3">Eccentricity Upper Unc.</div>
                    <div className="col-md-3">Eccentricity Lower Unc.</div>
                    <div className="col-md-3">Eccentricity Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Inclination [deg]</div>
                    <div className="col-md-3">Inclination Upper Unc. [deg]</div>
                    <div className="col-md-3">Inclination Lower Unc. [deg]</div>
                    <div className="col-md-3">Inclination Limit Flag</div>
                </div>
                    
                <hr className="my-4"/>
                <h4>Details</h4>
                <div className="row">
                    <div className="col-md-2">Planet Mass or M*sin(i) [Jupiter mass]</div>
                    <div className="col-md-2">Upper Unc. [Jupiter mass]</div>
                    <div className="col-md-2">Lower Unc. [Jupiter mass]</div>
                    <div className="col-md-2">Limit Flag</div>
                    <div className="col-md-2">Provenance</div>
                    <div className="col-md-2">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Planet Radius [Jupiter radii]</div>
                    <div className="col-md-3">Upper Unc. [Jupiter radii]</div>
                    <div className="col-md-3">Lower Unc. [Jupiter radii]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Planet Density [g/cm**3]</div>
                    <div className="col-md-3">Upper Unc. [g/cm**3]</div>
                    <div className="col-md-3">Lower Unc. [g/cm**3]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">RA [sexagesimal]</div>
                    <div className="col-md-3">RA [decimal degrees]</div>
                    <div className="col-md-3">Dec [sexagesimal]</div>
                    <div className="col-md-3">Dec [decimal degrees]</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Distance [pc]</div>
                    <div className="col-md-3">Upper Unc. [pc]</div>
                    <div className="col-md-3">Lower Unc. [pc]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Gaia Distance [pc]</div>
                    <div className="col-md-3">Upper Unc. [pc]</div>
                    <div className="col-md-3">Lower Unc. [pc]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Optical Magnitude [mag]</div>
                    <div className="col-md-3">Unc. [mag]</div>
                    <div className="col-md-3">Band</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-4">G-band (Gaia) [mag]</div>
                    <div className="col-md-4">Unc. [mag]</div>
                    <div className="col-md-4">Limit Flag</div>
                </div>
                <div className="row">
                    <div className="col-md-3">Effective Temperature [K]</div>
                    <div className="col-md-3">Upper Unc. [K]</div>
                    <div className="col-md-3">Lower Unc. [K]</div>
                    <div className="col-md-3">Limit Flag</div>
                </div>
            </div>
        </div>
    )
}

export default DetailsContainer
