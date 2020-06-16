import React, { Component } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataProvider from "./../DataProvider";
import CreateCourse from "./../Modals/CreateCourse";
import EditCourse from "./../Modals/EditCourse";
import Switch from "./../Switch";
import uuid from 'react-uuid';


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
    /**
     *initialize the list of courses and save it in a state to be able to render
    */
    componentDidMount (){
        DataProvider.initializeCourses();
        this.setState({
            courses: DataProvider.getCourses(),
        })
    }
    /**
     * remove an element from the state and update the localstorage
     */
    deleteCourse = (index) =>{
        if (window.confirm('Are you sure to delete this course?')){
            this.setState({
                course: this.state.courses.splice(index, 1),
            })
            DataProvider.deleteCourse(this.state.courses);
        }
    }
    /**
     * handles the state that opens and closes the create course modal
     */
    handlerCreateModal = () =>{
        this.setState({
            openCreateCourse: !this.state.openCreateCourse
        })
    }
/**
 * add a course to the state to reender it and update the localstorage
 * @param {*} name: name of the new course
 * @param {*} days: days of the new course
 */
    postCourse = (name,days) =>{    
        DataProvider.CreateCourse([{id:uuid(),name:name,days:days}].concat(this.state.courses)) 
        this.setState({
            courses: [{id:this.state.courses.length+1,name:name,days:days}].concat(this.state.courses)
        })
        
    }
/**
 * handles  that opens and closes the edit course modal
 * @param {*} courseId: boolean that handles the state 
 */
    handlerEditModal = (courseId) =>{
        this.setState({
            openEditCourse: !this.state.openEditCourse,
            idCourse: courseId,
        })
    }
    /**
     * edit a state element and update the localstorage
     * @param {*} index:index of the element to edit
     * @param {*} id: id of the element to edit
     * @param {*} name: new item name
     * @param {*} days new item days
     */
    editCourse = (index,id, name, days) =>{  
        var coursesEdit = this.state.courses;
        var removed = coursesEdit.splice(index,1,{id:id,name:name,days:days});
        DataProvider.updateCourse(coursesEdit)
           this.setState({
               courses: coursesEdit
           })
    }
    /**
     * delete logged user data and redirect to login page
     */
    comeBack = ()=>{
        DataProvider.logOut()
        window.location.replace('/')
      }
      /**
       * redirect to profile page
       */
      goProfile = ()=>{
        window.location.replace('/profile')
      }

    render () {
        return (
            <div className="Home">
                {DataProvider.getUserLogget()!=null?
                <Container>
                <Row>
                  <Col sm={12} xs={12} md={12}>
                    <div className="title">List of Courses</div> 
                    {DataProvider.getUserLogget().isAdmin===true ? 
                        <div className="buttonAdd" onClick={()=>this.handlerCreateModal()}>+</div>
                    :
                        <div className="buttonProfile" onClick={()=>this.goProfile()}>Profile</div>
                    }
                    <CreateCourse handlerModal={this.state.openCreateCourse} closeModal={this.handlerCreateModal.bind(this)} postCourse={this.postCourse.bind(this)}></CreateCourse> 
                    <div className="signOff" onClick={()=> this.comeBack()}>Sign Out</div> 
                    <div className="ContainerCourses"> 
                        <div className="titleCouses">
                            <div className="TitleItem">Name</div> 
                            <div className="TitleItem">Days</div> 
                            {DataProvider.getUserLogget().isAdmin===true ? 
                                <div className="containerTitle">
                                    <div className="TitleItemIcon">Edit</div> 
                                    <div className="TitleItemIcon">Delete</div> 
                                </div>
                            :
                            <div className="TitleReserved">Reserve</div> 
                            }
                        </div> 
                        {
                        this.state.courses != null ?
                        this.state.courses.map((course,index) =>{
                            return(
                                <div className="CourseItem" key={course.id}>
                                    {this.state.idCourse===course.id?
                                        <EditCourse handlerModal={this.state.openEditCourse}  dataCourse={course} index={index} closeModal={this.handlerEditModal.bind(this)} editCourse={this.editCourse.bind(this)}></EditCourse>
                                    :null} 
                                    <br></br>
                                    <div className="item"> <p className="text">{course.name}</p></div> 
                                    <div className="item"><p className="text">{course.days.join(", ")}</p></div> 
                                    {DataProvider.getUserLogget().isAdmin===true ? 
                                        <div className="containerIcons">
                                            <div className="itemIcon"><img className="iconItem" src="edit.png" alt=""  onClick={()=>this.handlerEditModal(course.id)}></img> </div> 
                                            <div className="itemIcon"><img className="iconItem" src="delete.png" onClick={()=>this.deleteCourse(index)} alt=""></img> </div>
                                        </div> 
                                    :
                                    <div className="itemSwitch">
                                        <Switch onChange={this.handleChange} courseId={course.id} Handlerchecked={this.state.checked} />
                                    </div> 
                                    } 
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