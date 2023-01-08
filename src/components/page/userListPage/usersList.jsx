import React, { useState, useEffect } from "react";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import PropTypes from "prop-types";
import GroupList from "../../common/groupList";
import API from "../../../api";
import SearchStatus from "../../ui/searchStatus";
import _ from "lodash";
import UserTable from "../../ui/usersTable";
import Loader from "../../common/loader";
import TextField from "../../common/form/textField";

const UsersList = () => {
    const [users, setUsers] = useState();
    const [searchValue, setSearchValue] = useState("");
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

    const handleSearchChange = ({ target }) => {
        setSearchValue(target.value.trim());
    };

    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const clearFilter = () => {
        setSelectedProf();
    };

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        setSearchValue("");
    }, [selectedProf]);

    useEffect(() => {
        if (searchValue && selectedProf) {
            setSelectedProf();
        }
    }, [searchValue]);

    if (users) {
        const searchedUsers = users.filter(
            (user) =>
                user.name.toLowerCase().indexOf(searchValue.toLowerCase()) !==
                -1
        );

        const filteredUsers = selectedProf
            ? users.filter((user) => _.isEqual(user.profession, selectedProf))
            : searchedUsers;

        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const userCrop = paginate(sortedUsers, currentPage, pageSize);

        if (userCrop.length === 0 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <TextField
                        label=""
                        type="search"
                        name="search"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                    {count > 0 && (
                        <UserTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handlerDelete}
                            onChangeBookmark={handlerChangeBookmark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return <Loader />;
};

UsersList.propTypes = {
    users: PropTypes.array
};

export default UsersList;
