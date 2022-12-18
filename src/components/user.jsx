import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../api";
import Loader from "./loader";
import QualitiesList from "./qualitiesList";

const User = ({ id }) => {
    const [user, setUser] = useState();
    const history = useHistory();
    useEffect(() => {
        API.users.getById(id).then((data) => setUser(data));
    }, []);
    const handleDown = () => history.replace("/users");

    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h3>Профессия: {user.profession.name}</h3>
                <h3>
                    Качества: <QualitiesList qualities={user.qualities} />
                </h3>
                <h3>Встреч всего: {user.completedMeetings}</h3>
                <h3>Рейтинг: {user.rate}</h3>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleDown()}
                >
                    Все пользователи
                </button>
            </>
        );
    }
    return <Loader />;
};

User.propTypes = {
    id: PropTypes.string.isRequired
};

export default User;
