
import "./Details.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {


    const singleActivity = props.singleActivity;
    const breakTime = props.breakTime;

    let total = 0;
    for (const act of singleActivity) {
        total = total + parseInt(act.time);
    }

    const notify = () => toast("Wow! Today's Activity Completed");


    return (
        <div>
            <div className='activity-time'>
                <h3>Activity Time: {total} minutes</h3>
            </div>
            <div className='break-time'>
                <h3>Break Time: {breakTime} minutes</h3>
            </div>
            <div>
                <button className="btn-activity" onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Details;