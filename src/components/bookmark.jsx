import React from "react";

const Bookmark = (props) => {
    return (
        <i
            className={`bi bi-toggle-${props.bookmark ? "on" : "off"} fs-4 m-4`}
            onClick={() => props.onChangeBookmark(props._id)}
        ></i>
    );
};

export default Bookmark;
