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
            <div>
                <h3 className='activity-title'>Select Activities for Today</h3>
                <div className='activities-section'>

                    {
                        activities.map(activity => <Activity key={activity._id} activity={activity}></Activity>)
                    }

                </div>
            </div>

            <div className='activity-list'>
                <h3 className='activity-cart'>Activity List</h3>
            </div>
        </div>


    );
};

export default Activities;