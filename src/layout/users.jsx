import React from "react";
import { useParams } from "react-router-dom";
import User from "../components/page/userPage";
import UsersList from "../components/page/userListPage";

const Users = () => {
    const { userId } = useParams();

    return userId ? <User id={userId} /> : <UsersList />;
};

export default Users;
