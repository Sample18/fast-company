import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark, _id, onChangeBookmark }) => {
    return (
        <i
            className={`bi bi-toggle-${bookmark ? "on" : "off"} fs-4 m-4`}
            onClick={() => onChangeBookmark(_id)}
        ></i>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
    onChangeBookmark: PropTypes.func.isRequired
};

export default Bookmark;
