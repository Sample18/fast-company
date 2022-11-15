import React from 'react';

const Qualiti = (props) => {
    return <span className={'m-1 badge bg-' + props.color}>{props.name}</span>
}

export default Qualiti