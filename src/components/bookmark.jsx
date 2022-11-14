import React from 'react';

const Bookmark = (props) => {

    return props.bookmark
        ? <i className="bi bi-toggle-off" onClick={() => props.onChangeBookmark(props._id)}></i>
        : <i className="bi bi-toggle-on" onClick={() => props.onChangeBookmark(props._id)}></i>
}

export default Bookmark