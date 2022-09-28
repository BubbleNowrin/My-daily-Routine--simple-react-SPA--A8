import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='activity-container'>
            {/* <div><h4>Select Activities for Today</h4></div> */}
            <div className='activities-section'>

                {
                    activities.map(activity => <Activity key={activity._id} activity={activity}></Activity>)
                }

            </div>
            <div className='activity-list'>
                <h4>List</h4>
            </div>
        </div>

    );
};

export default Activities;