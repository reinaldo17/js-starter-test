import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss';
import Message from "./../ModalMessage";

class EditCourse extends Component {
    constructor(props){
        super(props);
        this.state={
          daysArray: [] , 
          openMessage: false,
          message: "",   
        }
      }
      /**
       * fill the course fields to edit
       */
      componentDidMount(){
          for(let i=0;i<this.props.dataCourse.days.length;i++){
            if(this.props.dataCourse.days[i]==="Monday"){
                this.refs.Monday.checked=true
            }
            if(this.props.dataCourse.days[i]==="Tuesday"){
                this.refs.Tuesday.checked=true
            }
            if(this.props.dataCourse.days[i]==="Wednesday"){
                this.refs.Wednesday.checked=true
            }
            if(this.props.dataCourse.days[i]==="Thursday"){
                this.refs.Thursday.checked=true
            }
            if(this.props.dataCourse.days[i]==="Friday"){
                this.refs.Friday.checked=true
            }
          } 
      }
      /**
       * modifies the state and sends the data to its parent component
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
        this.setState({
          openMessage: true,
          message: "Enter course name and at least select a day",
          daysArray:[],
        }) 

      }else{
        this.props.editCourse(this.props.index, this.props.dataCourse.id, this.refs.nameCourse.value,this.state.daysArray);
        this.setState({
          daysArray:[],
        })
        this.props.closeModal()
      }
    }
     /**
       * handles the state that closes and opens the modal
       */
      handlerModal = () =>{
        this.setState({
          openMessage: !this.state.openMessage
        })
      }
      
      render () {
        return (
              <Modal className="editCourse" show={this.props.handlerModal} onHide={()=> this.props.closeModal()}>
                <Message handlerModal={this.state.openMessage} message={this.state.message} closeModal={this.handlerModal.bind(this)}></Message>
              <Modal.Header closeButton>
                <Modal.Title>Edit Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="" ref="nameCourse" required defaultValue={this.props.dataCourse.name}/>
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
export default EditCourse;