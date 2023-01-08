import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const numWord = () => {
        const words = ["человек", "человека"];
        const value = Math.abs(length) % 100;
        const num = value % 10;
        if (value > 10 && value < 20) return words[0];
        if (num > 1 && num < 5) return words[1];
        if (num === 1) return words[0];
        return words[0];
    };

    if (length > 0) {
        return (
            <span className="badge bg-primary fs-4">
                {length} {numWord(length)} тусанет с тобой сегодня
            </span>
        );
    }
    return (
        <span className="badge bg-danger fs-4">Никто с тобой не пойдет</span>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
