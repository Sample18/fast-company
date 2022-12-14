import React from "react";
import PropTypes from "prop-types";

const Qualiti = ({ color, name }) => {
    return <span className={"m-1 badge bg-" + color}>{name}</span>;
};

Qualiti.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Qualiti;
