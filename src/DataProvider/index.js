import Courses from "./../bd/courses"
import Users from "./../bd/students"

const DataProvider = {

//Courses provider:

    //Initialize the courses using the data stored in the database
    initializeCourses : () =>{
        if(localStorage.getItem("bdLoadedCourse")===null){
            const aux = {};
            Courses.bind(aux)();
            localStorage.setItem('Courses', JSON.stringify(aux.items))
            localStorage.setItem('bdLoadedCourse', true)
        }
    },
    //Get the courses saved in the localstorage
    getCourses : () =>{
       return (JSON.parse(localStorage.getItem("Courses")))

    },
    //Update the localstorage with the DELETED course
    deleteCourse: (data) => {
        localStorage.setItem('Courses', JSON.stringify(data))
    },
    //Update the localstorage with the UPDATED course
    updateCourse: (data) => {
        localStorage.setItem('Courses', JSON.stringify(data))
    },
    //Update the localstorage with the ADDED course
    CreateCourse: (data) => {
        localStorage.setItem('Courses', JSON.stringify(data))
    },

//Users provider:

    //Initialize the list of Students using the data stored in the database
    initializeUsers : () =>{
        if(localStorage.getItem("bdLoadedUsers")===null){
        const aux = {};
        Users.bind(aux)();
        localStorage.setItem('Users', JSON.stringify(aux.items))
        localStorage.setItem('bdLoadedUsers', true)
        }
    },
    //Get the courses saved in the localstorage
    getUsers : () =>{
        return (JSON.parse(localStorage.getItem("Users")))
     
    },
    //save the user who is currently logged in
    userLoggedIn : (user) =>{
        localStorage.setItem('userLogged', JSON.stringify(user))
    },
     //save course user
     addCourseUser : (user) =>{
        localStorage.setItem('userLogged', JSON.stringify(user))
    },
    //delete course user
    removeCourseUser : (user) =>{
        localStorage.setItem('userLogged', JSON.stringify(user))
    },
    //Get the user logged
    getUserLogget : () =>{
        return (JSON.parse(localStorage.getItem("userLogged")))  
    },
    //Remove the user who is currently logged in
    logOut : () =>{
        localStorage.removeItem('userLogged')
    },
    //Update the localstorage with the UPDATED course
    updateUser: (data) => {
        localStorage.setItem('Users', JSON.stringify(data))
    },
    //Update the localstorage with the ADDED course
    CreateUser: (data) => {
        localStorage.setItem('Users', JSON.stringify(data))
    },


}

export default DataProvider;