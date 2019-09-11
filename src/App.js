import React from 'react';
import Courses from "./bd/courses";
import './App.css';

function App() {

    const output = [];
    const courses = new Courses();
    courses.items.map(item => {
        output.push(<div>{item.name}</div>);
    });

    return (
        <div className="App">
            <header className="App-header">
                {output}

            </header>
        </div>
    );
}

export default App;
