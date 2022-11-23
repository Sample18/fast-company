import React, { useState } from "react";
import API from "./api";
import searchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handlerDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handlerChangeBookmark = (id) => {
        const userId = users.findIndex((user) => user._id === id);
        const favUsers = [...users];
        favUsers[userId].bookmark = !favUsers[userId].bookmark;
        setUsers(favUsers);
    };

    return (
        <>
            {searchStatus(users)}
            <Users
                users={users}
                onDelete={handlerDelete}
                onChangeBookmark={handlerChangeBookmark}
            />
        </>
    );
};

export default App;
