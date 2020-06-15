import Courses from "./../bd/courses"
import Users from "./../bd/students"

const DataProvider = {

//Provider de cursos:

    //Initialize the courses using the data stored in the database
    initializeCourses : () =>{
        const aux = {};
        Courses.bind(aux)();
        localStorage.setItem('Courses', JSON.stringify(aux.items))

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

//Provider de Users

    //Initialize the list of Students using the data stored in the database
    initializeUsers : () =>{
        const aux = {};
        Users.bind(aux)();
        localStorage.setItem('Users', JSON.stringify(aux.items))

    },
    //Get the courses saved in the localstorage
    getUsers : () =>{
        return (JSON.parse(localStorage.getItem("Users")))
     
    },

}

export default DataProvider;