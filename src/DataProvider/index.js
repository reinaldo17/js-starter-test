import Courses from "./../bd/courses"


const DataProvider = {
    initializeCourses : () =>{
        const aux = {};
        Courses.bind(aux)();
        localStorage.setItem('Courses', JSON.stringify(aux.items))

    },
    getCourses : () =>{
       return (JSON.parse(localStorage.getItem("Courses")))
    },
}

export default DataProvider;