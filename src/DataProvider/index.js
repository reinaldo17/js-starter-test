import Courses from "./../bd/courses"


const DataProvider = {

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

}

export default DataProvider;