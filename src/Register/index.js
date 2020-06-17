import React, { Component } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DataProvider from "./../DataProvider";
import uuid from 'react-uuid';
import Message from "./../Modals/ModalMessage";



class Register extends Component {
    constructor(props){
        super(props);
        this.state={
          openMessage: false,
          message: "",
      }
      
    }
      /**
      * receives the entered data and register the user in the localstorage
      */
      register = ()=>{
          if(this.refs.nameUser.value==="" ||this.refs.emailUser.value==="" || this.refs.passWordUser.value==="" || this.refs.ageUser.value===""){
            this.setState({
              openMessage: true,
              message: "All fields are REQUIRED",
            }) 
          }else{
            let aux= DataProvider.getUsers()
            DataProvider.CreateUser([{name:this.refs.nameUser.value,
              mail:this.refs.emailUser.value,
              age:this.refs.ageUser.value,
              pass:this.refs.passWordUser.value,   
              isAdmin:false,
              courses:[],
              id:uuid(),
            }].concat(aux))  
                    
          this.setState({
            openMessage: true,
            message: "Registered user successfully",
          })
          setTimeout(function () {
            window.location.replace('/')
          }, 1000);

          }
          
      }     
      /**
       * redirect to the home page
       */
      comeBack = ()=>{
        window.location.replace('/')
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
                <Container className="registerContainer">
                <Row>
                  <Col sm={12} xs={12} md={12}>
                    <Message handlerModal={this.state.openMessage} message={this.state.message} closeModal={this.handlerModal.bind(this)}></Message>
                  <div className="containerLogo">
                    <img className="logo" src="jida.png" alt=""/>
                  </div>
                  <Form>
                  <Form.Group controlId="exampleForm.ControlInput4">
                    <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="" ref="nameUser" required/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" ref="emailUser" required/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="" ref="ageUser" required/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" ref="passWordUser" required/>
                  </Form.Group>
                  <Button variant="secondary" className="backButton" onClick={()=> this.comeBack()}>
                    Back
                  </Button>
                  <Button variant="primary" className="buttonSave" onClick={()=> this.register()}>
                    Register
                  </Button>
                </Form> 
                  </Col>
                </Row>
             </Container>
        );

    }
}

export default Register;