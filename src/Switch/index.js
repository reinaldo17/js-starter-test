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
            var flag =false
            var flag2 =false
            for(var x=0; DataProvider.getCourses().length>x; x++){          
                if(flag){break}
                if(flag2){break}
                if(!flag && !flag2){
                    for(var k=0; auxDays.length>k;k++){
                            if(auxID!==DataProvider.getCourses()[x].id ){
                                for(var j=0; DataProvider.getUserLogget().courses.length>j;j++){
                                    if(DataProvider.getUserLogget().courses[j]===DataProvider.getCourses()[x].id && !flag){
                                        for(var i=0; DataProvider.getCourses()[x].days.length>i;i++){
                                            if(DataProvider.getCourses()[x].days[i]===auxDays[k]){
                                                flag=true
                                                alert("This course has the same schedule as another already selected")
                                                this.setState({
                                                    checked: false
                                                 });
                                            }else{
                                                if(!flag && !flag2){
                                                    flag2=true;
                                                    if(flag===false){
                                                        var newCourseArray = DataProvider.getUserLogget().courses.concat(this.props.courseId);
                                                        var newUserData = DataProvider.getUserLogget();
                                                        newUserData.courses= newCourseArray;
                                                        DataProvider.addCourseUser(newUserData)
                                                    }   
                                                }
                                            }
                                        }
                                    }
                                }      
                            }
                        }  
                    }
            }
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
  