import React, { Component } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DataProvider from "./../DataProvider";
import Message from "./../Modals/ModalMessage";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
          openMessage: false,
          message: "",
        }
      }
    /**
     * initialize the user list
     */
      componentDidMount (){
          DataProvider.initializeUsers();
      }
    /**
     * Check the data entered with registered users
    */
      login = ()=>{
          if(this.refs.emailUser.value==="" || this.refs.passWordUser.value===""){
            this.setState({
              openMessage: true,
              message: "Enter Email and Password",
            })
          }else{
              let noLog= true;
            DataProvider.getUsers().map((user,index) =>{
                if(user.mail===this.refs.emailUser.value && user.pass===this.refs.passWordUser.value){
                    DataProvider.userLoggedIn(user)
                    noLog= false;
                    window.location.replace('/home')
                }
                if(index+1===DataProvider.getUsers().length && noLog){
                  this.setState({
                    openMessage: true,
                    message: "Incorrect or Unregistered User",
                  })                    
                }
            })
          }
      }
      /**
       * I directed to the registration page
       */
      openRegister = () =>{
        window.location.replace('/register')
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
                <Container className="LoginContainer">
                <Row>
                  <Col sm={12} xs={12} md={12}>
                  <Message handlerModal={this.state.openMessage} message={this.state.message} closeModal={this.handlerModal.bind(this)}></Message>
                  <div className="containerLogo">
                    <img className="logo" src="jida.png" alt=""/>
                  </div>
                  <div onClick={()=> this.openRegister()} className="register">
                    Register
                  </div>
                  <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" ref="emailUser" required/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" ref="passWordUser" required/>
                  </Form.Group>
                  <Button variant="primary" className="buttonSave" onClick={()=> this.login()}>
                    Login
                </Button>
                </Form> 
                  </Col>
                </Row>
             </Container>
        );

    }
}

export default Login;