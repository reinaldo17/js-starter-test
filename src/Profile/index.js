import React, { Component } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DataProvider from "./../DataProvider";
import Message from "./../Modals/ModalMessage";



class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
          openMessage: false,
          message: "",
      }
    }
      /**
      * receives the entered data and update the user in the localstorage
      */
      register = ()=>{
          if(this.refs.nameUser.value==="" ||this.refs.emailUser.value==="" || this.refs.passWordUser.value==="" || this.refs.ageUser.value===""){
            this.setState({
              openMessage: true,
              message: "All fields are REQUIRED",
            }) 
          }else{
            DataProvider.userLoggedIn({name:this.refs.nameUser.value,
              mail:this.refs.emailUser.value,
              age:this.refs.ageUser.value,
              pass:this.refs.passWordUser.value,   
              isAdmin:false,
              courses:DataProvider.getUserLogget().courses,
              id:DataProvider.getUserLogget().id,
            }) 
            var auxArrayUser= DataProvider.getUsers()
            var auxUserLogued= DataProvider.getUserLogget()
            for(let i=0;auxArrayUser.length>i;i++){
                if(auxArrayUser[i].id===auxUserLogued.id){
                    auxArrayUser[i]= auxUserLogued
                }
            }
            DataProvider.updateUser(auxArrayUser);
            this.setState({
              openMessage: true,
              message: "Your data has been Updated",
            })
            setTimeout(function () {
              window.location.replace('/home')
            }, 1000);
            
            
            
          }

      }

      /**
       * redirect to the home page
       */
      comeBack = ()=>{
        window.location.replace('/home')
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
                <Container className="profileContainer">
                <Row>
                  <Col sm={12} xs={12} md={12}>
                    <Message handlerModal={this.state.openMessage} message={this.state.message} closeModal={this.handlerModal.bind(this)}></Message>
                  <div className="containerLogo">
                    <img className="logo" src="jida.png" alt=""/>
                  </div>
                  <Form>
                  <Form.Group controlId="exampleForm.ControlInput4">
                    <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="" ref="nameUser" defaultValue={DataProvider.getUserLogget().name} required/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" ref="emailUser" defaultValue={DataProvider.getUserLogget().mail} required/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="" ref="ageUser" required defaultValue={DataProvider.getUserLogget().age}/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" ref="passWordUser" required/>
                  </Form.Group>
                  <Button variant="secondary" className="backButton" onClick={()=> this.comeBack()}>
                    Back
                  </Button>
                  <Button variant="primary" className="buttonSave" onClick={()=> this.register()}>
                    Save
                  </Button>
                </Form> 
                  </Col>
                </Row>
             </Container>
        );

    }
}

export default Profile;