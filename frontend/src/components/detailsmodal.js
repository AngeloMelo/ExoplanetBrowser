import { useState, useEffect } from 'react'
import {Button, Modal} from 'react-bootstrap'
import DetailsContainer from './detailscontainer'
import axios from 'axios'


const DetailsModal = ({planetId}) => {
  
  const [planetDetails, setPlanetDetails] = useState(null)
  const [show, setShow] = useState(false)
  const [planetName, setPlanetName] = useState('')

  const handleClose = () =>{
    setShow(false)
  }

  useEffect(() => {
    
    const fetchData = async () => {
      if(!planetId) return
      const planetResp = await axios.get(`/api/planets/${planetId}`)
      const { data } = planetResp
      setPlanetDetails(data)
      setPlanetName(data.pl_name)
      if(data) setShow(true)
    }
    fetchData()    
  }, [planetId])

  return (
      <>  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton>
            <Modal.Title>Planet {planetName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DetailsContainer planetDetails={planetDetails} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
  
export default DetailsModal