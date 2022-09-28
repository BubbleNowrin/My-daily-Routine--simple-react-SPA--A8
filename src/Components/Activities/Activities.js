import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Info from '../Personal-info/Info';
import Question from '../Question/Question';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [singleActivity, setSingleActivity] = useState([]);
    const getTimeFromLS = () => {
        const stored = localStorage.getItem('break-time');
        return stored;
    }
    const [breakTime, setBreakTime] = useState(getTimeFromLS());


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

        localStorage.setItem('break-time', time);
        setBreakTime(time);

    }



    return (

        <div>
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
            <div className='question-section'>
                <Question></Question>
            </div>
        </div>


    );
};

export default Activities;