import React from "react";

const searchStatus = (props) => {
    const numWord = () => {
        const words = ["человек", "человека"];
        const value = Math.abs(props.length) % 100;
        const num = value % 10;
        if (value > 10 && value < 20) return words[0];
        if (num > 1 && num < 5) return words[1];
        if (num === 1) return words[0];
        return words[0];
    };

    if (props.length > 0) {
        return (
            <span className="badge bg-primary fs-4">
                {props.length} {numWord(props.length)} тусанет с тобой сегодня
            </span>
        );
    }
    return (
        <span className="badge bg-danger fs-4">Никто с тобой не пойдет</span>
    );
};

export default searchStatus;
