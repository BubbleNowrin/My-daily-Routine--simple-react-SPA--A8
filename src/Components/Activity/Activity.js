import React from 'react';
import './Activity.css'

const Activity = (props) => {
    // console.log(props);
    const { picture, name, about, time } = props.activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <h2 className='activity-name'>{name}</h2>

            <p><small>{about}</small></p>
            <h4>Duration: {time} minutes</h4>

            <button onClick={() => props.addToList(props.activity)} className='btn'>
                <p className='btn-text'>Add to List</p>
            </button>

        </div>
    );
};

export default Activity;