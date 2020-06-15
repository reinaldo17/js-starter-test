import React, { Component } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataProvider from "./../DataProvider";
import CreateCourse from "./../Modals/CreateCourse"
import EditCourse from "./../Modals/EditCourse"

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          courses : null,  
          openCreateCourse: false,
          openEditCourse:false, 
          idCourse: null,
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

    handlerCreateModal = () =>{
        this.setState({
            openCreateCourse: !this.state.openCreateCourse
        })
    }
    
    postCourse = (name,days) =>{    
        DataProvider.CreateCourse([{id:this.state.courses.length+1,name:name,days:days}].concat(this.state.courses)) 
        this.setState({
            courses: [{id:this.state.courses.length+1,name:name,days:days}].concat(this.state.courses)
        })
        
    }

    handlerEditModal = (courseId) =>{
        this.setState({
            openEditCourse: !this.state.openEditCourse,
            idCourse: courseId,
        })
    }
    editCourse = (index,id, name, days) =>{  
        var coursesEdit = this.state.courses;
        var removed = coursesEdit.splice(index,1,{id:id,name:name,days:days});
        DataProvider.updateCourse(coursesEdit)
           this.setState({
               courses: coursesEdit
           })
    }
    comeBack = ()=>{
        DataProvider.logOut()
        window.location.replace('/')
      }

    render () {
        return (
            <div className="Home">
                {DataProvider.getUserLogget()!=null?
                <Container>
                <Row>
                  <Col sm={12} xs={12} md={12}>
                    <div className="title">List of Courses</div>  
                    <div className="buttonAdd" onClick={()=>this.handlerCreateModal()}>+</div>
                    <CreateCourse handlerModal={this.state.openCreateCourse} closeModal={this.handlerCreateModal.bind(this)} postCourse={this.postCourse.bind(this)}></CreateCourse> 
                    <div className="signOff" onClick={()=> this.comeBack()}>Sign Out</div> 
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
                                    {this.state.idCourse===course.id?
                                        <EditCourse handlerModal={this.state.openEditCourse}  dataCourse={course} index={index} closeModal={this.handlerEditModal.bind(this)} editCourse={this.editCourse.bind(this)}></EditCourse>
                                    :null} 
                                    <div className="item"> <p className="text">{course.name}</p></div> 
                                    <div className="item"><p className="text">{course.days}</p></div> 
                                    <div className="itemIcon"><img className="iconItem" src="edit.png" alt=""  onClick={()=>this.handlerEditModal(course.id)}></img> </div> 
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
            :null}
            </div>
        );

    }
}

export default Home;