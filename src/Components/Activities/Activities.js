import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Info from '../Personal-info/Info';
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

            <div className='side-bar'>
                <h3 className='side-cart'>Personal Info</h3>
                <Info></Info>
            </div>
        </div>


    );
};

export default Activities;