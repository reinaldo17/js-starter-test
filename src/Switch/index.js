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
    /**
     * initialize the swicth state
     */
    componentDidMount(){
        DataProvider.getUserLogget().courses.map(((course,index) =>{
            if(course===this.props.courseId){
                this.setState({ 
                    checked: true
                 });
            }
        }))
      
    }
  /**
   * handles the saving and rendering of the swicth,
   * also handles the logic and validation of the course subscription
   */
    handleChange() {   
        if(this.state.checked){
            this.setState({
                checked: false
             });
            var courseArray = DataProvider.getUserLogget().courses;
            var auxArray = [];
            for(let i=0; courseArray.length>i;i++){
                if(courseArray[i]!==this.props.courseId){
                    auxArray.push(courseArray[i])
                }
            }
            courseArray=auxArray;
            var userData = DataProvider.getUserLogget();
            userData.courses= courseArray;
            DataProvider.removeCourseUser(userData);

        }else{
            var auxDays = [];
            var auxID = null;

            DataProvider.getCourses().map(((course,index) =>{
                if(this.props.courseId===course.id){
                    auxDays= course.days
                    auxID = course.id
                }
            }))
            var flag =false
            var flag2 =false
            if(DataProvider.getUserLogget().courses.length>0){
                for(var x=0; DataProvider.getCourses().length>x; x++){          
                    if(!flag && !flag2){
                        for(var k=0; auxDays.length>k;k++){
                                if(auxID!==DataProvider.getCourses()[x].id ){
                                    for(var j=0; DataProvider.getUserLogget().courses.length>j;j++){
                                        if(DataProvider.getUserLogget().courses[j]===DataProvider.getCourses()[x].id){
                                            for(var i=0; DataProvider.getCourses()[x].days.length>i;i++){
                                                if(DataProvider.getCourses()[x].days[i]===auxDays[k]){
                                                    alert("This course has the same schedule as another already selected")
                                                    this.setState({
                                                        checked: false
                                                    });
                                                        flag=true                                                  
                                                }                                               
                                            }
                                        }
                                    }                                    
                                        
                                }
                            }  
                        }
                }
                if(!flag && !flag2){
                    flag2=true;
                       var newCourseArray = DataProvider.getUserLogget().courses.concat(this.props.courseId);
                        var newUserData = DataProvider.getUserLogget();
                        newUserData.courses= newCourseArray;
                        DataProvider.addCourseUser(newUserData)
                        this.setState({
                            checked: true
                         }); 
                       
                } 
            }else{
                if(flag===false){
                    var newCourseArray2 = DataProvider.getUserLogget().courses.concat(this.props.courseId);
                    var newUserData2 = DataProvider.getUserLogget();
                    newUserData2.courses= newCourseArray2;
                    DataProvider.addCourseUser(newUserData2)
                    this.setState({
                        checked: true
                     }); 
                }
            }
        }
    }
 
    render() {
      return (
          <div>
          <label>
              <Switch onColor="#d14545" onChange={this.handleChange}  checked={this.state.checked} uncheckedIcon={false} height={22} width={48} />
          </label>
        </div>
      );
    }
  }
  
  export default Sswitch;
  