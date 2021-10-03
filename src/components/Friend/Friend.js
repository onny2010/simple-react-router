import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const history = useHistory()

    const freindStyle = {
        border: '3px solid blue',
        padding: '20px',
        borderRadius: '14px'
    }
    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }

    return (
        <div style={freindStyle}>
            <h2>I am :{name}{id}</h2>
            <h5>call me :{phone}</h5>
            <h5>website :{website}</h5>
            <p>i live in :{address.city}</p>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;