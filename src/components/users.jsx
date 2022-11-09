import React, { useState } from 'react';
import API from '../api';

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const numWord = (length) => {
        const words = ['человек', 'человека']
        const value = Math.abs(length) % 100; 
        const num = value % 10;
        if(value > 10 && value < 20) return words[0]; 
        if(num > 1 && num < 5) return words[1];
        if(num === 1) return words[0]; 
        return words[0];
    }

    const handlerDelete = (id) => {
        setUsers(users.filter(user => user._id !== id))
    }

    const humanValue = () => {
        if (users.length > 0) {
            return <span className="badge bg-primary fs-4">{users.length} {numWord(users.length)} тусанет с тобой сегодня</span>
        }
        return <span className="badge bg-danger fs-4">Никто с тобой не пойдет</span>
    }

    const renderUsers = () => {
        return (
            <>
            {humanValue()}
            {users.length > 0 && 
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {users.map(user => 
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.qualities.map(q => <span key={q._id} className={'m-1 badge bg-'+q.color}>{q.name}</span>)}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}/5</td>
                                <td><button className='m-1 btn btn-danger' onClick={() => handlerDelete(user._id)}>delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>}
            </>
        )
    }
    
    return renderUsers()
}

export default Users