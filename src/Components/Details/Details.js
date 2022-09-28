import React from 'react';
import "./Details.css"

const Details = (props) => {
    const singleActivity = props.singleActivity;

    let total = 0;
    for (const act of singleActivity) {
        total = total + parseInt(act.time);
    }


    return (
        <div>
            <div className='activity-time'>
                <h3>Activity Time: {total} minutes</h3>
            </div>
            <div className='break-time'>
                <h3>Break Time: 0</h3>
            </div>
        </div>
    );
};

export default Details;