import React, { useState, useEffect } from "react";
import API from "./api";
import Users from "./components/users";
import Loader from "./components/loader";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handlerDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handlerChangeBookmark = (id) => {
        const userId = users.findIndex((user) => user._id === id);
        const favUsers = [...users];
        favUsers[userId].bookmark = !favUsers[userId].bookmark;
        setUsers(favUsers);
    };

    if (users) {
        return (
            <Users
                users={users}
                onDelete={handlerDelete}
                onChangeBookmark={handlerChangeBookmark}
            />
        );
    }
    return <Loader />;
};

export default App;
