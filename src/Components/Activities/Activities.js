import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Info from '../Personal-info/Info';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [singleActivity, setSingleActivity] = useState([]);
    const [breakTime, setBreakTime] = useState([]);


    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const addToList = (activity) => {
        const newActivity = [...singleActivity, activity];
        setSingleActivity(newActivity);
    }
    const addBreakTime = (time) => {
        setBreakTime(time);
    }

    return (

        <div className='activity-container'>
            <div>
                <h3 className='activity-title'>Select Activities for Today</h3>
                <div className='activities-section'>

                    {
                        activities.map(activity => <Activity addToList={addToList} key={activity._id} activity={activity}></Activity>)
                    }

                </div>
            </div>

            <div className='side-bar'>
                <div className='side-cart'>
                    <h3>Personal Info</h3>
                    <Info></Info>
                    <h3>Add a Break</h3>
                    <Break addBreakTime={addBreakTime}></Break>
                    <h3>Activity Details</h3>
                    <Details breakTime={breakTime} singleActivity={singleActivity}></Details>
                </div>

            </div>
        </div>


    );
};

export default Activities;