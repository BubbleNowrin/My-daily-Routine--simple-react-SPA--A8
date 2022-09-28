import React from 'react';
import "./Break.css"

const Break = (props) => {

    return (
        <div className='btn-container'>
            <button onClick={() => props.addBreakTime(10)}>10m</button>
            <button onClick={() => props.addBreakTime(20)}>20m</button>
            <button onClick={() => props.addBreakTime(30)}>30m</button>
            <button onClick={() => props.addBreakTime(40)}>40m</button>
            <button onClick={() => props.addBreakTime(50)}>50m</button>
        </div>
    );
};

export default Break;