import React, { Component } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DataProvider from "./../DataProvider";


class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
      }

      componentDidMount (){
          DataProvider.initializeUsers();
          

      }

      login = ()=>{
          if(this.refs.emailUser.value==="" || this.refs.passWordUser.value===""){
              alert("Enter Email and Password")
          }else{
              let noLog= true;
            DataProvider.getUsers().map((user,index) =>{
                console.log(user)
                if(user.mail===this.refs.emailUser.value && user.pass===this.refs.passWordUser.value){
                    window.location.replace('/home')
                    noLog= false;
                }
                if(index+1===DataProvider.getUsers().length && noLog){
                    alert("Incorrect or Unregistered User")                    
                }
            })
          }
      }
      comeBack = ()=>{
        window.location.replace('/')
      }

    render () {
        return (
                <Container className="registerContainer">
                <Row>
                  <Col sm={12} xs={12} md={12}>
                  <div className="containerLogo">
                    <img className="logo" src="jida.png" alt=""/>
                  </div>
                  <Form>
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