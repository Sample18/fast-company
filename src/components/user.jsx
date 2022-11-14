import React from 'react';
import Qualiti from './qualiti';
import Bookmark from './bookmark';

const props = (props) => {

    return <tr>
        <td>{props.name}</td>
        <td>{props.qualities.map(q => <Qualiti {...q} key={q._id} />)}</td>
        <td>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate}/5</td>
        <td><Bookmark onChangeBookmark={props.onChangeBookmark} {...props} /></td>
        <td><button className='m-1 btn btn-danger' onClick={() => props.onDelete(props._id)}>delete</button></td>
    </tr>
}

export default props