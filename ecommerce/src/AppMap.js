import React from 'react';

const App = () => {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    const students = [
        {
            sid: 1,
            sName: "Thanu"
        },
        {
            sid: 2,
            sName: "Jack"
        },
        {
            sid: 3,
            sName: "Rony"
        },
        {
            sid: 4,
            sName: "Tom"
        }
    ];
    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <h1>Student List</h1>
            <ul>
                {students.map(({ sName, sid }) => (
                    <li key={sid}>{sName}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;