import React, { Component } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataProvider from "./../DataProvider"


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          courses : null,   
        }
      }

    componentDidMount (){
        DataProvider.initializeCourses();
        this.setState({
            courses: DataProvider.getCourses(),
        })

    }
    

    render () {
        return (
            <div className="Home">
                <Container>
                <Row>
                  <Col sm={12} xs={12} md={12}>
                    <div className="title">List of Courses</div>  
                    <div className="buttonAdd">+</div>  
                    <div className="signOff">Sign Out</div> 
                    <div className="ContainerCourses"> 
                        <div className="titleCouses">
                            <div className="TitleItem">Name</div> 
                            <div className="TitleItem">Days</div> 
                            <div className="TitleItemIcon">Edit</div> 
                            <div className="TitleItemIcon">Delete</div> 
                        </div> 
                        {
                        this.state.courses != null ?
                        this.state.courses.map(course =>{
                            return(
                                <div className="CourseItem" key={course.id}>
                                    <div className="item"> <p className="text">{course.name}</p></div> 
                                    <div className="item"><p className="text">{course.name}</p></div> 
                                    <div className="itemIcon"><img className="iconItem" src="edit.png" alt=""></img> </div> 
                                    <div className="itemIcon"><img className="iconItem" src="delete.png" alt=""></img> </div> 
                                </div> 
                            )}
                        )
                        :null
                        }
                        
                    </div> 
                  </Col>
                </Row>
             </Container>
            </div>
        );

    }
}

export default Home;