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
/**
 * saves the created course data and sends it to its parent component
 */
    saveCourse = ()=>{ 
      if(this.refs.Monday.checked){
        this.setState({
          daysArray: this.state.daysArray.push("Monday")
        })
      }
      if(this.refs.Tuesday.checked){
        this.setState({
          daysArray: this.state.daysArray.push("Tuesday")
        })
      }
      if(this.refs.Wednesday.checked){
        this.setState({
          daysArray: this.state.daysArray.push("Wednesday")
        })
      }
      if(this.refs.Thursday.checked){
        this.setState({
          daysArray: this.state.daysArray.push("Thursday")
        })
      }
      if(this.refs.Friday.checked){
        this.setState({
          daysArray: this.state.daysArray.push("Friday")
        })
      }
      if(this.refs.nameCourse.value==="" || this.state.daysArray.length===0){
        alert("Enter course name and at least select a day")
        this.setState({
          daysArray:[],
        })
      }else{
        this.props.postCourse(this.refs.nameCourse.value,this.state.daysArray);
        this.setState({
          daysArray:[],
        })
        this.props.closeModal()
      }
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
                    <Form.Control type="text" placeholder="" ref="nameCourse" required/>
                  </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2" required>
                  <Form.Label className="dayLabel">Days</Form.Label>
                  <Form.Check inline label="Monday" type={"checkbox"} ref="Monday"/>
                  <Form.Check inline label="Tuesday" type={"checkbox"} ref="Tuesday"/>
                  <Form.Check inline label="Wednesday" type={"checkbox"} ref="Wednesday"/>
                  <Form.Check inline label="Thursday" type={"checkbox"} ref="Thursday"/>
                  <Form.Check inline label="Friday" type={"checkbox"} ref="Friday"/>
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