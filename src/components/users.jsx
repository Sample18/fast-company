import React, { useState } from 'react';
import API from '../api';

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    return
}

export default Users