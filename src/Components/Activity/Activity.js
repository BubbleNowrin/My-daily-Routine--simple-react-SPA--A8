import React from 'react';
import './Activity.css'

const Activity = (props) => {
    // console.log(props);
    const { picture, name, about, time } = props.activity;
    return (
        <div className='activity'>
            {/* <h2>{picture}</h2> */}
            <h3 className='activity-name'>{name}</h3>
            <p>{about}</p>
            <h4>{time}</h4>
            <button className='btn'>
                <p className='btn-text'>Add to List</p></button>

        </div>
    );
};

export default Activity;