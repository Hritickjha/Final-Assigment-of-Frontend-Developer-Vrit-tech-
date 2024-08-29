import React, { useState, useEffect } from 'react';

const FetchData = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {records.map((list, index) => (
                    <li key={index}>
                        {list.id} | {list.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchData;
