import React, { Component } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataProvider from "./../DataProvider";
import CreateCourse from "./../Modals/CreateCourse"



class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          courses : null,  
          openCreateCourse: false,
          openEditCourse:false, 
        }
      }

    componentDidMount (){
        DataProvider.initializeCourses();
        this.setState({
            courses: DataProvider.getCourses(),
        })
    }

    deleteCourse = (index) =>{
        if (window.confirm('Are you sure to delete this course?')){
            this.setState({
                course: this.state.courses.splice(index, 1),
            })
            DataProvider.deleteCourse(this.state.courses);
        }
    }

    addCourse = () =>{
        this.setState({
            openCreateCourse: !this.state.openCreateCourse
        })
    }
    

    render () {
        return (
            <div className="Home">
                <Container>
                <Row>
                  <Col sm={12} xs={12} md={12}>
                    <div className="title">List of Courses</div>  
                    <div className="buttonAdd" onClick={()=>this.addCourse()}>+</div>
                    <CreateCourse handlerModal={this.state.openCreateCourse} closeModal={this.addCourse.bind(this)}></CreateCourse> 
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
                        this.state.courses.map((course,index) =>{
                            return(
                                <div className="CourseItem" key={course.id}>
                                    <div className="item"> <p className="text">{course.name}</p></div> 
                                    <div className="item"><p className="text">{course.name}</p></div> 
                                    <div className="itemIcon"><img className="iconItem" src="edit.png" alt=""></img> </div> 
                                    <div className="itemIcon"><img className="iconItem" src="delete.png" onClick={()=>this.deleteCourse(index)} alt=""></img> </div> 
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