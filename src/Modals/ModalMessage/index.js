import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss';
class CreateCourse extends Component {
    constructor(props){
        super(props);
        this.state={
          daysArray: [] ,   
        }
      }
 
      render () {
        return (
              <Modal className="messageModal" show={this.props.handlerModal} onHide={()=> this.props.closeModal()} centered>
              <Modal.Header >
                <Modal.Title>{this.props.message}</Modal.Title>
              </Modal.Header>
              <Modal.Footer className="footer">
                <Button variant="primary" className="buttonSave" onClick={()=> this.props.closeModal()}>
                  Acept
                </Button>
              </Modal.Footer>
            </Modal>
        )
      }
}
export default CreateCourse;