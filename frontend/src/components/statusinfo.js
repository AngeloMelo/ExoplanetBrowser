import React from 'react'

const StatusInfo = ({dataStatus}) => {

    if(!dataStatus) return (<></>)
    const lastUpdate = new Date(dataStatus.last_update).toLocaleDateString()
    return (
        <>
            {dataStatus && <p>Total of planets: {dataStatus.count}. Last update: {lastUpdate}</p> }
        </>
    )
}

export default StatusInfo