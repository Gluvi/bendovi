import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalDialog = ({currentBand, show, handleClose}) => {
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentBand.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-4'>
                    <img src={currentBand.thumb1} alt={currentBand.name} className='bandSlikaModal' />
                </div>
                <div className='col-4'>
                    <img src={currentBand.thumb2} alt={currentBand.name} className='bandSlikaModal' />
                </div>
                <div className='col-4'>
                    <img src={currentBand.thumb3} alt={currentBand.name} className='bandSlikaModal' />
                </div>
            </div>
            <div className='row' style={{paddingTop: '20px'}}>
                <p className='bandInfo'>{currentBand.info}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='btn btn-success' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalDialog;