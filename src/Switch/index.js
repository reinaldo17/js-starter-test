import React, { Component } from "react";
import Switch from "react-switch";
import DataProvider from "./../DataProvider";

class Sswitch extends Component {

    constructor() {
      super();
      this.state = { 
          checked: false,
      };
      this.handleChange = this.handleChange.bind(this);
      
    }
    componentDidMount(){
        DataProvider.getUserLogget().courses.map(((course,index) =>{
            if(course===this.props.courseId){
                this.setState({ 
                    checked: true
                 });
            }
        }))
      
    }
  
   
    handleChange() {
      this.setState({
           checked: !this.state.checked
        });
        if(this.state.checked){
            alert("desSuscribir curso")
        }else{
            var auxDays = [];
            var auxID = null;

            DataProvider.getCourses().map(((course,index) =>{
                if(this.props.courseId===course.id){
                    auxDays= course.days
                    auxID = course.id
                }
            }))


            DataProvider.getCourses().map(((course,index) =>{
                var flag =false
                auxDays.map(day=>{
                    if(!flag){
                            if(auxID!==course.id ){
                                DataProvider.getUserLogget().courses.map(courseSelected=>{
                                    if(courseSelected===course.id && !flag){
                                        for(var i=0; course.days.length>i;i++){
                                            alert(i)
                                            if(course.days[i]===day){
                                                alert("This course has the same schedule as another already selected")
                                                this.setState({
                                                    checked: false
                                                 });
                                                 flag=true
                                            }else{
                                                if(!flag){
                                                    var newCourseArray = DataProvider.getUserLogget().courses.concat(this.props.courseId);
                                                    var newUserData = DataProvider.getUserLogget();
                                                    newUserData.courses= newCourseArray;
                                                    console.log(newUserData)
                                                }
                                            }
                                        }
                                    }
                                })
       
                            }
                        }  
                    })
            }))
        }
    }

   
    render() {
      return (
          <div>
          <label>
              <Switch onColor="#d14545" onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} height={22} width={48} />
          </label>
        </div>
      );
    }
  }
  
  export default Sswitch;
  