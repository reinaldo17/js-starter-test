import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss';
class CreateCourse extends Component {
    constructor(props){
        super(props);
        this.state={
          closeModal : false,   
        }
      }
    saveCourse = ()=>{
      console.log(this.refs.daysCourse.value)
      console.log(this.refs.daysCourse.id)
      
    }
      
      render () {
        return (
              <Modal className="createCourse" show={this.props.handlerModal} onHide={()=> this.props.closeModal()}>
              <Modal.Header closeButton>
                <Modal.Title>New Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="" ref="nameCourse" />
                  </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Example multiple select</Form.Label>
                  <Form.Check inline label="1" type={"checkbox"} ref="daysCourse" id="hola" />

                </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="footer">
                <Button variant="secondary" onClick={()=> this.props.closeModal()}>
                  Cancel
                </Button>
                <Button variant="primary" className="buttonSave" onClick={()=> this.saveCourse()}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
        )
      }
}
export default CreateCourse;