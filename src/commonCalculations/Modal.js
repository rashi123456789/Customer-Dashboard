import React from 'react';
import {Modal} from 'react-bootstrap';

function AlertModal(props){
    return(
        <div>
            <Modal onHide={props.handleHide} show={props.show}>
                <Modal.Header closeButton> 
                    <Modal.Title>Customer Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{paddingLeft:'120px'}}>
                    Name - {props.name}<br/>
                    Order Count - {props.count}<br/>
                    Order Total - {props.total}<br/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={props.handleHide}> Close </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AlertModal;